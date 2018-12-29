import firebase from "firebase";
import firestore from "firebase/firestore";

var config = {
  apiKey: "AIzaSyCeOkAeF8u60XDqlxDFX8RgJbq9T4hQ28U",
  authDomain: "newagent-6d045.firebaseapp.com",
  databaseURL: "https://newagent-6d045.firebaseio.com",
  projectId: "newagent-6d045",
  storageBucket: "newagent-6d045.appspot.com",
  messagingSenderId: "681356626476"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();
