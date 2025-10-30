// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// ✅ Your Firebase configuration (keep your existing values)
const firebaseConfig = {
  apiKey: "AIzaSyCaQwlczbydhZVXyiA5E27QnoEgE2_D8-A",
  authDomain: "reddit-clone-8d563.firebaseapp.com",
  projectId: "reddit-clone-8d563",
  storageBucket: "reddit-clone-8d563.firebasestorage.app",
  messagingSenderId: "559461450013",
  appId: "1:559461450013:web:c3bbd2135b2d8b439021f4",
  measurementId: "G-0CY4DH1BEE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firebase Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export for use in Login.jsx
export { auth, provider, signInWithPopup };
