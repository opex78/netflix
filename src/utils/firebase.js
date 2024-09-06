// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAnHQ5ALA-maDuALcAH5ZfzNE7DNF9lNHk",
    authDomain: "netflix-377cf.firebaseapp.com",
    projectId: "netflix-377cf",
    storageBucket: "netflix-377cf.appspot.com",
    messagingSenderId: "868721622330",
    appId: "1:868721622330:web:3dc712767e5c660cf3e403",
    measurementId: "G-STWJ8WCQ6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();