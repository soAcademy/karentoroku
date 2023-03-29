import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAc0ujDQ1_CvZURQFAXi87GFvxP0rt6VVA",
  authDomain: "karentoroku.firebaseapp.com",
  projectId: "karentoroku",
  storageBucket: "karentoroku.appspot.com",
  messagingSenderId: "265114371179",
  appId: "1:265114371179:web:20c12dcd2009be49045d2e",
  measurementId: "G-DKG3JGNXTW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export { auth, provider };
