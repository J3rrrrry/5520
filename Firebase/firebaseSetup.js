import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC87UK4SiZf-ntOdOP0dnMGqV_JqtIvT-8",
    authDomain: "jerry-773a3.firebaseapp.com",
    projectId: "jerry-773a3",
    storageBucket: "jerry-773a3.appspot.com",
    messagingSenderId: "944100721645",
    appId: "1:944100721645:web:6223348aa98da377669de4",
    measurementId: "G-EGSE13NJRE"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);