import React from 'react'
import Calendar from './Calender'

function Reschedule() {
    return (
        <div className='px-14 max-md:px-5 pt-12 max- max-md:pt-0 relative mx-auto pb-24 '>
            <h1 className='max-md:hidden font-bold text-3xl  max-md:text-2xl pb-8 w-full'>My Classes</h1>

            <div className='max-md:hidden border-b border-[#969696] absolute w-full left-0'></div>
            <div className='max-w-[85%] max-lg:max-w-full'>
                <div className='flex justify-between w-full md:pb-5 md:pt-8 items-center '>
                    <h2 className='font-bold text-2xl max-md:text-base max-md:pt-0'>Classes to reschedule</h2>
                </div>

                <div className="max-md:pt-5">
                    <Calendar />
                </div>
            </div>
        </div>
    )
}

export default Reschedule