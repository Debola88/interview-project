import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Header from './Header'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

function Layout() {
    return (
        <div className='flex flex-col bg-[#FFFFFF] max-md:bg-neutral-100 h-screen w-screen overflow-hidden'>
            <Header />
            <div className='flex flex-row h-full '>
                <SideBar />
                <div className="flex-1 min-h-full relative overflow-y-auto">
                    <div className='absolute w-full min-h-screen overflow-auto'>
                        <div className=' md:hidden pt-12 px-6 flex justify-between font-bold w-full'>
                            <span>Overview</span>
                            <span>Progress tracker</span>
                            <span>Notification</span>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout