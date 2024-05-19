import React from 'react'
import { FaStar } from "react-icons/fa6";


function UpcomingClassList() {
    return (
        <>
            <div className='py-2 max-md:hidden'>
                <ul className='flex text-start justify-between text-sm text-black mb-5'>
                    <li className='w-[150px] text-start'>Computer Science</li>
                    <li className='w-[150px] text-start'>Prof. Emily Johnson</li>
                    <li className='w-[150px] text-start'>Mon/Wed, 9:00 AM</li>
                    <li className='w-[150px] text-2xl text-start flex gap-2'>
                        <span className='text-[#F5C519]'><FaStar /></span>
                        <span className='text-[#F5C519]'><FaStar /></span>
                        <span className='text-[#F5C519]'><FaStar /></span>
                        <span className='text-[#F5C519]'><FaStar /></span>
                        <span className='text-[#C1C1C1]'><FaStar /></span>
                    </li>
                    <li className='w-[150px] text-start'><button className='bg-[#186BAD] py-2 px-3 text-white rounded hover:bg-[#186BAD]/80 transition-all duration-300 text-semibold float-right cursor-pointer'>Reschedule</button></li>
                </ul>
            </div>
            <div className='md:hidden w-full flex flex-col text-sm bg-[#FFFFFF] rounded items-center '>
                <div className='flex w-full items-center justify-between pt-5 px-5'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm font-semibold text-[#242F48]'>Subject : Computer Science</p>
                        <p className='text-sm text-[#242F48]'>Tutor : Professor Emily J</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-sm font-semibold text-[#242F48]'>Ratings</p>
                        <div className='flex gap-0.5 text-xs'>
                            <span className='text-[#F5C519]'><FaStar /></span>
                            <span className='text-[#F5C519]'><FaStar /></span>
                            <span className='text-[#F5C519]'><FaStar /></span>
                            <span className='text-[#F5C519]'><FaStar /></span>
                            <span className='text-[#C1C1C1]'><FaStar /></span>
                        </div>
                    </div>
                </div>
                <div className='text-left pb-5 pt-2.5 font-semibold px-5 w-full border-b text-[#242F48]'>
                    <p>Schedules : Mon/Wed 9:00 AM</p>
                </div>
                <div className='py-5 px-5 flex gap-2 w-full'>
                    <button className='w-full py-2 border-2 border-[#186BAD] hover:bg-[#186BAD] transition-all duration-300 hover:text-white rounded text-[#186BAD]'>Join Class</button>
                    <button className='w-full py-2 bg-[#186BAD] rounded text-white hover:bg-[#186BAD]/80 transition-all duration-300'>Reschedule</button>
                </div>

            </div>
        </>
    )
}

export default UpcomingClassList