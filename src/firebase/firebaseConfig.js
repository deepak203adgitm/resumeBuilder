import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyC-ShupTjUqrKm0qQLJXpJG-J55exuMkhA",
  authDomain: "resume-builder-456b8.firebaseapp.com",
  projectId: "resume-builder-456b8",
  storageBucket: "resume-builder-456b8.appspot.com",
  messagingSenderId: "332403533008",
  appId: "1:332403533008:web:e17da273c8f7d0dc1aaad5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;