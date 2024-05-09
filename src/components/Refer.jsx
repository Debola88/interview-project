import React from 'react'

function Refer() {
    return (
        <div className=' px-14 max-md:px-5 pt-12 max-md:pt-10 relative mx-auto pb-24'>
            <h1 className='max-md:hidden font-bold text-3xl  max-md:text-2xl pb-8 w-full'>Refer a Friend</h1>

            <div className='max-md:hidden border-b border-[#969696] absolute w-full left-0'></div>

            <p className='pb-5 md:pt-8 text-sm'>Fill out your friend's email address, to invite them.</p>
            <form className='flex flex-col gap-4'>
                <label className='text-2xl font-bold'>
                    Email Address:
                </label>
                <input type="email" id='email' placeholder='Type here' className='h-12 text-sm max-md:text-base outline-none border rounded px-3 py-3 md:max-w-[350px] w-full appearance-none leading-tight ' required/>
                <button type='submit' className='rounded-lg text-sm max-md:text-base px-4 py-2 max-md:py-4 bg-[#186BAD] mt-5 text-white font-semibold max-w-max max-md:max-w-full'>Send Invitation</button>
            </form>
            <div className='md:mt-14 mt-4 md:text-black text-[#242F48] text-sm max-w-[600px]'>
                <h2 className='font-bold pb-2 max-md:hidden'>Notes:</h2>
                <p className=''>By clicking <span className='font-semibold'>"Send Invitation"</span>, you agree to our terms and conditions and acknowledge that you have permission to share your friend's contact information</p>
            </div>
        </div>
    )
}

export default Refer