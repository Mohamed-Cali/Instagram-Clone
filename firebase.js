// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZMTDWQIr2Q889Vn12R5WSfNlfIili1RU",
  authDomain: "insta-2-66019.firebaseapp.com",
  databaseURL: "https://insta-2-66019-default-rtdb.firebaseio.com",
  projectId: "insta-2-66019",
  storageBucket: "insta-2-66019.appspot.com",
  messagingSenderId: "1018081609969",
  appId: "1:1018081609969:web:d5cb52ab487231e32f0150"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();;
const db = getFirestore();
const storage = getStorage();

export { app, db, storage}