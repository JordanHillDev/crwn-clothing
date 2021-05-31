import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBhzSv0qtkn1DLcaG4eElfntGrHgSCDUl8",
  authDomain: "crown-clothing-cf1a4.firebaseapp.com",
  projectId: "crown-clothing-cf1a4",
  storageBucket: "crown-clothing-cf1a4.appspot.com",
  messagingSenderId: "507521761630",
  appId: "1:507521761630:web:75a4a36f1e729f1afa4fcf",
  measurementId: "G-HT3R2FG1LC"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
