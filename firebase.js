import firebase from "firebase";

const firebaseConfig = {
  apiKey: 'AIzaSyDZs3NaXtWoXV_cLmcm64jYaFqMvT9ElGI',
  authDomain: 'disneyclone-a52d3.firebaseapp.com',
  projectId: 'disneyclone-a52d3',
  storageBucket: 'disneyclone-a52d3.appspot.com',
  messagingSenderId: '281357112067',
  appId: '1:281357112067:web:ae0445f9ff4e631a848f36',
  measurementId: 'G-7GENGE86YF',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
