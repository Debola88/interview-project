import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    const [active, setActive] = useState('Home');

    const handleNavClick = (item) => {
        setActive(item); // Update the active item
    };


    const navItems = [
        { name: 'Overview', path: '/' },
        { name: 'Progress', path: '/' },
        { name: 'Notification', path: '/notification' },
    ];

    return (
        <nav className="md:hidden w-full pt-10 pb-16 px-6">
            {/* Navigation Items */}
            <ul className="flex w-full absolute justify-between left-0 top-10 border-b-2">
                {navItems.map((item) => (
                    <li key={item.name} className="relative text-base font-semibold px-6 pb-3">
                        <Link
                            to={item.path}
                            className={`text-base focus:outline-none ${active === item.name ? '' : ''
                                }`}
                            onClick={() => handleNavClick(item.name)} // Handle click event
                        >
                            {item.name}
                        </Link>

                        {/* Underline for the active item */}
                        {active === item.name && (
                            <div className="absolute left-0 right-0 h-[2px] bg-blue-500 bottom-0 transition-all duration-300"></div>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar