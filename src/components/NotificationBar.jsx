import React, { useState } from 'react'
import woman from '../assets/Ellipse 197.png'
import { RiDeleteBin6Line } from "react-icons/ri";


function NotificationBar() {

    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };


    return (
        <div>
            <div className='max-md:hidden flex gap-3 md:pb-5 md:pt-8 pb-4 max-w-[75%] pt-2.5 items-center justify-between'>
                <input
                    className='text-blue-600 border-[#D6D8DB] focus:ring-0'
                    type="checkbox"
                    id="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <img src={woman} alt='' className='max-h-14 w-auto object-cover' />
                <div className='flex flex-col gap-2'>
                    <p className=' text-sm'>A new assignment has been posted for your science class. You are required to research and submit a paper on
                        "Climate Change and Its Effects" by the due date.</p>
                    <p className='text-sm'>45 mins ago</p>
                </div>
                <span className='text-[#D9734C] text-xl cursor-pointer'><RiDeleteBin6Line /></span>
            </div>
        </div>
    )
}

export default NotificationBar