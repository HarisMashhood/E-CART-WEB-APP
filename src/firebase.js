import firebase from 'firebase/compat'


const firebaseConfig = {
  apiKey: "AIzaSyBYKXrr39-sWwisyFFdId85o3grw9BVXbY",
  authDomain: "e-cartapp.firebaseapp.com",
  projectId: "e-cartapp",
  storageBucket: "e-cartapp.appspot.com",
  messagingSenderId: "360367895524",
  appId: "1:360367895524:web:fe2b4d6a14112c57a30df1",
  measurementId: "G-E1GZ7E5Z82"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();// this is variable used in signing in and all.

export{db, auth};