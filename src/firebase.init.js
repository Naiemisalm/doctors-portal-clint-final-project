// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnh-YEuIU52KumE-JIUDCo0tq1YRRVCXc",
  authDomain: "doctors-protal-aebf8.firebaseapp.com",
  projectId: "doctors-protal-aebf8",
  storageBucket: "doctors-protal-aebf8.appspot.com",
  messagingSenderId: "1057718104570",
  appId: "1:1057718104570:web:b3beca20d9c06451f47443"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;