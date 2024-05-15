import React from 'react'

function TestList() {
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
            <div className='md:hidden w-full flex flex-col text-sm bg-[#FFFFFF] rounded items-center'>
                <div className='flex w-full items-center justify-between py-5 border-b-2 px-5'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-sm font-semibold text-[#242F48]'>Maths Test</p>
                        <p className='text-xs text-[#242F48]'>Monday, 23 April 3:30PM - 4:30PM</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-xs text-[#242F48]'>Results</p>
                        <p className='text-[#35B94B] text-sm'>Passed</p>
                    </div>
                </div>
                <div className='flex items-center justify-between py-5 px-5 w-full text-[#242F48]'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <span className='text-xs'>Marks</span>
                        <span className='text-sm font-semibold'>90/100</span>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <span className='text-xs'>Questions Attempted</span>
                        <span className='text-sm font-semibold'>98/100</span>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <span className='text-xs'>Correct</span>
                        <span className='text-sm font-semibold'>90</span>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <span className='text-xs'>Wrong</span>
                        <span className='text-sm font-semibold'>10</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestList