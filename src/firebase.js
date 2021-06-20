import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY',
  authDomain: 'disneyplus-clone-a33d5.firebaseapp.com',
  projectId: 'disneyplus-clone-a33d5',
  storageBucket: 'disneyplus-clone-a33d5.appspot.com',
  messagingSenderId: '37918794208',
  appId: '1:37918794208:web:dbe9842dfe1dda522a4b85',
  measurementId: 'G-DRVLJKWRWG',
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDMoAKF2ZjJvmVaGF8SSJcfgGOmxdDJxvs",
//   authDomain: "disney-plus-clone-k09.firebaseapp.com",
//   projectId: "disney-plus-clone-k09",
//   storageBucket: "disney-plus-clone-k09.appspot.com",
//   messagingSenderId: "752252605424",
//   appId: "1:752252605424:web:61645f5bb387b5e6e04335",
//   measurementId: "G-1XS8LBDLRR"
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
