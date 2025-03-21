import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBq3MnNGUaCyEenI3WqJzI03N_vh25QImg",
    authDomain: "fwmd-e8d9c.firebaseapp.com",
    projectId: "fwmd-e8d9c",
    storageBucket: "fwmd-e8d9c.firebasestorage.app",
    messagingSenderId: "206240862950",
    appId: "1:206240862950:web:ac91550ab6c8afa508a127",
    measurementId: "G-VJN9VWZ5TQ"
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login Function
function loginUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("User signed in:", userCredential.user);
        })
        .catch((error) => {
            console.error("Error:", error.message);
        });
}
