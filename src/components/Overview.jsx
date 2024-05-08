import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import man from '../assets/Ellipse 260.png'
import clock from '../assets/pepicons-pencil_countdown.png'
import woman from '../assets/Ellipse 260 (1).png'
import man2 from '../assets/Ellipse 260 (2).png'
import { HiClipboardList, HiOutlineSearch } from "react-icons/hi";
import MyTutors from './MyTutors'
import ProgressExample from './ProgressExample'
import RangeSlider from './RangeSlider'



function Overview() {


    return (
        <div className=' px-14 max-md:px-5 pt-12 max-md:pt-0 relative mx-auto pb-24'>
            <h1 className='max-md:hidden font-bold text-3xl  max-md:text-2xl pb-8 w-full'>Overview</h1>


            <div className='max-md:hidden border-b border-[#969696] absolute w-full left-0'></div>

            <div className='flex justify-between mx-auto overflow-hidden gap-10 max-md:flex-col'>
                <div className='max-md:hidden max-w-full space-y-4 max-md:border-2 max-md:rounded-lg max-md:bg-[#FFFFFF] max-md:p-5'>
                    <div className='flex justify-between w-full md:pb-5 md:pt-8 items-center '>
                        <h2 className='font-bold text-2xl max-md:text-base max-md:pt-0'>Upcoming Classes</h2>
                        <p className='text-sm font-semibold md:hidden text-[#1D8EED] cursor-pointer'>See All</p>
                    </div>
                    <div className='flex md:border-b pb-4 space-x-5 max-md:space-x-2 items-end justify-start'>
                        <div className='max-w-max'><img src={man} alt='' className='rounded-full w-auto max-h-12' /></div>
                        <div className='flex flex-col'>
                            <span className='font-bold text-sm'>Mathematics</span>
                            <span className='font-bold text-sm'>Monday, April 10th</span>
                        </div>
                        <span className='text-sm'>3:00PM - 4:30PM</span>
                        <span className='flex text-sm items-center max-w-max w-full px-2 py-2 rounded-2xl bg-[#E9E7E7]'><p className='mr-1'>10</p><p className='mr-1'>days</p><img src={clock} alt='h-10 w-auto' /></span>
                    </div>
                    <div className='flex md:border-b pb-4 space-x-5 max-md:space-x-2 items-end justify-start'>
                        <div className='max-w-max'><img src={woman} alt='' className='rounded-full w-auto max-h-12' /></div>
                        <div className='flex flex-col'>
                            <span className='font-bold text-sm'>Mathematics</span>
                            <span className='font-bold text-sm'>Monday, April 10th</span>
                        </div>
                        <span className='text-sm'>6:00PM - 7:30PM</span>
                        <span className='flex text-sm items-center max-w-max w-full px-2 py-2 rounded-2xl bg-[#E9E7E7]'><p className='mr-1'>12</p><p className='mr-1'>days</p><img src={clock} alt='h-10 w-auto' /></span>
                    </div>
                    <div className='flex space-x-5 max-md:space-x-2 items-end justify-start'>
                        <div className='max-w-max'><img src={man2} alt='' className='rounded-full w-auto max-h-12' /></div>
                        <div className='flex flex-col'>
                            <span className='font-bold text-sm'>Mathematics</span>
                            <span className='font-bold text-sm'>Monday, April 10th</span>
                        </div>
                        <span className='text-sm'>3:00PM - 4:30PM</span>
                        <span className='flex text-sm items-center max-w-max w-full px-2 py-2 rounded-2xl bg-[#E9E7E7]'><p className='mr-1'>20</p><p className='mr-1'>days</p><img src={clock} alt='h-10 w-auto' /></span>
                    </div>
                </div>
                {/* mobile version */}
                <div className='md:hidden max-w-full space-y-4 border-2 max-md:rounded-lg max-md:bg-[#FFFFFF] p-5'>
                    <div className='flex justify-between w-full md:pb-5 md:pt-8 items-center '>
                        <h2 className='font-bold text-lg max-md:pt-0'>Upcoming Classes</h2>
                        <p className='text-sm font-semibold md:hidden text-[#1D8EED] cursor-pointer'>See All</p>
                    </div>
                    <div className='flex md:border-b pb-4 items-center justify-between'>
                        <div className='max-w-max'><img src={man} alt='' className='rounded-full w-auto max-h-12 mr-3' /></div>
                        <div className='flex flex-col mr-auto gap-2'>
                            <span className='font-bold text-sm'>Mathematics</span>
                            <span className='font-bold text-xs'>Monday, 12 April</span>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-sm font-semibold'>3:00PM - 4:30PM</span>
                            <span className='flex text-xs'><p className='mr-1'>10</p><p className='mr-1'>days</p><img src={clock} alt='' className='max-h-10 object-contain' /></span>
                        </div>
                    </div>
                    <div className='flex md:border-b pb-4 items-center justify-between'>
                        <div className='max-w-max'><img src={woman} alt='' className='rounded-full w-auto max-h-12 mr-3' /></div>
                        <div className='flex flex-col mr-auto gap-2'>
                            <span className='font-bold text-sm'>Mathematics</span>
                            <span className='font-bold text-xs'>Monday, 12 April</span>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-sm font-semibold'>3:00PM - 4:30PM</span>
                            <span className='flex text-xs'><p className='mr-1'>10</p><p className='mr-1'>days</p><img src={clock} alt='' className='max-h-10 object-contain' /></span>
                        </div>
                    </div>
                    <div className='flex md:border-b pb-4 items-center justify-between'>
                        <div className='max-w-max'><img src={man2} alt='' className='rounded-full w-auto max-h-12 mr-3' /></div>
                        <div className='flex flex-col mr-auto gap-2'>
                            <span className='font-bold text-sm'>Mathematics</span>
                            <span className='font-bold text-xs'>Monday, 12 April</span>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-sm font-semibold'>3:00PM - 4:30PM</span>
                            <span className='flex text-xs'><p className='mr-1'>10</p><p className='mr-1'>days</p><img src={clock} alt='' className='max-h-10 object-contain' /></span>
                        </div>
                    </div>
                </div>

                <div className='max-md:hidden max-w-[400px] space-y-4'>
                    <div className='pb-5 pt-8 flex justify-between items-center'>
                        <h2 className='font-bold text-2xl '>Assignments</h2>
                        <p className='text-sm font-semibold text-[#1D8EED] cursor-pointer'>See All</p>
                    </div>
                    <div className='flex border-b-2 md:max-w-max pb-[1.35rem] space-x-8 items-center'>
                        <div className='text-2xl text-[#0052B4]'><HiClipboardList /></div>
                        <div className='flex flex-col'>
                            <span className='font-semibold text-sm'>Science | Biological Benefits</span>
                            <span className='text-sm text-[#9E9E9E]'>04 May, 09:20AM</span>
                        </div>
                    </div>
                    <div className='flex border-b-2 md:max-w-max pb-[1.35rem] space-x-8 items-center justify-start'>
                        <div className='text-2xl text-[#0052B4]'><HiClipboardList /></div>
                        <div className='flex flex-col'>
                            <span className='font-semibold text-sm'>Science | Biological Benefits</span>
                            <span className='text-sm text-[#9E9E9E]'>04 May, 09:20AM</span>
                        </div>
                    </div>
                    <div className='flex space-x-8 items-center justify-start'>
                        <div className='text-2xl text-[#0052B4]'><HiClipboardList /></div>
                        <div className='flex flex-col'>
                            <span className='font-semibold text-sm'>Science | Biological Benefits</span>
                            <span className='text-sm text-[#9E9E9E]'>04 May, 09:20AM</span>
                        </div>
                    </div>
                </div>
                {/* Mobile version */}
                <div className='md:hidden max-w-full space-y-4 border-2 max-md:rounded-lg max-md:bg-[#FFFFFF] p-5'>
                    <div className='pb-5 pt-8 flex justify-between items-center'>
                        <h2 className='font-bold text-xl '>Assignments</h2>
                        <p className='text-sm font-semibold text-[#1D8EED] cursor-pointer'>See All</p>
                    </div>
                    <div className='flex md:max-w-max pb-[1.35rem] space-x-8 items-center'>
                        <div className='text-2xl text-[#0052B4]'><HiClipboardList /></div>
                        <div className='flex flex-col'>
                            <span className='font-semibold text-sm'>Science | Biological Benefits</span>
                            <span className='text-sm text-[#9E9E9E]'>04 May, 09:20AM</span>
                        </div>
                    </div>
                    <div className='flex md:max-w-max pb-[1.35rem] space-x-8 items-center justify-start'>
                        <div className='text-2xl text-[#0052B4]'><HiClipboardList /></div>
                        <div className='flex flex-col'>
                            <span className='font-semibold text-sm'>Science | Biological Benefits</span>
                            <span className='text-sm text-[#9E9E9E]'>04 May, 09:20AM</span>
                        </div>
                    </div>
                    <div className='flex space-x-8 items-center justify-start'>
                        <div className='text-2xl text-[#0052B4]'><HiClipboardList /></div>
                        <div className='flex flex-col'>
                            <span className='font-semibold text-sm'>Science | Biological Benefits</span>
                            <span className='text-sm text-[#9E9E9E]'>04 May, 09:20AM</span>
                        </div>
                    </div>
                </div>
            </div >



            <div className='max-md:hidden border-b border-[#969696] absolute w-full left-0 pt-10'></div>

            <div className='flex justify-between gap-2 max-md:flex-col pt-10'>
                <div className='max-md:hidden'>
                    <div className='pb-5 pt-8 flex justify-between border-b-2 items-center'>
                        <h2 className='font-bold text-2xl '>My Tutors</h2>
                        <p className='text-sm text-[#09BCFF] cursor-pointer'>See all</p>
                    </div>
                    <MyTutors />
                    <MyTutors />
                    <MyTutors />
                    <MyTutors />
                    <MyTutors />
                </div>
                {/* Mobile version */}
                <div className='md:hidden border-2 max-md:rounded-lg max-md:bg-[#FFFFFF] p-5'>
                    <div className='pb-5 pt-8 flex justify-between items-center'>
                        <h2 className='font-bold text-xl '>My Tutors</h2>
                        <p className='text-sm font-semibold text-[#09BCFF] cursor-pointer'>See All</p>
                    </div>
                    <MyTutors />
                    <MyTutors />
                    <MyTutors />
                    <MyTutors />
                    <MyTutors />
                </div>

                <div className='max-md:hidden max-w-[400px] space-y-4'>
                    <div className='pt-8 border-b-2 pb-5 flex justify-between items-center'>
                        <h2 className='font-bold text-xl '>Messages</h2>
                        <p className='text-sm semibold text-[#1D8EED] cursor-pointer'>See All</p>
                    </div>
                    <div className='flex border-b w-full pb-2.5 space-x-[1.02rem] items-start'>
                        <div className='text-xl text-[rgb(0,82,180)] font-semibold w-11 py-2 px-2 rounded-xl bg-[#F0F7FF] uppercase'>aa</div>
                        <div className='flex flex-col w-2/3'>
                            <span className='font-semibold text-sm text-[#333333]'>Adepoju Ademola</span>
                            <span className='text-xs text-[#9E9E9E]'>Hello, Mr John  i am yet to get your class b res...</span>
                        </div>
                        <p className='text-[#8A8A8A] text-xs'>10:25 am</p>
                    </div>
                    <div className='flex justify-between border-b w-full pb-2.5 items-start'>
                        <div className='text-xl text-[#0052B4] font-semibold w-11 py-2 px-2 rounded-xl bg-[#F0F7FF] uppercase'>bp</div>
                        <div className='flex flex-col w-2/3'>
                            <span className='font-semibold text-sm text-[#333333]'>Badiru Pomile</span>
                            <span className='text-xs text-[#9E9E9E]'>Please schedule your class test.</span>
                        </div>
                        <p className='text-[#8A8A8A] text-xs'>10:25 am</p>
                    </div>
                    <div className='flex justify-between border-b w-full pb-2.5  items-start'>
                        <div className='text-xl text-[#0052B4] font-semibold w-11 py-2 px-2 rounded-xl bg-[#F0F7FF] uppercase'>t</div>
                        <div className='flex flex-col w-2/3'>
                            <span className='font-semibold text-sm text-[#333333]'>Emmanuel John</span>
                            <span className='text-xs text-[#9E9E9E]'>Please resend last session statistic</span>
                        </div>
                        <p className='text-[#8A8A8A] text-xs'>10:25 am</p>
                    </div>
                </div>
                {/* Mobile version */}
                <div className='md:hidden max-w-full space-y-4 pt-10'>
                    <div className="relative">
                        <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Search for messages"
                            className="text-base focus:outline-none active:outline-none border-none bg-white border-gray-300 w-full h-10 pl-11 pr-4 rounded"
                        />
                    </div>
                    <div className='pt-2 pb-5 flex justify-between items-center'>
                        <h2 className='font-bold text-xl '>Messages</h2>
                        <p className='text-sm text-[#1D8EED] cursor-pointer'>See all</p>
                    </div>
                    <div className='flex justify-between w-full pb-2.5 items-start'>
                        <div className='max-w-max'><img src={man} alt='' className='rounded-full w-auto max-h-12 mr-3' /></div>
                        <div className='flex flex-col w-2/3'>
                            <span className='font-semibold text-sm text-[#333333]'>Adepoju Ademola</span>
                            <span className='text-xs text-[#9E9E9E]'>Hi there! I wanted to enquire about
                                the list of the class...</span>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <p className='text-[#8A8A8A] text-xs'>10:25</p>
                            <span className='max-h-10 w-auto text-white px-2 py-1 rounded text-xs bg-[#0162E8]'>2</span>
                        </div>
                    </div>
                    <div className='flex justify-between w-full pb-2.5 items-start'>
                        <div className='max-w-max'><img src={woman} alt='' className='rounded-full w-auto max-h-12 mr-3' /></div>
                        <div className='flex flex-col w-2/3'>
                            <span className='font-semibold text-sm text-[#333333]'>Badiru Pomile</span>
                            <span className='text-xs text-[#9E9E9E]'>Hi there! I wanted to enquire about
                                the list of the class...</span>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <p className='text-[#8A8A8A] text-xs'>10:25</p>
                            <span className='max-h-10 w-auto text-white px-2 py-1 rounded text-xs bg-[#0162E8]'>2</span>
                        </div>                    </div>
                    <div className='flex justify-between w-full pb-2.5  items-start'>
                        <div className='max-w-max'><img src={man2} alt='' className='rounded-full w-auto max-h-12 mr-3' /></div>
                        <div className='flex flex-col w-2/3'>
                            <span className='font-semibold text-sm text-[#333333]'>Emmanuel John</span>
                            <span className='text-xs text-[#9E9E9E]'>Hi there! I wanted to enquire about
                                the list of the class...</span>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <p className='text-[#8A8A8A] text-xs'>10:25</p>
                            <span className='max-h-10 w-auto text-white px-2 py-1 rounded text-xs bg-[#0162E8]'>2</span>
                        </div>
                    </div>
                </div>
                <div className='max-md:hidden max-w-[400px] space-y-4'>
                    <div className='pb-5 pt-8 '>
                        <h2 className='font-bold text-2xl '>Monthly Class Attendance</h2>
                    </div>
                    <RangeSlider />
                    <RangeSlider />
                    <RangeSlider />
                    <RangeSlider />
                </div>
                {/* mobile version */}
                <div className='md:hidden max-w-[400px] space-y-4'>
                    <div className='pb-5 pt-8 border-b-[5px]  '>
                        <h2 className='font-bold text-xl'>Monthly Class Attendance</h2>
                    </div>
                    <RangeSlider />
                    <RangeSlider />
                    <RangeSlider />
                    <RangeSlider />
                </div>
            </div>
        </div >
    )
}

export default Overview