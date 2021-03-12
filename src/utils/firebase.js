import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAuybOMmNJ9_e8xGQ9N8JepcgJHhcf8E1A",
  authDomain: "ecomm-7ce95.firebaseapp.com",
  databaseURL: "https://ecomm-7ce95-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ecomm-7ce95",
  storageBucket: "ecomm-7ce95.appspot.com",
  messagingSenderId: "429528170617",
  appId: "1:429528170617:web:ac4fe1d10ce071b2c794a8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
