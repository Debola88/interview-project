import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const navItems = [
    { name: 'Overview', path: '/' },
    { name: 'Progress', path: '/progresstracker' },
    { name: 'Notification', path: '/notification' },
  ];

  return (
    <nav className="md:hidden w-full pt-10 pb-16 px-14">
      {/* Navigation Items */}
      <ul className="flex w-full absolute justify-between left-0 top-10 border-b-2">
        {navItems.map((item) => (
          <li key={item.name} className="relative max-md:text-base text-2xl font-semibold px-5 pb-3">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `text-base focus:outline-none ${isActive ? 'text-blue-500' : ''}`
              }
            >
              {item.name}
            </NavLink>
            {/* Underline for the active item */}
            <NavLink to={item.path}>
              {({ isActive }) =>
                isActive && (
                  <div className="absolute left-0 right-0 h-[2px] bg-blue-500 bottom-0 transition-all duration-300"></div>
                )
              }
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
