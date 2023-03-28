// copy this file to config.js and fill in data

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "___",
  authDomain: "___.firebaseapp.com",
  projectId: "___",
  storageBucket: "___.appspot.com",
  messagingSenderId: "___",
  appId: "___",
  // measurementId: "___",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
