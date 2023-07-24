import { initializeApp } from "firebase/app";
import {getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCjF6DEMaIOI3xVahNk1d9TaDdZ6t-u1Dw",
    authDomain: "smsgame-8dd5d.firebaseapp.com",
    projectId: "smsgame-8dd5d",
    storageBucket: "smsgame-8dd5d.appspot.com",
    messagingSenderId: "143235815853",
    appId: "1:143235815853:web:42124f801524962618e924",
    measurementId: "G-YH6FK60MDN"
};

initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password)

export const login = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password)

export const logout = () => signOut(auth)

export const db = getFirestore();