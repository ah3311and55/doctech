import * as firebase from 'firebase'

   // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBP13v3jCIJlAvdtRaW-00QQkxIJxRvGz4",
    authDomain: "ductic-11b99.firebaseapp.com",
    databaseURL: "https://ductic-11b99.firebaseio.com",
    projectId: "ductic-11b99",
    storageBucket: "ductic-11b99.appspot.com",
    messagingSenderId: "656126663769",
    appId: "1:656126663769:web:0cb0eb001de5bd30"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;


  // // Your web app's Firebase configuration
  // var firebaseConfig = {
  //   apiKey: "AIzaSyBP13v3jCIJlAvdtRaW-00QQkxIJxRvGz4",
  //   authDomain: "ductic-11b99.firebaseapp.com",
  //   databaseURL: "https://ductic-11b99.firebaseio.com",
  //   projectId: "ductic-11b99",
  //   storageBucket: "ductic-11b99.appspot.com",
  //   messagingSenderId: "656126663769",
  //   appId: "1:656126663769:web:0cb0eb001de5bd30"