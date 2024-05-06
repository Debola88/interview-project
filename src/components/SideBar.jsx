import React, { useState } from 'react'
import { GoHome } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa";
import refer from '../assets/Woman.png'
import { MdOutlineAssignment } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { TiCreditCard } from "react-icons/ti";
import { MdOutlineFeedback } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import imgclass from '../assets/class.png'
import imgtutor from '../assets/Tutor.png'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Transition } from '@headlessui/react';




function SideBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    return (
        <div className='bg-gradient-to-b from-[#1B87E1E0]/[88%] to-[#0C2E4A] w-52 flex flex-col text-[#FFFFFF] text-sm'>
            <div className='pt-14 pb-4 px-6 h-screen overflow-y-auto flex flex-col'>
                <span className='flex items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/50 transition-all cursor-pointer px-2 py-2 mb-10 border border-[#FFFFFF]/10'><GoHome />Dashboard<FaAngleRight /></span>
                <span className='flex items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'><img src={imgclass} alt='' />Class<FaAngleRight /></span>
                <span className='flex items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'><MdOutlineAssignment />Assignment<FaAngleRight /></span>
                <span className='flex items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'><img src={imgtutor} alt='' />Tutors<FaAngleRight /></span>
                <span className='flex items-center gap-2 bg-[#1F70B2] hover:bg-[#1f7cb2a6] transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'><TbMessage />Messaging<FaAngleRight /></span>
                <span className='flex items-center gap-2 bg-[#1F70B2] hover:bg-[#1f7cb2a6] transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'><TiCreditCard />Payment<FaAngleRight /></span>
                <span className='flex items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 mt-10 border border-[#FFFFFF]/10'><MdOutlineFeedback />Feedback</span>
                <span className='flex items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 mt-16 border border-[#FFFFFF]/10'><IoSettingsOutline />Settings<FaAngleRight /></span>
                <span className='flex items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'><MdLogout />Logout<FaAngleRight /></span>
                <button className='flex items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/50 transition-all cursor-pointer px-2 py-2 mb-10 border border-[#FFFFFF]/10' onClick={toggleDropdown}><GoHome /> Dropdown
                    <span>
                        <FaAngleRight />
                    </span>
                </button>
                <Transition
                    show={isDropdownOpen}
                    enter="transition-all duration-300 ease-in-out"
                    enterFrom="max-h-0 opacity-0"
                    enterTo="max-h-screen opacity-100"
                    leave="transition-all duration-300 ease-in-out"
                    leaveFrom="max-h-screen opacity-100"
                    leaveTo="max-h-0 opacity-0"
                >
                    <ul className="pl-6 pr-4 py-2 bg-gray-700 rounded-lg">
                        <li>
                            <p href="#" className="block px-4 py-2 hover:bg-gray-600">
                                Submenu 1
                            </p>
                        </li>
                        <li>
                            <p href="#" className="block px-4 py-2 hover:bg-gray-600">
                                Submenu 2
                            </p>
                        </li>
                        <li>
                            <p href="#" className="block px-4 py-2 hover:bg-gray-600">
                                Submenu 3
                            </p>
                        </li>
                    </ul>
                </Transition>
                <img src={refer} alt='' className='w-full h-auto mt-5' />
                <button className='py-3 mb-16 w-full bg-[#186BAD] hover:bg-[#186BAD]/50 transition-all  rounded'>Refer & Earn</button>
            </div>
        </div>
    )
}

export default SideBar