// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore-compat.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAScnDCFJFTQuU59u4-0-H_5UJe3epL2J8",
  authDomain: "jsi-78625.firebaseapp.com",
  databaseURL:
    "https://jsi-78625-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jsi-78625",
  storageBucket: "jsi-78625.appspot.com",
  messagingSenderId: "95637274623",
  appId: "1:95637274623:web:ca4d029b8ef8391cc5b1ca",
  measurementId: "G-XT8FVF1202",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export const database = getFirestore(firebaseApp);