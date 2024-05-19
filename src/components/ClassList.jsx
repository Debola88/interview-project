import React from 'react'
import { FaStar } from "react-icons/fa6";



function ClassList() {
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
                </ul>
            </div>
            <div className='md:hidden w-full flex flex-col text-sm bg-[#FFFFFF] rounded items-center'>
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
                        </div>                    </div>
                </div>
                <div className='text-left pb-5 pt-2.5 font-semibold px-5 w-full text-[#242F48]'>
                    <p>Schedules : Mon/Wed 9:00 AM</p>
                </div>
            </div>
        </>
    )
}

export default ClassList