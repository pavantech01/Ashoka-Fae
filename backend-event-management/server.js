require('dotenv').config(); // Load environment variables
const app = require('./src/app'); // Import the app instance
const connectDB = require('./src/config/db.config'); // Database connection setup
const initializeFirebase = require('./src/config/firebase.config'); // Firebase setup

// Initialize Firebase Admin
initializeFirebase();

// Connect to MongoDB
connectDB().then(() => {
    console.log('Connected to MongoDB successfully.');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process if DB connection fails
});

// Start the Server
const PORT = process.env.PORT || 5000 || process.env.REACT_APP_API_URL;
const server = app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});

// Graceful Shutdown for Process Termination
process.on('SIGTERM', () => {
    console.log('SIGTERM received. Shutting down gracefully...');
    server.close(() => {
        console.log('Server closed.');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('SIGINT received. Shutting down gracefully...');
    server.close(() => {
        console.log('Server closed.');
        process.exit(0);
    });
});
