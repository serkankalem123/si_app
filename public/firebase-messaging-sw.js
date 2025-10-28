// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5NjB_yv61XLqCOazv8WVDooBVDmvQWC8",
  authDomain: "si-app-be948.firebaseapp.com",
  projectId: "si-app-be948",
  storageBucket: "si-app-be948.firebasestorage.app",
  messagingSenderId: "959224695369",
  appId: "1:959224695369:web:96fd41e33c3c60b201cd98",
  measurementId: "G-GK9X2XXJ9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
