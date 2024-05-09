import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import woman from '../assets/Ellipse 197.png'
import { RiDeleteBin6Line } from "react-icons/ri";
import NotificationBar from './NotificationBar';


function Notification() {

    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <NavBar />
            <div className='px-14 max-md:px-5 pt-12 max-md:pt-0 relative mx-auto pb-24'>
                <h1 className='max-md:hidden font-bold text-3xl  max-md:text-2xl pb-8 w-full'>Notifications</h1>

                <div className='max-md:hidden border-b border-[#969696] absolute w-full left-0'></div>

                <NotificationBar />
                <NotificationBar />
                <NotificationBar />
                <NotificationBar />
                <NotificationBar />
                <NotificationBar />
            </div>
        </>

    )
}

export default Notification