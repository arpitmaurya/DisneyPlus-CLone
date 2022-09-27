import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBzILinA8aZ-tJWhVorxx5TzyhvD_JfH_Q",
    authDomain: "arpitmaurya-disneypluscl-2a1b1.firebaseapp.com",
    projectId: "arpitmaurya-disneypluscl-2a1b1",
    storageBucket: "arpitmaurya-disneypluscl-2a1b1.appspot.com",
    messagingSenderId: "1019636800714",
    appId: "1:1019636800714:web:f86a449084a74523ac6833",
    measurementId: "G-4BHPZ2L4TB"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
