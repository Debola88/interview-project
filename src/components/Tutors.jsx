import React, { useState } from 'react'
import avater from '../assets/Avatar (2).png'
import { LuSendHorizonal } from "react-icons/lu";

function Tutors() {

    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <div className='flex gap-3 border-b border-t pt-4 pb-4 items-center w-full justify-between'>
                <input
                    className='text-blue-600 border-[#D6D8DB] focus:ring-0'
                    type="checkbox"
                    id="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <img src={avater} alt='' className='' />
                <p className='mr-auto font-semibold'>Guy Hawkins</p>
                <span className='max-w-max mr-auto w-auto px-3 rounded-full font-semibold py-1.5 text-sm bg-[#D4F8D3]'>Active</span>
                <span className='text-2xl text-[#186BAD] cursor-pointer'><LuSendHorizonal /></span>
            </div>
        </div>
    )
}

export default Tutors