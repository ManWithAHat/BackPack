import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCpmy2uPBoAx9QIhF6MLIjiUPDPRmG3TWs",
  authDomain: "backpack-985b4.firebaseapp.com",
  projectId: "backpack-985b4",
  storageBucket: "backpack-985b4.appspot.com",
  messagingSenderId: "943095261556",
  appId: "1:943095261556:web:16e0835e31e8bdd388e421",
  measurementId: "G-0KBXJZJ3BC"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
export const GoogleAuth = ()=>{signInWithPopup(auth, GoogleAuthProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });}
