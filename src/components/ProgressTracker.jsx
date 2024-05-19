import React from 'react'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import TestList from './TestList';


function ProgressTracker() {
    return (
        <div className='px-14 max-md:px-5 pt-12 max- max-md:pt-0 relative mx-auto pb-24 '>
            <h1 className='max-md:hidden font-bold text-3xl  max-md:text-2xl pb-8 w-full'>Progress Tracker</h1>

            <div className='max-md:hidden border-b border-[#969696] absolute w-full left-0'></div>
            <div className='max-w-[85%] max-lg:max-w-full'>
                <div className='w-full flex items-center justify-between md:pb-5 md:pt-8'>
                    <h2 className='font-bold text-2xl max-md:text-base'>Quiz and Test Scores</h2>
                    <div className='flex gap-4 items-center max-md:hidden'>
                        <span><MdKeyboardDoubleArrowLeft /></span>
                        <span className='py-1 px-3 hover:shadow-xl shadow-xl hover:bg-[#FFFFFF]/50 cursor-pointer rounded-xl'>1</span>
                        <span className='py-1 px-3 hover:shadow-xl hover:bg-[#FFFFFF]/50 cursor-pointer rounded-xl'>2</span>
                        <span className='py-1 px-3 hover:shadow-xl hover:bg-[#FFFFFF]/50 cursor-pointer rounded-xl'>3</span>
                        <span><MdKeyboardDoubleArrowRight /></span>
                    </div>
                </div>
                <div className='w-full border-2 max-md:hidden p-5 rounded-xl '>
                    <ul className='flex items-center justify-between text-sm font-semibold text-[#757575] mb-5'>
                        <li className='w-[300px]'>Test</li>
                        <li className='w-[80px] text-center'>Marks</li>
                        <li className='w-[150px] text-center'>Questions attempted</li>
                        <li className='w-[80px] text-center'>Correct</li>
                        <li className='w-[80px] text-center'>Wrong</li>
                        <li className='w-[80px] text-center'>Result</li>
                    </ul>
                    <div>
                        <TestList />
                        <TestList />
                        <TestList />
                        <TestList />
                        <TestList />
                        <TestList />
                        <TestList />
                    </div>
                </div>
                <div className='w-full md:hidden'>
                    <div>
                        <TestList />
                        <TestList />
                        <TestList />
                        <TestList />
                        <TestList />
                        <TestList />
                        <TestList />
                        <div className='grid grid-cols-5 place-items-center items-center text-center pt-10 w-full text-xl'>
                            <span><MdKeyboardDoubleArrowLeft /></span>
                            <span className='py-2 px-3 hover:shadow-xl shadow-xl hover:bg-[#FFFFFF]/50 cursor-pointer rounded-xl'>1</span>
                            <span className='py-2 px-3 hover:shadow-xl hover:bg-[#FFFFFF]/50 cursor-pointer rounded-xl'>2</span>
                            <span className='py-2 px-3 hover:shadow-xl hover:bg-[#FFFFFF]/50 cursor-pointer rounded-xl'>3</span>
                            <span><MdKeyboardDoubleArrowRight /></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProgressTracker