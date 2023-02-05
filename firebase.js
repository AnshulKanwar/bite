// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKTYWAVEFTXW65B2KCtOVEx1L1fkyKmh8",
  authDomain: "bite-92f1c.firebaseapp.com",
  databaseURL: "https://bite-92f1c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bite-92f1c",
  storageBucket: "bite-92f1c.appspot.com",
  messagingSenderId: "769731509075",
  appId: "1:769731509075:web:9fed31416c7e03e4a43fa6",
  measurementId: "G-BYDZX4DL1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)