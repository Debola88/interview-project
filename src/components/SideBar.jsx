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
import { Link } from 'react-router-dom'





function SideBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const [isDropdownoneOpen, setIsDropdownoneOpen] = useState(false);

    const toggleDropdownone = () => {
        setIsDropdownoneOpen(!isDropdownoneOpen);
    };


    const [isDropdowntwoOpen, setIsDropdowntwoOpen] = useState(false);

    const toggleDropdowntwo = () => {
        setIsDropdowntwoOpen(!isDropdowntwoOpen);
    };


    return (
        <div className='max-lg:hidden bg-gradient-to-b from-[#1B87E1E0]/[88%] to-[#0C2E4A] w-52 flex flex-col text-[#FFFFFF] text-sm'>
            <div className='pt-14 pb-4 px-6 h-screen overflow-y-auto flex flex-col'>
                <div className='mb-10 w-full'>
                    <button className='flex w-full outline-none items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/50 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10' onClick={toggleDropdown}><GoHome /> Dashboard
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
                        <ul>
                            <li>
                                <Link to="/"><span className='flex items-center justify-center gap-2 bg-[#1D8EED]/[78%] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>Overview</span></Link>
                            </li>
                            <li>
                                <span className='flex items-center justify-center gap-2 bg-[#1D8EED]/[78%] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>Progress Tracker</span>
                            </li>
                            <li>
                                <Link to="/notification"><span className='flex items-center justify-center gap-2 bg-[#1D8EED]/[78%] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>Notification</span></Link>
                            </li>
                        </ul>
                    </Transition>
                </div>

                <span className='flex items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'><img src={imgclass} alt='' />Class<FaAngleRight /></span>
                <span className='flex items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'><MdOutlineAssignment />Assignment<FaAngleRight /></span>
                <div className='w-full'>
                    <button className='flex w-full outline-none items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/50 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10' onClick={toggleDropdownone}><img src={imgtutor} alt='' />Tutors
                        <span>
                            <FaAngleRight />
                        </span>
                    </button>
                    <Transition
                        show={isDropdownoneOpen}
                        enter="transition-all duration-300 ease-in-out"
                        enterFrom="max-h-0 opacity-0"
                        enterTo="max-h-screen opacity-100"
                        leave="transition-all duration-300 ease-in-out"
                        leaveFrom="max-h-screen opacity-100"
                        leaveTo="max-h-0 opacity-0"
                    >
                        <ul>
                            <li>
                                <Link to="#"><span className='flex items-center justify-center gap-2 bg-[#1D8EED]/[78%] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>My Tutors</span></Link>
                            </li>
                            <li>
                                <Link to="/managetutor"><span className='flex items-center justify-center gap-2 bg-[#1D8EED]/[78%] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>Manage Tutors</span></Link>
                            </li>
                        </ul>
                    </Transition>
                </div>
                <span className='flex items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'><TbMessage />Messaging<FaAngleRight /></span>
                <div className='w-full'>
                    <button className='flex w-full outline-none items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/50 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10' onClick={toggleDropdowntwo}><TiCreditCard />Payment
                        <span>
                            <FaAngleRight />
                        </span>
                    </button>
                    <Transition
                        show={isDropdowntwoOpen}
                        enter="transition-all duration-300 ease-in-out"
                        enterFrom="max-h-0 opacity-0"
                        enterTo="max-h-screen opacity-100"
                        leave="transition-all duration-300 ease-in-out"
                        leaveFrom="max-h-screen opacity-100"
                        leaveTo="max-h-0 opacity-0"
                    >
                        <ul>
                            <li>
                                <Link to="/makepayment"><span className='flex items-center justify-center gap-2 bg-[#1D8EED]/[78%] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>Make Payment</span></Link>
                            </li>
                            <li>
                                <Link to="#"><span className='flex items-center justify-center gap-2 bg-[#1D8EED]/[78%] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>Payment History</span></Link>
                            </li>
                        </ul>
                    </Transition>
                </div>
                <span className='flex items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 mt-10 border border-[#FFFFFF]/10'><MdOutlineFeedback />Feedback</span>
                <span className='flex items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 mt-16 border border-[#FFFFFF]/10'><IoSettingsOutline />Settings<FaAngleRight /></span>
                <span className='flex items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'><MdLogout />Logout<FaAngleRight /></span>
                <img src={refer} alt='' className='w-full h-auto mt-5' />
                <Link to="/refer"><button className='py-3 mb-16 w-full bg-[#186BAD] hover:bg-[#186BAD]/50 transition-all  rounded'>Refer & Earn</button></Link>
            </div>
        </div>
    )
}

export default SideBar