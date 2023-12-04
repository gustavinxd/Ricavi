// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMOC6LSqPDDoYHpFU1HdgPteiYilbbiiM",
  authDomain: "receiitas.firebaseapp.com",
  projectId: "receiitas",
  storageBucket: "receiitas.appspot.com",
  messagingSenderId: "205530695742",
  appId: "1:205530695742:web:cbd20a100dd3dbf211296f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword};

