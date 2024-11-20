import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-600/45 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Website</h1>
        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* Menu Items */}
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li><a href="#" className="block py-2">Home</a></li>
            <li><a href="#" className="block py-2">About</a></li>
            <li><a href="#" className="block py-2">Services</a></li>
            <li><a href="#" className="block py-2">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
