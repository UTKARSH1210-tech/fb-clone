// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDmsKjvAnDtw0xrE7QXQV_Okc-wnlZSme4",
    authDomain: "fb-clone-14216.firebaseapp.com",
    projectId: "fb-clone-14216",
    storageBucket: "fb-clone-14216.appspot.com",
    messagingSenderId: "1000088840450",
    appId: "1:1000088840450:web:1eac9c140522accc7d7a1b",
    measurementId: "G-MYMLDWFVSW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db