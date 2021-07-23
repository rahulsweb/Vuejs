import firebase from "firebase";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBMUafp7wfOrStqr4C7AW1T3qC8bi2mp6E",
  authDomain: "friend-location-1c770.firebaseapp.com",
  databaseURL: "https://friend-location-1c770-default-rtdb.firebaseio.com",
  projectId: "friend-location-1c770",
  storageBucket: "friend-location-1c770.appspot.com",
  messagingSenderId: "179053533844",
  appId: "1:179053533844:web:ed65713797257b3490b281",
  measurementId: "G-Y1B9XXHLSD"
};
var fire = firebase.initializeApp(firebaseConfig);
export default fire;
