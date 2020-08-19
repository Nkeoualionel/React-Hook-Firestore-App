import React from 'react'
import {useEffect, useState} from 'react'
import firebase from '../firebase';


const SORT_OPTION =  {
    'TIME_ASC': {column: 'secondes', direction: 'asc'},
    'TIME_DESC': {column: 'secondes', direction: 'desc'},

    'TITLE_ASC': {column: 'title', direction: 'asc'},
    'TITLE_DESC': {column: 'title', direction: 'desc'}
}

function useGetDataTime (orderBy = 'TIME_ASC') {

    const [time, setTime] = useState([])

    useEffect(() => {
      const unsuscribe = firebase
       .firestore()
       .collection('reminders')
       .orderBy(SORT_OPTION[orderBy].column, SORT_OPTION[orderBy].direction)
       .onSnapshot((snapshot) => {
           const newTime = snapshot.docs.map((doc) => ({
               id: doc.id,
               ...doc.data()
           }))

           setTime(newTime)
       }) 

       return () => unsuscribe()
       
    }, [orderBy])

    return time
}

const Timelist = () => {

    const [orderBy, setOrderBy] = useState('TIME_ASC')

    const times =  useGetDataTime(orderBy)
       
    return (
    <div>  
        <div>
            <h2>Time Liste</h2>
            <div>
                <label>Sort By</label>{''}
            </div>
            <select value={orderBy} onChange={e => setOrderBy(e.target.value)}>
                <option value="TIME_ASC">Timer (asc) </option>
                <option value="TIME_DESC">Timer (desc) </option>
                <option disabled>-------</option>
                <option value="TITLE_ASC">Order by (a-z) </option>
                <option value="TITLE_DESC">Order by (z-a) </option>
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