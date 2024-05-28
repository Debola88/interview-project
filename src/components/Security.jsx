import React from 'react'
import lock from '../assets/lock.png'
import { FiEdit3 } from "react-icons/fi";
import { MdManageAccounts } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


function Security() {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/security/twofactor');
  };
  return (
    <div className='px-14 max-md:px-5 pt-12 max-md:pt-0 relative mx-auto pb-24'>
      <h1 className='max-md:hidden font-bold text-3xl  max-md:text-2xl pb-8 w-full'>Settings</h1>

      <div className='max-md:hidden border-b border-[#969696] absolute w-full left-0'></div>
      <div className='flex justify-between w-full md:pb-5 md:pt-8 items-center max-md:hidden'>
        <h2 className='font-bold text-2xl max-md:text-base max-md:pt-0'>Login & Security</h2>
      </div>
      <div className=' lg:max-w-[65%]'>
        <div className='flex items-start'>
          <img src={lock} alt='' className='w-auto object-contain max-md:max-w-[100px]' />
          <p className='text-[#242F48] font-semibold text-sm'>Your privacy and security are top priority. We do all we
            can to keep your account secure, and we encourage
            you to do the same by following best practices:
            Update your password regularly, enable Two-Factor
            Authentication, and keep your Support PIN private.</p>
        </div>

        <div>
          <div className='flex justify-between items-start mt-10 pb-2'>
            <h3 className='font-bold'>Password</h3>
            <div className='relative'>
              <button className='flex hover:text-black/80 transition-all items-center gap-2 text-sm font-bold'><FiEdit3 /><span>Edit</span></button>
            </div>
          </div>
          <div className='text-sm text-[#242F48] max-w-full md:max-w-[400px]'><span className=''>Changed on Oct 31, 2022, 2:29 PM EDT</span>
            * In order to remove captcha from login screen you need to
            change your password every 6 months.
          </div>
        </div>
        <div>
          <div className='flex justify-between items-start mt-10 pb-2'>
            <h3 className='font-bold'>Two Factor Authentication</h3>
            <div className='relative'>
              <button className='flex items-center hover:text-black/80 transition-all gap-2 text-sm font-bold'><MdManageAccounts /><span>Manage</span></button>
            </div>
          </div>
          <div className='text-sm text-[#242F48] max-w-full md:max-w-[400px]'>
            on(sms)
          </div>
        </div>
        <div>
          <div className='flex justify-between items-start mt-10 pb-2'>
            <h3 className='font-bold'>Support PIN</h3>
            <div className='relative'>
              <button className='flex hover:text-black/80 transition-all items-center gap-2 text-sm font-bold'><IoMdRefresh /><span>Refresh</span></button>
            </div>
          </div>
          <div className='text-sm text-[#242F48] max-w-full md:max-w-[400px]'>Valid till Jan 5, 2024, 9:40 AM EST
          </div>
        </div>
        <button onClick={handleNavigate} className='rounded-lg mt-10 text-sm max-md:text-base px-4 py-3 bg-[#186BAD] text-white font-semibold max-md:w-full hover:bg-[#186BAD]/70 transition-all duration-300 max-w-max max-md:max-w-full'>Next</button>
      </div>
    </div>
  )
}

export default Security