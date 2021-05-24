import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD8KhER9AAfWqRSHTLeeNHFA2j-QIQP8g0",
  authDomain: "crwn-db-a4f27.firebaseapp.com",
  projectId: "crwn-db-a4f27",
  storageBucket: "crwn-db-a4f27.appspot.com",
  messagingSenderId: "476201881889",
  appId: "1:476201881889:web:e0556a6f3c1b6a95f5ae60",
  measurementId: "G-L72MRK3SYQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
