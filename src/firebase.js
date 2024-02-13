import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyCHpRTF4RI0tOOTBz3wUPbYaih85-tmdnI",
  authDomain: "hotstar-6f87a.firebaseapp.com",
  projectId: "hotstar-6f87a",
  storageBucket: "hotstar-6f87a.appspot.com",
  messagingSenderId: "752552119455",
  appId: "1:752552119455:web:74fbc0eb09e52441c266aa",
  measurementId: "G-XXQLWC91DR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};