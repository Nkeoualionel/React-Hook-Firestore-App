import React from 'react'
import {useEffect, useState} from 'react'
import firebase from '../firebase';

function useGetDataTime () {

    const [time, setTime] = useState([])

    useEffect(() => {
       firebase
       .firestore()
       .collection('reminders')
       .onSnapshot((snapshot) => {
           const newTime = snapshot.docs.map((doc) => ({
               id: doc.id,
               ...doc.data()
           }))

           setTime(newTime)
       }) 
       
    }, [])

    return time
}

const Timelist = () => {

    const times =  useGetDataTime()
       
    return (
    <div>  
        <div>
            <h2>Time Liste</h2>
            <div>
                <label>Sort By</label>{''}
            </div>
            <select>
                <option>Timer (fast) </option>
                <option>Timer (slow) </option>
                <option disabled>-------</option>
                <option>Order by (a-z) </option>
                <option>Order by (z-a) </option>
            </select>
        </div>
        <ol>
            {times.map((time) => 
            <li key={time.id}> 
                <div className="time-entry"> 
                {time.title}
                <code className="time">{time.secondes} secondes</code>
                </div>
            </li>
        )}
            

        </ol>
       </div> 
    )
}

export default Timelist