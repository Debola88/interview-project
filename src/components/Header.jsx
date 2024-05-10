import React from 'react'
import logo from '../assets/logo (1).png'
import { HiOutlineSearch } from 'react-icons/hi'
import { CiMail } from "react-icons/ci";
import { PiBellLight } from "react-icons/pi";
import quest from '../assets/question.png'
import { IoSettingsOutline } from "react-icons/io5";
import scan from '../assets/scan.png'
import profile from '../assets/image 5.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import MobileSidebar from './MobileSidebar';



function Header() {
    return (
        <div className="bg-[#FFFFFF] h-[4.5rem] px-6 flex items-center border-b shadow-xl justify-between float-left z-20">
            <div className='lg:hidden'>
                <MobileSidebar />
            </div>
            <div className='max-lg:hidden space-x-8 relative w-full text-black text-sm flex justify-between items-center'>
                <img src={logo} alt='' className='flex justify-start py-4 max-lg:hidden' />
                <div className="relative max-md:hidden">
                    <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-full"
                    />
                </div>
                <div className="flex items-center gap-5 pr-8">
                    <span><img src={scan} alt='' className='w-auto h-[15px] cursor-pointer' /></span>
                    <span className='cursor-pointer text-xl text-[#242F48] flex relative'><CiMail /><span className='absolute -right-1 w-[0.75rem] h-[0.75rem] block rounded-full border-2 border-[#FFB8B8] bg-[#EF0000]'></span></span>
                    <span className='cursor-pointer text-xl text-[#242F48] flex relative'><PiBellLight /><span className='absolute -right-1 w-[0.75rem] h-[0.75rem] block rounded-full border-2 border-[#A4E8AF] bg-[#35B94B]'></span></span>
                    <span className='cursor-pointer text-xl text-[#242F48]'><IoSettingsOutline /></span>
                    <span className='cursor-pointer'><img src={quest} alt='' className='w-auto h-[15px]' /></span>
                    <span className='flex gap-1 text-[#242F48] items-center text-2xl cursor-pointer'><div className='relative flex cursor-pointer'><img src={profile} alt='profile pic' className='rounded-full w-auto h-[35px] max-h-16 object-cover bg-no-repeat bg-center' /><span className='absolute bottom-0 -right-1 w-[0.75rem] h-[0.75rem] block rounded-full border-2 border-[#FFFFFF] bg-[#35B94B]'></span></div><MdKeyboardArrowDown /></span>
                </div>
            </div>
            <div className='space-x-8 lg:hidden relative flex text-black text-sm items-center'>
                <img src={logo} alt='' className='flex justify-start py-4 max-lg:hidden' />
                <div className="relative max-md:hidden">
                    <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-full"
                    />
                </div>
                <div className="flex float-end justify-end items-center gap-5">
                    <span className='cursor-pointer text-2xl text-[#242F48] flex relative'><PiBellLight /><span className='absolute -right-1 w-[0.75rem] h-[0.75rem] block rounded-full border-2 border-[#A4E8AF] bg-[#35B94B]'></span></span>
                    <span className='flex gap-1 text-[#242F48] items-center text-2xl cursor-pointer'><div className='relative flex cursor-pointer'><img src={profile} alt='profile pic' className='rounded-full w-auto h-[35px] max-h-16 object-cover bg-no-repeat bg-center' /><span className='absolute bottom-0 -right-1 w-[0.75rem] h-[0.75rem] block rounded-full border-2 border-[#FFFFFF] bg-[#35B94B]'></span></div><MdKeyboardArrowDown /></span>
                </div>
            </div>

        </div>
    )
}

export default Header