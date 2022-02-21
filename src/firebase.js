import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,updateProfile } from "firebase/auth";
import {doc,setDoc,getFirestore} from 'firebase/firestore'

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
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

export const HandleSignUp = async (Email,Password,Name)=>{
 await createUserWithEmailAndPassword(auth,Email,Password)
await updateProfile(auth.currentUser,{displayName:Name})
 
}

export const HandleSignin = async (Email,Password)=>{
  await signInWithEmailAndPassword(auth,Email,Password).then((user)=>{
    
  })
  .catch((error)=>{console.log(error.code)})
}




