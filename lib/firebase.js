import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCh8o9ipSlrkxdN5PwvL9Og3_w8zBDWjng",
  authDomain: "levelup-f9e57.firebaseapp.com",
  projectId: "levelup-f9e57",
  storageBucket: "levelup-f9e57.appspot.com",
  messagingSenderId: "306896029663",
  appId: "1:306896029663:web:a24e4d8eb358f1fcbde66a",
  measurementId: "G-Q37G1C52L9"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();