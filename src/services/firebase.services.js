// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.APY_KEY}`,
  authDomain: 'aperture-2-9dc55.firebaseapp.com',
  projectId: 'aperture-2-9dc55',
  storageBucket: 'aperture-2-9dc55.appspot.com',
  messagingSenderId: '901988310451',
  appId: '1:901988310451:web:e318e678acc716b64bffc6',
};

// Initialize Firebase
initializeApp(firebaseConfig);
