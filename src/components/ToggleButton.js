import React, { useState, useEffect } from 'react';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(() => {
    const savedState = localStorage.getItem('toggleState');
    return savedState !== null ? JSON.parse(savedState) : false;
  });

  const toggle = () => {
    setIsToggled((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem('toggleState', JSON.stringify(isToggled));
  }, [isToggled]);

  return (
    <button
      onClick={toggle}
      aria-pressed={isToggled}
      className={`relative inline-flex items-center h-8 w-16 rounded-full transition-colors duration-300 focus:outline-none ${
        isToggled ? 'bg-[#186BAD]' : 'bg-gray-500'
      }`}
    >
      <span
        className={`inline-block w-6 h-6 transform bg-white rounded-full shadow-md transition-transform duration-300 ${
          isToggled ? 'translate-x-8' : 'translate-x-1'
        }`}
      ></span>
    </button>
  );
};

export default ToggleButton;
