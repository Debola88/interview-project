import React from 'react'

function MobileClass() {
    return (
        <div className='max-md:pt-5'>
            <div className='max-md:hidden border-b py-5 flex justify-between text-sm items-center'>
                <div className='w-[300px] flex flex-col gap-4'>
                    <p>English monthly test</p>
                    <div className='text-[#757575] flex text-xs gap-4'>
                        <span>Monday, 23 April</span>
                        <span>3:30 PM - 6:00 PM</span>
                    </div>
                </div>
                <span className='w-[80px] text-center'>90/100</span>
                <span className='w-[150px] text-center'>98/100</span>
                <span className='w-[80px] text-center'>90</span>
                <span className='w-[80px] text-center'>8</span>
                <div className='w-[80px] text-center'>
                    <span className='text-[#2FD74A] bg-[#2FD74A4D]/30 py-1 px-3 rounded-3xl'>Pass</span>
                </div>
            </div>
           
        </div>
    )
}

export default MobileClass