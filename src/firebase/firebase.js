// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBkhGJk4ILlembn5mJ7qoIxOvAtn3z3F54",
  authDomain: "tree-4b87c.firebaseapp.com",
  projectId: "tree-4b87c",
  storageBucket: "tree-4b87c.appspot.com",
  messagingSenderId: "392110694515",
  appId: "1:392110694515:web:1a52cd639fd96a79168a06",
  measurementId: "G-2RBS5F453W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;