import React from 'react'
import { Link } from 'react-router-dom'


function Notification() {
    return (
        <div>
            <div>Notification <Link to="/" className='underline'>go to Overview</Link></div>
        </div>
    )
}

export default Notification