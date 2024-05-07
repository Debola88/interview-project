import React, { useState, useEffect } from 'react';

const ProgressBar = ({ progress }) => {
    return (
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
                className="h-full bg-blue-500 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

const ProgressExample = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 10 : 100)); // Increment progress
        }, 1000); // Update progress every second

        return () => clearInterval(interval); // Cleanup interval
    }, []); // Empty dependency array to ensure useEffect runs only once on mount

    return (
        <div className="p-6">
            <h2 className="mb-4 text-xl font-bold">Progress Bar Example</h2>
            <ProgressBar progress={progress} />
        </div>
    );
};

export default ProgressExample;
