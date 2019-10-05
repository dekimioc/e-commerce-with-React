import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBeHSkUKQYFwM2SqsD8Lnmt2-mnsHCMjxY",
    authDomain: "e-commerce-react-6af68.firebaseapp.com",
    databaseURL: "https://e-commerce-react-6af68.firebaseio.com",
    projectId: "e-commerce-react-6af68",
    storageBucket: "",
    messagingSenderId: "74233920863",
    appId: "1:74233920863:web:bf98eba23cb20a40594aea",
    measurementId: "G-W5NQG8TN89"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
    } catch(error) {
        console.log("Something went wrong with creating user", error.message)
    }
  }
  return userRef;
}


firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;