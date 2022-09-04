import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDA7W3T6tMJKWUDZO9_p_fSKbtYXqFv8ns",
  authDomain: "city-multispeciality-hos-aff8b.firebaseapp.com",
  projectId: "city-multispeciality-hos-aff8b",
  storageBucket: "city-multispeciality-hos-aff8b.appspot.com",
  messagingSenderId: "921619229975",
  appId: "1:921619229975:web:02aba560ae5e77d1cfdb52",
  measurementId: "G-D85KTWVLZC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
