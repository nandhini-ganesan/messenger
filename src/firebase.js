import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdmUNqhE3h15BlxCBM8P3lxaE4VThcFvI",
  authDomain: "messenger-clone-41467.firebaseapp.com",
  projectId: "messenger-clone-41467",
  storageBucket: "messenger-clone-41467.appspot.com",
  messagingSenderId: "480077297837",
  appId: "1:480077297837:web:2c6d59f78fceffe0e02e24",
  measurementId: "G-XH0EQ8WR83",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
