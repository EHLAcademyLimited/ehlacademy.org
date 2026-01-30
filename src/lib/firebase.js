import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCtxeHHInFzu5g1XDQtMfOnbuX9cMlKDAw",
    authDomain: "ehla-dse.firebaseapp.com",
    projectId: "ehla-dse",
    storageBucket: "ehla-dse.firebasestorage.app",
    messagingSenderId: "322086466450",
    appId: "1:322086466450:web:db76f0265d3dc602eec74b",
    measurementId: "G-WFPPLNE3X2"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
