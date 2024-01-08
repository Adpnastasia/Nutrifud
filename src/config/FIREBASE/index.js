import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyD7MCeldJ88ldViDtN_p_xYrm7cKHAE3l4",
    authDomain: "nutrifud-1f313.firebaseapp.com",
    projectId: "nutrifud-1f313",
    storageBucket: "nutrifud-1f313.appspot.com",
    messagingSenderId: "615038167845",
    appId: "1:615038167845:web:028bef632dfe69fd2188cc"
});

const FIREBASE = firebase;

export default FIREBASE;