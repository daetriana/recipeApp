import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCvaiyVYFGOnk0zmILKlOsZDRA8CUcGFgQ",
    authDomain: "recipe-13d27.firebaseapp.com",
    databaseURL: "https://recipe-13d27.firebaseio.com",
    projectId: "recipe-13d27",
    storageBucket: "recipe-13d27.appspot.com",
    messagingSenderId: "258637281751",
    appId: "1:258637281751:web:be3837d7668d20622f3392",
    measurementId: "G-LPVPYBJ2CT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();