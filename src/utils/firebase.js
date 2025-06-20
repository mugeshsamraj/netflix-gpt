// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBm94PBahgnMjcaP6IONuf5CEx5ZJcIJvQ",
  authDomain: "netflix-gpt-74af4.firebaseapp.com",
  projectId: "netflix-gpt-74af4",
  storageBucket: "netflix-gpt-74af4.firebasestorage.app",
  messagingSenderId: "915657021386",
  appId: "1:915657021386:web:90a336a15288c7ab9c6133",
  measurementId: "G-KE2PMQ9HEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
