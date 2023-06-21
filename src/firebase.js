// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7OS6lpSaA97GyPSB5bLWnx5YM4kUBgO8",
  authDomain: "todo-app-yt-1.firebaseapp.com",
  projectId: "todo-app-yt-1",
  storageBucket: "todo-app-yt-1.appspot.com",
  messagingSenderId: "443740228897",
  appId: "1:443740228897:web:3f988ec4703ee3b07cc260"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)