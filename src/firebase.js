// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgmYLNDl_jOzB1GwbKvdt9CCfnuLT-HoI",
  authDomain: "hanghae99-week4.firebaseapp.com",
  projectId: "hanghae99-week4",
  storageBucket: "hanghae99-week4.appspot.com",
  messagingSenderId: "950472638319",
  appId: "1:950472638319:web:b6780b110573ccaaed329a",
  measurementId: "G-JJF2KESKJ5"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();