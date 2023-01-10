// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnL9aqHasrQ8Hm_BndT8VX-dHsBQ3_sG4",
  authDomain: "project1-6e537.firebaseapp.com",
  projectId: "project1-6e537",
  storageBucket: "project1-6e537.appspot.com",
  messagingSenderId: "142501835775",
  appId: "1:142501835775:web:d65c0eabcfa9f03245edca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);