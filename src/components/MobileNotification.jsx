import React from 'react'
import { FaRegBellSlash } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";



function MobileNotification() {
    return (
        <div>
            <div className='md:hidden flex gap-3 md:pb-5 pt-4 pb-4 max-w-full items-start justify-between'>
                <span className='max-w-max w-auto py-3 px-3 bg-[#1D8EED2E]/[18%] rounded-full text-2xl text-[#0162E8]'><FaRegBellSlash /></span>
                <div className='flex flex-col gap-2'>
                    <p className=' text-sm font-bold text-[#242F48]'>Mrs Sandra</p>
                    <p className='text-sm text-[#242F48]'>A new assignment has been posted for
                        your science class. You are required to
                        research and submit a paper on...</p>
                </div>
                <div className='flex flex-col gap-12'>
                    <p className='text-sm font-semibold'>7:15</p>
                    <span className='text-[#D9734C] text-xl cursor-pointer'><RiDeleteBin6Line /></span>
                </div>
            </div>
            <span className='border-b border-[#33343C2B]/[17%] absolute w-full left-0'></span>
        </div>
    )
}

export default MobileNotification