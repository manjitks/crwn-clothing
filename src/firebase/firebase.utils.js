import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD2v7BsCK3VST_PqO7_MvsTREjyW4yhQvQ",
    authDomain: "crwn-db-c1690.firebaseapp.com",
    databaseURL: "https://crwn-db-c1690.firebaseio.com",
    projectId: "crwn-db-c1690",
    storageBucket: "crwn-db-c1690.appspot.com",
    messagingSenderId: "219573137500",
    appId: "1:219573137500:web:d0ccbac2dff85f9f607699",
    measurementId: "G-DS0T4KLHNB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;