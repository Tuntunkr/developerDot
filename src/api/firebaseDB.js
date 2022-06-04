import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyAZ-g6h6rqg0Yu4vpDhVu495nu0TYdN0zc",
  authDomain: "developerdot-150b0.firebaseapp.com",
  databaseURL: "https://developerdot-150b0-default-rtdb.firebaseio.com",
  projectId: "developerdot-150b0",
  storageBucket: "developerdot-150b0.appspot.com",
  messagingSenderId: "742899646471",
  appId: "1:742899646471:web:c8d6fefec0743b2472eaa2",
  measurementId: "G-YFZPD32R8D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestoreDB = firebase.firestore();

export default firestoreDB;
