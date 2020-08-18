import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase';
import Timelist from './components/time-list'


function App() {
  return (
    <div className="App">
      <h1>
        Your Time reminder
      </h1>
      <Timelist/>
    </div>
  );
}

export default App;
