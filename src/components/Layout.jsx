import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Header from './Header'
import 'simplebar-react/dist/simplebar.min.css';

function Layout() {
    return (
        <div className='flex flex-col bg-[#FFFFFF] max-md:bg-neutral-100 h-screen w-screen overflow-hidden'>
            <Header />
            <div className='flex flex-row h-full '>
                <SideBar/>
                <div className="flex-1 min-h-full relative overflow-y-auto">
                    <div className='absolute w-full min-h-screen overflow-auto'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout