import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"; 
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    
    apiKey: "AIzaSyDFAzevrqO4mMCSTGUKHn0NpNZjwOHR3gY",
    authDomain: "event-management-145.firebaseapp.com",
    projectId: "event-management-145",
    storageBucket: "event-management-145.firebasestorage.app",
    messagingSenderId: "987630137437",
    appId: "1:987630137437:web:b97d46f8cd006bba225db4",
    measurementId: "G-KL8M256K0L"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
