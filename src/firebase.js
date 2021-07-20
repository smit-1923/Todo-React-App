// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBBA2BfC3GbpcLnFQXEoI8Y73He_boc0Ug",
        authDomain: "todo-app-react-3fd50.firebaseapp.com",
        projectId: "todo-app-react-3fd50",
        storageBucket: "todo-app-react-3fd50.appspot.com",
        messagingSenderId: "342695293219",
        appId: "1:342695293219:web:c82257da35e1a014835c96",
        measurementId: "G-8J1W9DMXP1"
});

const db = firebaseApp.firestore();

export default db;
