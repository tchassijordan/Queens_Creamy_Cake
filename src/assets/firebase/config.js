// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getFireStorage } from "firebase/firestorage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlibpSEajr2wuzUSHiNTuTv5ie8Xqy680",
  authDomain: "queens-creamy-cake.firebaseapp.com",
  projectId: "queens-creamy-cake",
  storageBucket: "queens-creamy-cake.appspot.com",
  messagingSenderId: "816817423025",
  appId: "1:816817423025:web:74329e9c002bb033495890",
  measurementId: "G-LEVM9BDS8F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const rt_db = getDatabase(app);
