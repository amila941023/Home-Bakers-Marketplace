// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// You can import Firestore or Storage here too if needed

const firebaseConfig = {
  apiKey: "AIzaSyAJ-Rd36w-qZ-m_3csUo2q7nzvYUR_9jyA",
  authDomain: "homebakersapp-2eab7.firebaseapp.com",
  projectId: "homebakersapp-2eab7",
  storageBucket: "homebakersapp-2eab7.appspot.com",
  messagingSenderId: "624982345834",
  appId: "1:624982345834:web:bd10856faee3d505f0a213",
  measurementId: "G-7PCT2DK4RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // for login/signup

export { auth };
