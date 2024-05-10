import React from 'react';
import '../rangeslider.css';


const RangeSlider = ({ value = 50, max = 100 }) => {
    // const [value, setValue] = useState(min);

    // const handleChange = (e) => {
    //     setValue(Number(e.target.value));
    // };

    return (
        <div className="">
            <div className='max-md:hidden'>
                <div className='text-sm flex w-full justify-between'>
                    <p className='font-semibold'>Mathematics</p>
                    <p className='text-[#8A8A8A]'>{value}</p>
                </div>

                {/* Range Slider */}
                <input
                    className="range-slider w-full h-2 bg-gray-300 border-none rounded-full outline-none transition-all cursor-pointer"
                    type="range"
                    id="range-slider"
                    name="range-slider"
                    // min={min}
                    // max={max}
                    // step={step}
                    // value={value}
                    // onChange={handleChange}
                />
            </div>
            {/* Mobile version */}
            <div className='md:hidden'>
                <div className='text-sm flex w-full justify-between'>
                    <p className='font-semibold'>Mathematics</p>
                    <p className='text-[#8A8A8A]'>{value} students</p>
                </div>

                {/* Range Slider */}
                <input
                    className="range-slider w-full h-2 bg-gray-300 border-none rounded-full outline-none transition-all cursor-pointer"
                    type="range"
                    id="range-slider"
                    name="range-slider"
                    // min={min}
                    // max={max}
                    // step={step}
                    // value={value}
                    // onChange={handleChange}
                />
            </div>

        </div>
    );
};

export default RangeSlider;
