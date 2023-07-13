// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_SgZGDtLaV_nAvrvcWrXJpqyjasl394Y",
  authDomain: "redditclone-59718.firebaseapp.com",
  projectId: "redditclone-59718",
  storageBucket: "redditclone-59718.appspot.com",
  messagingSenderId: "1011426957141",
  appId: "1:1011426957141:web:b91cc572df50683a81c1dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// const db = getFirestore(app);
export { auth, provider };
