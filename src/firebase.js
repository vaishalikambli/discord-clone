import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAZufALfjg_2SlvMGFoUj6y0v40D4nKaYk",
  authDomain: "discord-clone-cd6b9.firebaseapp.com",
  databaseURL: "https://discord-clone-cd6b9.firebaseio.com",
  projectId: "discord-clone-cd6b9",
  storageBucket: "discord-clone-cd6b9.appspot.com",
  messagingSenderId: "414641273175",
  appId: "1:414641273175:web:173d7443b537a8d60ba612",
  measurementId: "G-805CRE7S0W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;