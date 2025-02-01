const catchAsync = require('../utils/catchAsync');
const { authService } = require('../services/auth.service');
const { User } = require('../models/user.model'); // Import User model

const authController = {
    register: catchAsync(async (req, res) => {
        try {
            const { fullName, phone, email, password, confirmPassword, role } = req.body;

            // Check password and confirmPassword
            if (password !== confirmPassword) {
                return res.status(400).json({ message: 'Passwords do not match' });
            }

            const { user, token } = await authService.register(fullName, phone, email, password, role);
            console.log('User:', user);
            res.status(201).json({ user, token, message: 'Registration successful! A verification email has been sent.' });

        }
        catch (error) {
            console.error('Registration error:', {
                message: error.message,
                stack: error.stack,
                code: error.code
            });

            if (error.code === 11000) {
                return res.status(400).json({ message: 'Email is already registered' });
            }

            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }),

    login: catchAsync(async (req, res) => {
        try {
            const { email, password } = req.body;
            const { user, token } = await authService.login(email, password);
            res.status(200).json({ user, token });
        } catch (error) {
            if (error.code === 404) {
                res.status(404).json({ message: 'User not found' });
            } else if (error.code === 401) {
                res.status(401).json({ message: 'Invalid credentials' });
            } else if (error.code === 403) {
                res.status(403).json({ message: 'Email not verified' });
            } else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    }),

    googleAuth: catchAsync(async (req, res) => {
        try {
            const { idToken } = req.body;
            const { user, token } = await authService.googleAuth(idToken);
            res.status(200).json({ user, token });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }),

    verifyEmail: async (req, res) => {
        try {
            const { token } = req.query;

            if (!token) {
                return res.status(400).json({ success: false, message: 'User ID and verification code are required' });
            }

            const user = await User.findOne({ verificationToken: token, verificationTokenExpiry: { $gt: Date.now() - 5 * 60 * 1000 } });
            if (!user) {
                return res.status(400).json({ success: false, message: 'Invalid or expired token' });
            }

            user.isEmailVerified = true;
            user.verificationToken = undefined;
            user.verificationTokenExpiry = undefined;
            await user.save();

            res.status(200).json({ success: true, message: 'Email verified successfully' });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }

};

module.exports = { authController };
