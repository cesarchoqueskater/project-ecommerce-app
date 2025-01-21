// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKm-RdIAG60UO5LyJ5WoJwvGaVhQrhUMA",
  authDomain: "project-ecommerce-app-reactjs.firebaseapp.com",
  projectId: "project-ecommerce-app-reactjs",
  storageBucket: "project-ecommerce-app-reactjs.firebasestorage.app",
  messagingSenderId: "340993625745",
  appId: "1:340993625745:web:18887420be9da441b4b930"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);