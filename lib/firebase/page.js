// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAnalytics, isSupported } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyDSt9Jid2vj3KhtUImj3xHiDRBUavtGgTg",
    authDomain: "launam-coffee.firebaseapp.com",
    projectId: "launam-coffee",
    storageBucket: "launam-coffee.appspot.com",
    messagingSenderId: "421977801809",
    appId: "1:421977801809:web:0a6c2b45e2bfb111696470"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export let firebaseAnalytics;
if (typeof window !== 'undefined') {
    firebaseAnalytics = getAnalytics(app)
} else {
    null;
}