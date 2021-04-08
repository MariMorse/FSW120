import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC76hPeOrMBFwU4rLGLCxmC8Ihiiueq31M",
    authDomain: "my-twitter-app-d100f.firebaseapp.com",
    projectId: "my-twitter-app-d100f",
    storageBucket: "my-twitter-app-d100f.appspot.com",
    messagingSenderId: "949018658532",
    appId: "1:949018658532:web:28f5d8583e927b04e94ef1",
    measurementId: "G-97Q3RPTMMT"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
  