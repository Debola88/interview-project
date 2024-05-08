import React, { useState } from 'react'
import avater from '../assets/Avatar.png'


function MyTutors() {

    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>

            <div className='max-md:hidden flex gap-3 border-b pb-4 pt-2.5 items-center w-full justify-between'>
                <input
                    className='text-blue-600 border-[#D6D8DB] focus:ring-0'
                    type="checkbox"
                    id="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <img src={avater} alt='' className='' />
                <p className='mr-20 font-semibold'>Guy Hawkins</p>
                <span className='max-w-max w-auto px-3 rounded-full font-semibold py-1.5 text-sm bg-[#D4F8D3]'>Active</span>
            </div>
            {/* Mobile version */}
            <div className='md:hidden flex gap-3 pb-4 pt-2.5 items-center w-full justify-between'>
                <input
                    className='text-blue-600 min-w-10 border-[#D6D8DB] focus:ring-0'
                    type="checkbox"
                    id="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <img src={avater} alt='' className='' />
                <p className='mr-auto font-semibold'>Guy Hawkins</p>
                <span className='max-w-max w-auto px-3 rounded-full font-semibold py-1.5 text-sm bg-[#D4F8D3]'>Active</span>
            </div>
        </div>
    )
}

export default MyTutors