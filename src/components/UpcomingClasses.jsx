import React from 'react'
import UpcomingClassList from './UpcomingClassList'

function UpcomingClasses() {
    return (
        <div className='px-14 max-md:px-5 pt-12 max- max-md:pt-0 relative mx-auto pb-24 '>
            <h1 className='max-md:hidden font-bold text-3xl  max-md:text-2xl pb-8 w-full'>My Classes</h1>

            <div className='max-md:hidden border-b border-[#969696] absolute w-full left-0'></div>
            <div className='max-w-[85%] max-lg:max-w-full'>
                <div className='flex justify-between w-full md:pb-5 md:pt-8 items-center '>
                    <h2 className='font-bold text-2xl max-md:text-base max-md:pt-0'>My Class Schedules</h2>
                </div>
                <div className='w-full border-2 max-md:hidden p-5 rounded-xl '>
                    <ul className='flex border-b-2 pb-9 pt-4 items-center justify-between text-sm font-bold text-[#757575] mb-5'>
                        <li className='w-[150px] text-start'>Subject</li>
                        <li className='w-[150px] text-start'>Tutors</li>
                        <li className='w-[150px] text-start'>Schedules</li>
                        <li className='w-[150px] text-start'>Ratings</li>
                        <li className='w-[150px] text-start'></li>
                    </ul>
                    <UpcomingClassList />
                    <UpcomingClassList />
                    <UpcomingClassList />
                    <UpcomingClassList />
                    <UpcomingClassList />
                    <UpcomingClassList />
                </div>
                <div className='w-full md:hidden space-y-5'>
                    <UpcomingClassList />
                    <UpcomingClassList />
                    <UpcomingClassList />
                    <UpcomingClassList />
                    <UpcomingClassList />
                    <UpcomingClassList />

                </div>
            </div>
        </div>
    )
}

export default UpcomingClasses