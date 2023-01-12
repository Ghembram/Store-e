import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCpnLZfmgn_e_0_GOVsy4CF-sKQ5EBW2io",
  authDomain: "store-e-react.firebaseapp.com",
  projectId: "store-e-react",
  storageBucket: "store-e-react.appspot.com",
  messagingSenderId: "576491321338",
  appId: "1:576491321338:web:d5efdb56292ae73d611643",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage };
