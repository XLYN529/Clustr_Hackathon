//console.log("Firebase configuration:", firebaseConfig);
//console.log("Firebase app initialized:", app);
//console.log("Firebase analytics:", analytics);// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const firebaseConfig = {
  apiKey: "AIzaSyBzyA_vDdhaIhBRa5cHXc5EIPl3-vGeXmo",
  authDomain: "studyspace-ba88a.firebaseapp.com",
  projectId: "studyspace-ba88a",
  storageBucket: "studyspace-ba88a.appspot.com",
  messagingSenderId: "1008594304935",
  appId: "1:1008594304935:web:e756fff7bc38cac99e8082",
  measurementId: "G-EM4EFG3W4S",
  databaseURL: "https://studyspace-ba88a-default-rtdb.firebaseio.com"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
