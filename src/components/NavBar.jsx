import React, { useState } from 'react'
import { NavLink  } from 'react-router-dom';

function NavBar() {
    const [active, setActive] = useState('Dashboard');

    const handleNavClick = (item) => {
        setActive(item); // Update the active item
    };


    const navItems = [
        { name: 'Overview', path: '/' },
        { name: 'Progress', path: '/' },
        { name: 'Notification', path: '/notification' },
    ];

    return (
        <nav className="md:hidden w-full pt-10 pb-16 px-14">
            {/* Navigation Items */}
            <ul className="flex w-full absolute justify-between left-0 top-10 border-b-2">
                {navItems.map((item) => (

                    <NavLink 
                        key={item.name}
                        to={item.path}
                        className={`text-base focus:outline-none ${active === item.name ? 'text-blue-500' : ''
                            }`}
                        onClick={() => handleNavClick(item.name)} // Handle click event
                    >
                        <li className="relative max-md:text-base text-2xl font-semibold px-6 pb-3">

                            {item.name}

                            {/* Underline for the active item */}
                            {active === item.name && (
                                <div className="absolute left-0 right-0 h-[2px] bg-blue-500 bottom-0 transition-all duration-300"></div>
                            )}
                        </li>
                    </NavLink>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar