import React from 'react'

const timeEntryForm = () => {
    return (
        <div>
            <form>
              <h4>Add Time entry</h4>

              <div>
                <label>Title</label>
                <input type="text"></input>
              </div>

              <div>
                <label>Time</label>
                <input type="text"></input>
              </div>
              <button>Add Time Entry</button>
            </form>
            
        </div>
    )
}

export default timeEntryForm