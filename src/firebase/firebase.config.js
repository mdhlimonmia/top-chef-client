// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// console.log('limon', import.meta.env.VIT_APIKEY);

const firebaseConfig = {
  apiKey: "AIzaSyDQ6Q0gDm68ooVtkNdM4BRfQI8KMfXjtdc",
  authDomain: import.meta.env.VIT_AUTHDOMAIN,
  projectId: import.meta.env.VIT_PROJECTID,
  storageBucket: import.meta.env.VIT_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VIT_MESSAGINGSENDERID,
  appId: import.meta.VIT_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;