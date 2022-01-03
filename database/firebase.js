import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyB5vM2eWe0yFtptDrfVCKoDOjAWjIhr0Kk",
  authDomain: "mobile-app-crud-3e1f0.firebaseapp.com",
  projectId: "mobile-app-crud-3e1f0",
  storageBucket: "mobile-app-crud-3e1f0.appspot.com",
  messagingSenderId: "440188018257",
  appId: "1:440188018257:web:495833a4f6b1f2c7496270",
});

const db = getFirestore();

export default {
  firebaseApp,
  db,
};
