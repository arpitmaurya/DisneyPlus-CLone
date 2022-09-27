import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC7csgcGyC6FeXav2rAUmBuvIv5F0tKBLQ",
    authDomain: "disneyplus-arpit.firebaseapp.com",
    projectId: "disneyplus-arpit",
    storageBucket: "disneyplus-arpit.appspot.com",
    messagingSenderId: "575731255996",
    appId: "1:575731255996:web:1734878d322a9158645eb9"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
