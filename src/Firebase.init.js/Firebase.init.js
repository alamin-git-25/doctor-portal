// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkLVLRIDrwKu1Cecu3mSA5YR1jqj6cPQs",
  authDomain: "doctor-portal-338d9.firebaseapp.com",
  projectId: "doctor-portal-338d9",
  storageBucket: "doctor-portal-338d9.appspot.com",
  messagingSenderId: "208407377095",
  appId: "1:208407377095:web:9fd6c2efb8972c60debae2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;