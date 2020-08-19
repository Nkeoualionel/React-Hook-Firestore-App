import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase';
import Timelist from './components/time-list'
import TimeEntryForm from './components/time-entry-form'


function App() {
  return (
    <div className="App">
      <h1>
        Your Time reminder
      </h1>
      <Timelist/>
      <TimeEntryForm/>
    </div>
  );
}

export default App;
