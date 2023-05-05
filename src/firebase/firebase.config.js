// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// console.log('limon', import.meta.env.VIT_APIKEY);

const firebaseConfig = {
  apiKey: "AIzaSyDQ6Q0gDm68ooVtkNdM4BRfQI8KMfXjtdc",
  authDomain: "top-chefs-6ff67.firebaseapp.com",
  projectId: "top-chefs-6ff67",
  storageBucket: "top-chefs-6ff67",
  messagingSenderId: "56853193800",
  appId: "1:56853193800:web:de32aa21e847d62738647d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;