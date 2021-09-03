import firebase from 'firebase';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDyYU9nssJCst7vP7OrCFYZKMD20IqMf54',
  authDomain: 'pets-1e238.firebaseapp.com',
  projectId: 'pets-1e238',
  storageBucket: 'pets-1e238.appspot.com',
  messagingSenderId: '3950592325',
  appId: '1:3950592325:web:5635474fae7df312cd3e2c'
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getDataBase = () => firebase.firestore();