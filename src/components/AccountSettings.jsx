import React from 'react'

function AccountSettings() {
    return (
        <div className='px-14 max-md:px-5 pt-12 max-md:pt-0 relative mx-auto pb-24'>
            <h1 className='max-md:hidden font-bold text-3xl  max-md:text-2xl pb-8 w-full'>Settings</h1>

            <div className='max-md:hidden border-b border-[#969696] absolute w-full left-0'></div>
            <div className='flex justify-between w-full md:pb-5 md:pt-8 items-center max-md:hidden'>
                <h2 className='font-bold text-2xl max-md:text-base max-md:pt-0'>Account Settings</h2>
            </div>
            <div className='lg:max-w-[65%] max-w-full'>
                <form className=''>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pb-5'>
                        <div>
                            <label>First name</label>
                            <input type='text' name='firstname' placeholder='Please enter your first name ' className='outline-none md:text-sm w-full h-10 rounded py-2 px-2 border' required/>
                        </div>
                        <div>
                            <label>Last name</label>
                            <input type='text' name='lastname' placeholder='Please enter your last name' className='outline-none md:text-sm w-full h-10 rounded py-2 px-2 border' required/>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pb-5'>
                        <div>
                            <label>Email Address</label>
                            <input type='email' name='email' placeholder='Please enter your email address' className='outline-none md:text-sm w-full h-10 rounded py-2 px-2 border' required/>
                        </div>
                        <div>
                            <label>Phone number</label>
                            <input type='tel' name='number' placeholder='Please enter your phone number' className='outline-none md:text-sm w-full h-10 rounded py-2 px-2 border' required/>
                        </div>
                    </div>
                    <div className='pb-5'>
                        <label>Bio</label>
                        <textarea className='w-full h-24 rounded px-2 py-2 border outline-none md:text-sm' placeholder='Write your Bio here e.g your hobbies, interests etc.' required></textarea>
                    </div>
                    <div className='space-x-4 flex'>
                        <button type='submit' className='rounded-lg text-sm max-md:text-base px-4 py-2 bg-[#186BAD] mt-5 text-white font-semibold max-md:w-full hover:bg-[#186BAD]/70 transition-all duration-300 max-w-max max-md:max-w-full'>Update Profile</button>
                        <button type='submit' className='rounded-lg text-sm max-md:text-base text-black border border-black px-4 py-2 bg-[#FFFFFF] max-md:w-full hover:bg-black hover:text-white transition-all duration-300 mt-5 font-semibold max-w-max max-md:max-w-full'>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AccountSettings