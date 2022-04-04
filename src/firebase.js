import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBZfCi1Rd1yttJQq_uItrbZqewqkouczfU",
  authDomain: "line-clone-efe48.firebaseapp.com",
  projectId: "line-clone-efe48",
  storageBucket: "line-clone-efe48.appspot.com",
  messagingSenderId: "1044323931905",
  appId: "1:1044323931905:web:1237ddf1c70deccc0aed00"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth }

