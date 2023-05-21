// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOANzRJWNQVBXa8_qEcHGBshRkr1E_f84",
  authDomain: "homefinder-5a343.firebaseapp.com",
  projectId: "homefinder-5a343",
  storageBucket: "homefinder-5a343.appspot.com",
  messagingSenderId: "435023880043",
  appId: "1:435023880043:web:569c9e0e01b9b72b11f62e",
  measurementId: "G-GLMW6RSCRT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const db = getDatabase();
