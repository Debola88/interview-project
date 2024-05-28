// src/components/MobileSidebar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaAngleRight, FaBars } from 'react-icons/fa';
import refer from '../assets/Woman.png'
import { GoHome } from "react-icons/go";
import { MdOutlineAssignment } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { TiCreditCard } from "react-icons/ti";
import { MdOutlineFeedback } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import imgclass from '../assets/class.png'
import imgtutor from '../assets/Tutor.png'
import logo from '../assets/logo (1).png'
import { Transition } from '@headlessui/react';


const MobileSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const location = useLocation();

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

    const [isDropdownthreeOpen, setIsDropdownthreeOpen] = useState(false);

    const toggleDropdownthree = () => {
        setIsDropdownthreeOpen(!isDropdownthreeOpen);
    };

    const [isDropdownfourOpen, setIsDropdownfourOpen] = useState(false);

    const toggleDropdownfour = () => {
        setIsDropdownfourOpen(!isDropdownfourOpen);
    };


    const getPageName = (path) => {
        switch (path) {
            case '/':
                return 'Dashboard';
            case '/notification':
                return 'Dashboard';
            case '/refer':
                return 'Refer a Friend';
            case '/makepayment':
                return 'Make Payment';
            case '/managetutor':
                return 'Manage Tutors';
            case '/progresstracker':
                return 'Dashboard';
            case '/myclasses':
                return 'My Schedule';
            case '/upcomingclasses':
                return 'My Schedule';
            case '/reschedule':
                return 'My Schedule';
            case '/accountsettings':
                return 'Settings';
            case '/security':
                return 'Settings';
            case '/profilesummary':
                return 'Settings';
            case '/security/twofactor':
                return 'Settings';
            default:
                return 'Page Not Found';
        }
    };

    const currentPageName = getPageName(location.pathname);


    return (
        <div className="relative flex gap-3">
            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="text-gray-700 focus:outline-none"
            >
                <FaBars size={24} />
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 overflow-y-auto left-0 w-64 bg-gradient-to-b from-[#1B87E1] to-[#0C2E4A] text-white h-full z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className='px-6 pt-10'>
                    <img src={logo} alt='' className='flex justify-start py-2' />
                </div>
                <ul className="pt-10 px-6">
                    <li className="md:hidden">
                        <Link to="/" onClick={toggleSidebar}>
                            <button className='flex w-full outline-none items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'><GoHome /> Dashboard
                                <span className='ml-auto'>
                                    <FaAngleRight />
                                </span>
                            </button>
                        </Link>
                    </li>
                    {/* Mobile version */}
                    <li className="max-md:hidden">
                        <button className='flex w-full outline-none items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10' onClick={toggleDropdown}><GoHome /> Dashboard
                            <span className='ml-auto'>
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
                                    <Link to="/" onClick={toggleSidebar}><span className='flex items-center justify-center gap-2 bg-[#1D8EED]/[78%] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>Overview</span></Link>
                                </li>
                                <li>
                                    <Link to="/progresstracker" onClick={toggleSidebar}><span className='flex items-center justify-center gap-2 bg-[#1D8EED]/[78%] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>Progress Tracker</span></Link>
                                </li>
                                <li>
                                    <Link to="/notification" onClick={toggleSidebar}><span className='flex items-center justify-center gap-2 bg-[#1D8EED]/[78%] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>Notification</span></Link>
                                </li>
                            </ul>
                        </Transition>
                    </li>

                    <li className=" pt-10 md:hidden">
                        <Link to="/myclasses" onClick={toggleSidebar}>
                            <button className='flex w-full outline-none items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>
                                <img src={imgclass} alt='' />Class
                                <span className='ml-auto'>
                                    <FaAngleRight />
                                </span>
                            </button>
                        </Link>
                    </li>
                    {/* Mobile Version */}
                    <li className="pt-10 max-md:hidden">
                        <button className='flex w-full outline-none items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10' onClick={toggleDropdownthree}>
                            <img src={imgclass} alt='' />Class
                            <span className='ml-auto'>
                                <FaAngleRight />
                            </span>
                        </button>
                        <Transition
                            show={isDropdownthreeOpen}
                            enter="transition-all duration-300 ease-in-out"
                            enterFrom="max-h-0 opacity-0"
                            enterTo="max-h-screen opacity-100"
                            leave="transition-all duration-300 ease-in-out"
                            leaveFrom="max-h-screen opacity-100"
                            leaveTo="max-h-0 opacity-0"
                        >
                            <ul>
                                <li>
                                    <Link to="/myclasses" onClick={toggleSidebar}><span className='flex items-center justify-center gap-2 bg-[#1D8EED]/[78%] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>My Classes</span></Link>
                                </li>
                                <li>
                                    <Link to="/upcomingclasses" onClick={toggleSidebar}><span className='flex items-center justify-center gap-2 bg-[#1D8EED]/[78%] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>Upcoming Classes</span></Link>
                                </li>
                                <li>
                                    <Link to="/reschedule" onClick={toggleSidebar}><span className='flex items-center justify-center gap-2 bg-[#1D8EED]/[78%] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>Reschedule</span></Link>
                                </li>
                            </ul>
                        </Transition>
                    </li>

                    <li className="">
                        <Link to="#" onClick={toggleSidebar}>
                            <button className='flex w-full outline-none items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>
                                <MdOutlineAssignment />Assignment
                                <span className='ml-auto'>
                                    <FaAngleRight />
                                </span>
                            </button>
                        </Link>
                    </li>

                    {/* mobile version */}
                    <li className="">
                        <button className='flex w-full outline-none items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10' onClick={toggleDropdowntwo}>
                            <img src={imgtutor} alt='' />Tutors
                            <span className='ml-auto'>
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
                                    <Link to="#"><span className='flex items-center justify-center gap-2 bg-[#1D8EED]/[78%] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>My Tutors</span></Link>
                                </li>
                                <li>
                                    <Link to="/managetutor" onClick={toggleSidebar}><span className='flex items-center justify-center gap-2 bg-[#1D8EED]/[78%] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>Manage Tutors</span></Link>
                                </li>
                            </ul>
                        </Transition>
                    </li>

                    <li className="">
                        <Link to="#" onClick={toggleSidebar}>
                            <button className='flex w-full outline-none items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>
                                <TbMessage />Messaging
                                <span className='ml-auto'>
                                    <FaAngleRight />
                                </span>
                            </button>
                        </Link>
                    </li>

                    {/* Mobile version */}
                    <li className="">
                        <button className='flex w-full outline-none items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10' onClick={toggleDropdownone}>
                            <TiCreditCard />Payment
                            <span className='ml-auto'>
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
                                    <Link to="/makepayment" onClick={toggleSidebar}><span className='flex items-center justify-center gap-2 bg-[#1D8EED]/[78%] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>Make Payment</span></Link>
                                </li>
                                <li>
                                    <Link to="#"><span className='flex items-center justify-center gap-2 bg-[#1D8EED]/[78%] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>Payment History</span></Link>
                                </li>
                            </ul>
                        </Transition>
                    </li>

                    <li className="">
                        <Link to="#" onClick={toggleSidebar}>
                            <button className='flex w-full outline-none items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>
                                <MdOutlineFeedback />Feedback
                                <span className='ml-auto'>
                                    <FaAngleRight />
                                </span>
                            </button>
                        </Link>
                    </li>

                    <li className="pt-10 md:hidden">
                        <Link to="/accountsettings" onClick={toggleSidebar}>
                            <button className='flex w-full outline-none items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>
                                <IoSettingsOutline />Settings
                                <span className='ml-auto'>
                                    <FaAngleRight />
                                </span>
                            </button>
                        </Link>
                    </li>
                    {/* Mobile version */}
                    <li className="pt-10 max-md:hidden">
                        <button className='flex w-full outline-none items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10' onClick={toggleDropdownfour}>
                            <IoSettingsOutline />Settings
                            <span className='ml-auto'>
                                <FaAngleRight />
                            </span>
                        </button>
                        <Transition
                            show={isDropdownfourOpen}
                            enter="transition-all duration-300 ease-in-out"
                            enterFrom="max-h-0 opacity-0"
                            enterTo="max-h-screen opacity-100"
                            leave="transition-all duration-300 ease-in-out"
                            leaveFrom="max-h-screen opacity-100"
                            leaveTo="max-h-0 opacity-0"
                        >
                            <ul>
                                <li>
                                    <Link to="/accountsettings" onClick={toggleSidebar}><span className='flex items-center justify-center gap-2 bg-[#1D8EED]/[78%] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>Account Settings</span></Link>
                                </li>
                                <li>
                                    <Link to="/security" onClick={toggleSidebar}><span className='flex items-center justify-center gap-2 bg-[#1D8EED]/[78%] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>Login & Security</span></Link>
                                </li>
                                <li>
                                    <Link to="/profilesummary" onClick={toggleSidebar}><span className='flex items-center justify-center gap-2 bg-[#1D8EED]/[78%] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>Profile Summary</span></Link>
                                </li>
                            </ul>
                        </Transition>
                    </li>
                    <li className="">
                        <Link to="#" onClick={toggleSidebar}>
                            <button className='flex w-full outline-none items-center gap-2 bg-[#1F70B2] hover:bg-[#1F70B2]/10 transition-all cursor-pointer px-2 py-2 border border-[#FFFFFF]/10'>
                                <MdLogout />Logout
                                <span className='ml-auto'>
                                    <FaAngleRight />
                                </span>
                            </button>
                        </Link>
                    </li>

                    <li className="pt-10">
                        <img src={refer} alt='' className='w-full h-auto mt-5' />

                    </li>
                    <li className='pt-2'>
                        <Link to="/refer" onClick={toggleSidebar}>
                            <button className='py-3 mb-16 w-full bg-[#186BAD] hover:bg-[#186BAD]/50 transition-all  rounded'>Refer & Earn</button>
                        </Link>
                    </li>
                </ul>
            </div>
            <h2 className='font-semibold text-xl w-full float-start '>{currentPageName}</h2>

            {/* Overlay when sidebar is open */}
            {isOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
};

export default MobileSidebar;
