// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAf6LdYqS8zi1Xi44UR8GqxVCim6asm1pU",
  authDomain: "fire-chat-8c19f.firebaseapp.com",
  projectId: "fire-chat-8c19f",
  storageBucket: "fire-chat-8c19f.appspot.com",
  messagingSenderId: "83817469578",
  appId: "1:83817469578:web:c2ca51ddb26e08b104bf73",
  measurementId: "G-PJD9P07WDZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
const analytics = getAnalytics(app);