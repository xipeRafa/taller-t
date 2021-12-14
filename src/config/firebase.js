import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyB2F4R4KkxUwb4GFKs7twRhiHS5i-i51D4",
  authDomain: "scopic-73416.firebaseapp.com",
  projectId: "scopic-73416",
  storageBucket: "scopic-73416.appspot.com",
  messagingSenderId: "475263107333",
  appId: "1:475263107333:web:27180a036864e16618376c"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();


