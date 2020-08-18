import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase';


firebase.firestore().collection('test').add({
  title: 'Wake Up',
  time: 45

})

function App() {
  return (
    <div className="App">
      <h1>
        Time reminder
      </h1>
    </div>
  );
}

export default App;
