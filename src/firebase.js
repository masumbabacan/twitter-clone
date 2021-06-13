import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA0O311ckD_ksW_AnJDQKahtoz9PDQPrPQ",
    authDomain: "twitter-clone-e0cb1.firebaseapp.com",
    projectId: "twitter-clone-e0cb1",
    storageBucket: "twitter-clone-e0cb1.appspot.com",
    messagingSenderId: "165089850991",
    appId: "1:165089850991:web:2c43c96ba1841952547f9a",
    measurementId: "G-VQY8B3CSD2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;