// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKQ0A5ESanCf0H-l6OdTC7cwxX-uPhi0U",
  authDomain: "fir-login-59feb.firebaseapp.com",
  projectId: "fir-login-59feb",
  storageBucket: "fir-login-59feb.appspot.com",
  messagingSenderId: "604058219037",
  appId: "1:604058219037:web:9154e401e7e1f2f2bdccf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {app, auth};
