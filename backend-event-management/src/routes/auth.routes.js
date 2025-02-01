const express = require('express');
const router = express.Router();
const { authController } = require('../controllers/auth.controller');
const { validate } = require('../middleware/validate.middleware');

// Registration route
router.post('/register', validate('register'), authController.register);

// Login route
router.post('/login', authController.login);

// Google authentication route
router.post('/google', authController.googleAuth);

// Email verification route
router.post('/verify-email', authController.verifyEmail);
router.get('/verify-email', authController.verifyEmail);

module.exports = router;
