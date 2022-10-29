// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0e_PnJfWi4-9G0s9WcYbC2MxA6m2Nx0o",
  authDomain: "trivia-master-2dcaf.firebaseapp.com",
  projectId: "trivia-master-2dcaf",
  storageBucket: "trivia-master-2dcaf.appspot.com",
  messagingSenderId: "902827814137",
  appId: "1:902827814137:web:768380b5a9cdfff5b38628",
  measurementId: "G-FEW1NZD6WR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
});

export default database;