import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAakw3qq8aaBx0e_uJhjpEEcLRJnBIOTz8",
    authDomain: "fir-d5d8b.firebaseapp.com",
    projectId: "fir-d5d8b",
    storageBucket: "fir-d5d8b.appspot.com",
    messagingSenderId: "576587109620",
    appId: "1:576587109620:web:b07cf60113e06ceb47baa1",
    measurementId: "G-N3RCBRGH61"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export  {db, auth};