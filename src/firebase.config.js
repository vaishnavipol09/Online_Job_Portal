// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs8gzbAERT_NEgVFruJ34-ogrbqOAdoz4",
  authDomain: "online-job-portal-5e8ef.firebaseapp.com",
  projectId: "online-job-portal-5e8ef",
  storageBucket: "online-job-portal-5e8ef.appspot.com",
  messagingSenderId: "100395194483",
  appId: "1:100395194483:web:8d2e4c7d0648912a73f206"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};