import firebase from 'firebase/compat';

const firebaseConfig = ({
    apiKey: "AIzaSyCT8gGPeW56sUbp4CRsyBkZsFxyqpwWqHQ",
    authDomain: "react-native-todo-spring2022.firebaseapp.com",
    databaseURL: "https://react-native-todo-spring2022-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "react-native-todo-spring2022",
    storageBucket: "react-native-todo-spring2022.appspot.com",
    messagingSenderId: "222664651128",
    appId: "1:222664651128:web:e65ef1a280486236aa188d"
   });

const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
export const ROOT_REF = '/todos/';