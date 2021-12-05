import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDtXyuLGik9zfBgTQlNZcZTO9iogWnv8bM',
  authDomain: 'disnay-clone-672a6.firebaseapp.com',
  projectId: 'disnay-clone-672a6',
  storageBucket: 'disnay-clone-672a6.appspot.com',
  messagingSenderId: '1061964159017',
  appId: '1:1061964159017:web:a4e076baa62aed8289a438',
  measurementId: 'G-LCXHTC9X45',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
