import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgmYLNDl_jOzB1GwbKvdt9CCfnuLT-HoI",
  authDomain: "hanghae99-week4.firebaseapp.com",
  projectId: "hanghae99-week4",
  storageBucket: "hanghae99-week4.appspot.com",
  messagingSenderId: "950472638319",
  appId: "1:950472638319:web:b6780b110573ccaaed329a",
  measurementId: "G-JJF2KESKJ5"
};

initializeApp(firebaseConfig);

export const db = getFirestore();