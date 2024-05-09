// src/components/SelectExample.jsx
import React, { useState } from 'react';
import CustomSelect from './CustomSelect';

const SelectExample = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const selectOptions = [
    { value: '', label: '' },
    { value: 'January', label: 'January' },
    { value: 'Febuary', label: 'Febuary' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' },
  ];

  return (
    <div className="">
      <CustomSelect
        options={selectOptions}
        value={selectedOption}
        onChange={handleSelectChange}
      />
    </div>
  );
};

export default SelectExample;
