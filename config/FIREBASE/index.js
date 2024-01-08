import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyBhzwxjNxn4UjHhBBPsy8dHiXBkD6AurGE",
    authDomain: "nutrifud-e9af4.firebaseapp.com",
    projectId: "nutrifud-e9af4",
    storageBucket: "nutrifud-e9af4.appspot.com",
    messagingSenderId: "448712934533",
    appId: "1:448712934533:web:cb5e93ed1eec4f388295ec"
  });

const FIREBASE = firebase;

export default FIREBASE;