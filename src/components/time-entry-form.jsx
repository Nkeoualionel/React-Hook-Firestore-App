import React from 'react'
import {useEffect, useState} from 'react'
import firebase from '../firebase';

const TimeEntryForm = () => {

  const [title, setTitle] = useState('')
  const [time, setTime] = useState('') 

  function onSubmitForm(e){
    e.preventDefault()

    firebase
    .firestore()
    .collection('reminders')
    .add({
      title,
      secondes: parseInt(time)
    })
    .then(() => {
        setTitle('')
        setTime('')
    })
  }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
              <h4>Add Time entry</h4>

              <div>
                <label>Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)}></input>
              </div>

              <div>
                <label>Time</label>
                <input type="number" value={time} onChange={e => setTime(e.target.value)}></input>
              </div>
              <button>Add Time Entry</button>
            </form>
            
        </div>
    )
}

export default TimeEntryForm