import React from 'react'
import ToggleButton from './ToggleButton'
import { FaPhone } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";



function TwoFactor() {
    return (
        <div className='px-14 max-md:px-5 pt-12 max-md:pt-0 relative mx-auto pb-24'>
            <h1 className='max-md:hidden font-bold text-3xl  max-md:text-2xl pb-8 w-full'>Settings</h1>

            <div className='max-md:hidden border-b border-[#969696] absolute w-full left-0'></div>
            <div className='flex justify-between w-full md:pb-5 md:pt-8 items-center max-md:hidden'>
                <h2 className='font-bold text-2xl max-md:text-base max-md:pt-0'>Two-Factor Authentication</h2>
            </div>
            <div className='lg:max-w-[65%] max-w-full'>

                <div className='flex max-md:flex-col justify-between md:gap-10 gap-5'>
                    <p>
                        Two-factor authentication, also known as 2FA or multi-factor,
                        adds an extra layer of security to your account beyond your
                        username and password. When you login with 2FA enabled, you will
                        be prompted to use a security key, enter a verification code or
                        approve the login from your mobile device, depending on which method you choose below.
                    </p>
                    <div className='w-full h-auto'><ToggleButton /></div>
                </div>
                <div className='mt-10 md:max-w-[50%]'>
                    <h2 className='text-[#242F48] font-semibold text-xl'>Text Message Authentication</h2>
                    <div className='mt-5 flex justify-between'>
                        <div className='pr-5 text-3xl text-[#186BAD]'>
                            <FaPhone />
                        </div>
                        <div className='flex flex-col gap-2 mr-auto'>
                            <span className='text-sm font-bold'>Phone Number</span>
                            <span className='text-gray-500 text-sm'>+xxxxxxxxxxxx</span>
                        </div>
                    </div>
                    <div className='mt-5 flex justify-between'>
                        <div className='pr-5 text-3xl text-[#186BAD]'>
                            <AiFillMessage />
                        </div>
                        <div className='flex flex-col gap-2 mr-auto'>
                            <span className='text-sm font-bold'>Text Message</span>
                            <span className='text-gray-500 text-sm'>xxxxxx</span>
                        </div>
                    </div>
                </div>
                <div>
                    <button type='button' className='rounded-lg mt-10 text-sm max-md:text-base px-4 py-3 bg-[#186BAD] text-white font-semibold max-md:w-full hover:bg-[#186BAD]/70 transition-all duration-300 max-w-max max-md:max-w-full'>Add Contact Number</button>
                </div>
            </div>
        </div>
    )
}

export default TwoFactor