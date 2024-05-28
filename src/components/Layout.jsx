import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SideBar from './SideBar'
import Header from './Header'
import 'simplebar-react/dist/simplebar.min.css';
import NavBar from './NavBar';
import ClassNav from './ClassNav';
import SettingsNav from './SettingsNav';

function Layout() {

    const location = useLocation(); // Get the current route

    // Define paths where the header should be shown
    const showHeader = ['/', '/progresstracker', '/notification'];

    const showClassHeader = ['/myclasses', '/upcomingclasses', '/reschedule'];

    const showSettingsHeader = ['/accountsettings', '/security', '/profilesummary', '/security/twofactor'];



    return (
        <div className='flex flex-col bg-[#FFFFFF] max-md:bg-neutral-100 h-screen min-h-screen w-screen overflow-hidden'>
            <Header />
            <div className='flex flex-row h-full '>
                <SideBar />
                <div className="flex-1 md:min-h-full relative overflow-y-auto">
                    <div className='absolute w-full min-h-screen overflow-auto'>
                        {showHeader.includes(location.pathname) && (
                            <NavBar />
                        )}
                        {showClassHeader.includes(location.pathname) && (
                            <ClassNav />
                        )}
                         {showSettingsHeader.includes(location.pathname) && (
                            <SettingsNav />
                        )}
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout