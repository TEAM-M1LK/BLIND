import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseInit = () =>
  initializeApp({
    apiKey: "AIzaSyBM8UwI5uTKRQqbk7-WBzwfb8ueugmMuUg",
    authDomain: "blind-5bd43.firebaseapp.com",
    databaseURL: "https://blind-5bd43-default-rtdb.firebaseio.com",
    projectId: "blind-5bd43",
    storageBucket: "blind-5bd43.appspot.com",
    messagingSenderId: "285943090464",
    appId: "1:285943090464:web:ffe40e3e362035226e5b45",
  });
