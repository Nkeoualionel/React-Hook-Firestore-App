import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCkrl_pI4tfHoDoPhrw9_BawntwIw29VhA",
    authDomain: "todo-react-app-fab57.firebaseapp.com",
    databaseURL: "https://todo-react-app-fab57.firebaseio.com",
    projectId: "todo-react-app-fab57",
    storageBucket: "todo-react-app-fab57.appspot.com",
    messagingSenderId: "230572020022",
    appId: "1:230572020022:web:3fa443ecbfefd6b8eea397",
    measurementId: "G-8DMSSE1EY2"
  };
  
  firebase.initializeApp(firebaseConfig);