import * as firebase from 'firebase';
import firebaseui from 'firebaseui';
import { fetchGarbages } from '../actions/garbages';

const config = {
  apiKey: "AIzaSyANk_ebHFwUMUv2555mKg_nP_hPwvjMjrs",
  authDomain: "garbage-map.firebaseapp.com",
  databaseURL: "https://garbage-map.firebaseio.com",
  projectId: "garbage-map",
  storageBucket: "",
  messagingSenderId: "372139495537"
};

firebase.initializeApp(config);
const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

const garbages = fetchGarbages();
database.ref('garbages').push(garbages);