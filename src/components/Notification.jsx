import React from 'react'
import NavBar from './NavBar'
import NotificationBar from './NotificationBar';
import MobileNotification from './MobileNotification';



function Notification() {

    return (
        <>
            <NavBar />
            <div className='px-14 max-md:px-5 pt-12 max-md:pt-0 relative mx-auto pb-24'>
                <h1 className='max-md:hidden font-bold text-3xl  max-md:text-2xl pb-8 w-full'>Notifications</h1>

                <div className='max-md:hidden border-b border-[#969696] absolute w-full left-0'></div>

                <NotificationBar />
                <NotificationBar />
                <NotificationBar />
                <NotificationBar />
                <NotificationBar />
                <NotificationBar />

                <div className=''>
                    <div className='flex justify-between pb-5'>
                        <p className='font-bold text-sm text-[#242F48]'>Today</p>
                        <p className='text-sm font-semibold text-[#0162E8] cursor-pointer'>Set Day</p>
                    </div>
                    <MobileNotification />
                    <MobileNotification />
                    <MobileNotification />
                    <MobileNotification />
                    <MobileNotification />
                    <MobileNotification />
                </div>

            </div>
        </>

    )
}

export default Notification