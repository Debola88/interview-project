import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";

const CustomSelect = ({ options, value, onChange }) => {
  return (
    <div className="relative inline-block md:w-96 w-full">
      {/* Custom select input */}
      <select
        className="block appearance-none w-full bg-[#E2E8F0] py-2 px-4 pr-8 rounded-xl leading-tight focus:outline-none"
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option className='rounded-xl text-sm ' key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Dropdown icon */}
      <div className="absolute inset-y-0 right-0 flex items-center px-2 text-black pointer-events-none">
        <IoMdArrowDropdown className="w-5 h-5" />
      </div>
    </div>
  );
};

export default CustomSelect;
