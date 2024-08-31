// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAycqnBO_VkDg3PY1IPU_2fINqzZ0ydDL4",
  authDomain: "fir-crud-fc6cf.firebaseapp.com",
  projectId: "fir-crud-fc6cf",
  storageBucket: "fir-crud-fc6cf.appspot.com",
  messagingSenderId: "437399009275",
  appId: "1:437399009275:web:5621597bbc20844ab2fd5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export  {app, db, auth};