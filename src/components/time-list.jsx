import React from 'react'

const timelist = () => {
    return (
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
    )
}

export default timelist