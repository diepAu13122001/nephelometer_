// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNr2-ENEQ_FIzMCGsHHcTvF6cslN59xKo",
  authDomain: "jsi09-project.firebaseapp.com",
  databaseURL: "https://jsi09-project-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jsi09-project",
  storageBucket: "jsi09-project.appspot.com",
  messagingSenderId: "306335486306",
  appId: "1:306335486306:web:167e184dbaf5b9322d9c3b",
  measurementId: "G-8YLY8NCX67"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export const database = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);