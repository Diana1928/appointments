import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCnnO0oi45oRTjEkD_o4q7KACY0d7_ddmI',
  authDomain: 'appointfy-8d859.firebaseapp.com',
  projectId: 'appointfy-8d859',
  storageBucket: 'appointfy-8d859.appspot.com',
  messagingSenderId: '323722512124',
  appId: '1:323722512124:web:fc36511153993c4a1ef979'
};


const db = firebase.initializeApp(firebaseConfig);

export default db.firestore()