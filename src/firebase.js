// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdfeRQFC8OIQXaUGvgUS6RTAzZU6HSO7c",
    authDomain: "go-go-biome-e8aec.firebaseapp.com",
    projectId: "go-go-biome-e8aec",
    storageBucket: "go-go-biome-e8aec.appspot.com",
    messagingSenderId: "236105190670",
    appId: "1:236105190670:web:fb8b19e390980f44849b5f",
    measurementId: "G-YT7KX94SGV",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const storage = getStorage(app)
const analytics = getAnalytics(app)
