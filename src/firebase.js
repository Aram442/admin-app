// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBOfvPpb2pmjZiRjFUalBnQgzbe2cOfvSs",
  authDomain: "react-dashboard-148a0.firebaseapp.com",
  projectId: "react-dashboard-148a0",
  storageBucket: "react-dashboard-148a0.appspot.com",
  messagingSenderId: "134513796307",
  appId: "1:134513796307:web:6282e70db090fbbbf56026",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
