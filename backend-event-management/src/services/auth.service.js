const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer'); // Import Nodemailer
const { User } = require('../models/user.model');
const admin = require('firebase-admin');
require('dotenv').config();
const crypto = require('crypto');
const catchAsync = require('../utils/catchAsync');

const authService = {
    // register: async (fullName, phoneNumber, email, password, role) => {
    //     try {
    //         const existingUser = await User.findOne({ email: email.toLowerCase() });
    //         if (existingUser) {
    //             throw new Error('User already exists');
    //         }

    //         // Create user in Firebase
    //         let firebaseUser;  // Declare firebaseUser before assignment
    //         try {
    //             firebaseUser = await admin.auth().createUser({
    //                 email: email.toLowerCase(),
    //                 password: password,
    //                 displayName: fullName,
    //                 emailVerified: false
    //             });
    //         } catch (firebaseError) {
    //             console.error('Firebase Error:', firebaseError.code, firebaseError.message);
    //             throw new Error(`Firebase error: ${firebaseError.message}`);
    //         }

    //         // Generate email verification link
    //         const actionCodeSettings = {
    //             url: `${process.env.FRONTEND_URL}/verify-email?uid=${firebaseUser.uid}`,
    //             handleCodeInApp: true
    //         };

    //         const verificationLink = await admin.auth().generateEmailVerificationLink(
    //             email,
    //             actionCodeSettings
    //         );

    //         const salt = await bcrypt.genSalt(10);
    //         const hashedPassword = await bcrypt.hash(password, salt);

    //         const user = new User({
    //             fullName,
    //             phoneNumber,
    //             email: email.toLowerCase(),
    //             password: hashedPassword,
    //             role,
    //             isEmailVerified: false,
    //             firebaseUid: firebaseUser.uid
    //         });

    //         await user.save();

    //         // Send verification email using Nodemailer
    //         await sendVerificationEmail(email, verificationLink);

    //         const token = jwt.sign(
    //             { userId: user._id, role: user.role },
    //             process.env.JWT_SECRET,
    //             { expiresIn: '24h' }
    //         );

    //         const userResponse = user.toObject();
    //         delete userResponse.password;

    //         return { user: userResponse, token, verificationLink };
    //     } catch (error) {
    //         console.error('Registration error:', error);
    //         throw error;
    //     }
    // },
    register: async (fullName, phoneNumber, email, password, role) => {
        try {
            const existingUser = await User.findOne({ email: email.toLowerCase() });
            if (existingUser) {
                // throw new Error('User already exists');
                const error = new Error('User already exists');
                error.code = 11000;
                throw error;
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const verificationToken = crypto.randomBytes(32).toString('hex'); // Generate token
            const verificationTokenExpiry = Date.now() + 3600000; // 1 hour expiry

            const user = new User({
                fullName,
                phoneNumber,
                email: email.toLowerCase(),
                password: hashedPassword,
                role,
                isEmailVerified: false,
                verificationToken,
                verificationTokenExpiry
            });

            await user.save();

            // Generate verification link
            const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}`;


            // Send email
            await sendVerificationEmail(email, verificationLink);

            const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '24h' });

            return { user, token, message: 'Registration successful! Please check your email to verify your account.' };
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    },

    verifyEmail: catchAsync(async (req, res) => {
        try {
            const { token } = req.query;

            if (!token) {
                return res.status(400).json({ success: false, message: 'Verification token is required' });
            }

            const user = await User.findOne({ verificationToken: token, verificationTokenExpiry: { $gt: Date.now() } });

            if (!user) {
                return res.status(400).json({ success: false, message: 'Invalid or expired token' });
            }

            user.isEmailVerified = true;
            user.verificationToken = undefined;
            user.verificationTokenExpiry = undefined;
            await user.save();

            res.status(200).json({ success: true, message: 'Email verified successfully' });
        } catch (error) {
            console.error('Verification error:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    })
    ,
    resendVerificationEmail: async (email) => {
        try {
            const user = await User.findOne({ email: email.toLowerCase() });
            if (!user) {
                throw new Error('User not found');
            }

            const actionCodeSettings = {
                url: `${process.env.FRONTEND_URL}/verify-email?uid=${user.firebaseUid}`,
                handleCodeInApp: true
            };

            const verificationLink = await admin.auth().generateEmailVerificationLink(
                email,
                actionCodeSettings
            );

            await sendVerificationEmail(email, verificationLink);

            return { message: 'Verification email sent successfully' };
        } catch (error) {
            console.error('Resend verification error:', error);
            throw error;
        }
    },

    login: async (email, password) => {
        try {
            const user = await User.findOne({ email: email.toLowerCase() });
            if (!user) {
                console.error('Login error: User not found');
                throw new Error('User not found');
            }

            if (!user.isEmailVerified) {
                console.error('Login error: Email not verified');
                throw new Error('Email not verified');
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                console.error('Login error: Invalid credentials');
                throw new Error('Invalid credentials');
            }

            const token = jwt.sign(
                { userId: user._id, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            const userResponse = user.toObject();
            delete userResponse.password;

            return { user: userResponse, token };
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }
};

// Function to send verification email using Nodemailer
const sendVerificationEmail = async (email, verificationLink) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Your email
            pass: process.env.EMAIL_PASS  // Your email password or app password
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Verify Your Email for Login',
        html: `
    <div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <h2 style="text-align: center; margin-bottom: 20px;">Verify Your Email</h2>
        <p style="font-size: 18px; margin-bottom: 20px;">Dear User,</p>
        <p style="font-size: 18px; margin-bottom: 20px;">To complete your registration, please click on the link below to verify your email address.</p>
        <p style="font-size: 18px; margin-bottom: 20px;">Click <a href="${verificationLink}" style="text-decoration: none; color: #337ab7;">here</a> to verify your email.</p>
        <p style="font-size: 18px; margin-bottom: 20px;">If you have any issues, please don't hesitate to contact us.</p>
        <p style="font-size: 18px; margin-bottom: 20px;">Best regards,</p>
        <p style="font-size: 18px; margin-bottom: 20px;">[Ashokafae Team]</p>
    </div>
`
    };

    await transporter.sendMail(mailOptions);
};

module.exports = { authService };
