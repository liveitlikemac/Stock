import firebase from "firebase";


const firebaseApp=firebase.initializeApp(
    {
        apiKey: "AIzaSyDvO8Q3giep_oiKDmX0f6o3dd6M5E1S9l8",
        authDomain: "stock-tracker-293ef.firebaseapp.com",
        projectId: "stock-tracker-293ef",
        storageBucket: "stock-tracker-293ef.appspot.com",
        messagingSenderId: "643159548551",
        appId: "1:643159548551:web:ad7b37dd03bba1dcee4e22",
        measurementId: "G-MSF3WENGRH"
        }
);

const db=firebaseApp.firestore();
// const auth =firebase.auth();
// const storage =firebase.storage();
export {db};

