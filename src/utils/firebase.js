// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyt9VCb8P15R70ZnBCJ_u0biRD-iX8O1c",
  authDomain: "netflix-gpt-fef35.firebaseapp.com",
  projectId: "netflix-gpt-fef35",
  storageBucket: "netflix-gpt-fef35.appspot.com",
  messagingSenderId: "84721416053",
  appId: "1:84721416053:web:efc8fca147dc3d64b0853c",
  measurementId: "G-DN5ME98H8Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
