import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuoHL2CL5Ez_p2YW2GebiMuZ3K6EC60Yk",
    authDomain: "hacknroll2022-64c00.firebaseapp.com",
    projectId: "hacknroll2022-64c00",
    storageBucket: "hacknroll2022-64c00.appspot.com",
    messagingSenderId: "839701983932",
    appId: "1:839701983932:web:5ae95e01137a3340c916b9"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;
