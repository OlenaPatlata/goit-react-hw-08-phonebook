// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'phonebookbc14.firebaseapp.com',
  projectId: 'phonebookbc14',
  storageBucket: 'phonebookbc14.appspot.com',
  messagingSenderId: '151695674999',
  appId: '1:151695674999:web:0aff3a98bf0f07efcb4072',
};
console.log(process.env.REACT_APP_FIREBASE_KEY);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const firebase = { auth, createUserWithEmailAndPassword };
