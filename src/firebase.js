import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyANg2LDuQfV1Gfd6J40U5mnjX-ZIFGXoyM",
  authDomain: "linkedin-clone-yt-42619.firebaseapp.com",
  projectId: "linkedin-clone-yt-42619",
  storageBucket: "linkedin-clone-yt-42619.appspot.com",
  messagingSenderId: "678861203610",
  appId: "1:678861203610:web:5518620de4e7edba4d5723",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
