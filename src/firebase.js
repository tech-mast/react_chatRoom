
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYhR2TKWKwemrZqOJzG-JIp2Zi-r9iJGk",
    authDomain: "slack-clone-c5b0a.firebaseapp.com",
    projectId: "slack-clone-c5b0a",
    storageBucket: "slack-clone-c5b0a.appspot.com",
    messagingSenderId: "642069536389",
    appId: "1:642069536389:web:65ee74405819776ea9d3ec",
    measurementId: "G-3NGYFFHNX6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};