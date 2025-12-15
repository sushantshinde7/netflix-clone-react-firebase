// src/config.js
import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "netlif-clone.firebaseapp.com",
  projectId: "netlif-clone",
  storageBucket: "netlif-clone.appspot.com",
  messagingSenderId: "414035255763",
  appId: "1:414035255763:web:6bcd7c225a9102ed7d0f26",
};

const firebaseApp = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

const TMDB_Access_Key = import.meta.env.VITE_TMDB_ACCESS_KEY;

export { firebaseApp, TMDB_Access_Key };
