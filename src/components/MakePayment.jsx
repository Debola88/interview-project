import React, { useState } from 'react'
import man from '../assets/Rectangle 34624347.png'
import { CiStar } from "react-icons/ci";
import SelectExample from './SelectExample';




function MakePayment() {

    const [selectedOption, setSelectedOption] = useState('BankTransfer');

    // Function to handle changes in the radio button group
    const handleRadioChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (

        <div className=' px-14 max-md:px-5 pt-12 max-md:pt-10 relative mx-auto pb-24'>
            <h1 className='max-md:hidden font-bold text-3xl  max-md:text-2xl pb-8 w-full'>Make Payment</h1>

            <div className='max-md:hidden border-b border-[#969696] absolute w-full left-0'></div>
            <div className='md:pt-8 flex max-md:flex-col gap-10 items-center'>
                <img src={man} alt='' />
                <div className='flex items-center flex-col gap-2'>
                    <p className='font-bold'>Henry Arsene</p>
                    <p>History Tutor</p>
                    <div className='text-2xl cursor-pointer text-[#DE4B18] gap-1 flex'>
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                    </div>
                </div>
            </div>
            <div className='pt-10'>
                <form className='text-left'>
                    <div className='flex md:space-x-14 gap-2 max-md:flex-col w-full'>
                        <label className='font-semibold'>Select Month:</label>
                        <span className=''><SelectExample /></span>
                    </div>
                    <div className='flex max-md:flex-col gap-5 mt-5'>
                        <label className=' font-semibold'>Payment Method: </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="options"
                                value="Creditcard"
                                checked={selectedOption === 'Creditcard'}
                                onChange={handleRadioChange}
                                className="form-radio text-blue-600"
                            />
                            <span className="ml-2 font-semibold text-sm">Credit card</span>
                        </label>

                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="options"
                                value="Debitcard"
                                checked={selectedOption === 'Debitcard'}
                                onChange={handleRadioChange}
                                className="form-radio text-blue-600"
                            />
                            <span className="ml-2 text-sm font-semibold">Debit card</span>
                        </label>

                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="options"
                                value="Paypal"
                                checked={selectedOption === 'Paypal'}
                                onChange={handleRadioChange}
                                className="form-radio text-blue-600"
                            />
                            <span className="ml-2 text-sm font-semibold">Paypal</span>
                        </label>

                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="options"
                                value="BankTransfer"
                                checked={selectedOption === 'BankTransfer'}
                                onChange={handleRadioChange}
                                className="form-radio text-blue-600"
                            />
                            <span className="ml-2 text-sm font-semibold">Bank Transfer</span>
                        </label>
                    </div>
                </form>
            </div>
            <div>
                <h2 className='font-bold md:text-xl mt-10'>Bank Transfer Information:</h2>
                <ul className='list-disc list-inside pt-5 space-y-2'>
                    <li className='font-semibold md:text-lg text-sm'>Bank Name: <span className='font-light'>Wema Bank</span></li>
                    <li className='font-semibold md:text-lg text-sm'>Account Name: <span className='font-light'>Proliferate ai</span></li>
                    <li className='font-semibold md:text-lg text-sm'>Account Number: <span className='font-light'>0918273625</span></li>
                    <li className='font-semibold md:text-lg text-sm'>Routing Number (if applicable): <span className='font-light'>SWG283645</span></li>
                </ul>
            </div>
            <div className='w-full pt-4'>
                <button type='submit' className='rounded-lg text-sm max-md:text-base px-4 py-2 max-md:py-4 bg-[#186BAD] mt-5 text-white font-semibold w-auto max-md:w-full'>Confirm Payment</button>
            </div>
        </div>
    )
}

export default MakePayment