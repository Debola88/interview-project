import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Header from './Header'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

function Layout() {
    return (
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
            <div className="flex flex-col flex-1">
                <Header />
                <div className='flex flex-1 h-full'>
                        <SideBar />
                    <div className="flex-1 px-14 pt-14 min-h-0 overflow-auto">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout