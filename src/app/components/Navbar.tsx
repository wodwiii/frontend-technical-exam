"use client";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white absolute w-full top-0 z-10 p-8 md:p-16">
      <div className="flex-container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold " style={{ fontFamily: 'var(--font-avenir-bold)' }}>
          <a href="#">AnimeBinge</a>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-12">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            Discover
          </a>
          <a href="#" className="hover:text-gray-300">
            About us
          </a>
         
          <div className="flex gap-4">
          <button className="border border-white text-white py-2 px-6 rounded hover:bg-white hover:text-gray-900 transition">
            Sign Up
          </button>
          <button className="bg-secondary text-white py-2 px-6 rounded hover:bg-white hover:text-gray-900 transition">
            Log In
          </button>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-200 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2">
          <a href="#" className="block px-2 py-1 hover:bg-gray-700">
            Home
          </a>
          <a href="#" className="block px-2 py-1 hover:bg-gray-700">
            About
          </a>
          <a href="#" className="block px-2 py-1 hover:bg-gray-700">
            Services
          </a>
          <a href="#" className="block px-2 py-1 hover:bg-gray-700">
            Contact
          </a>
          {/* Sign Up and Log In Buttons */}
          <a href="#" className="border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-gray-900 transition">
            Sign Up
          </a>
          <a href="#" className="bg-white text-gray-900 py-2 px-4 rounded hover:bg-gray-300 transition">
            Log In
          </a>
        </div>
        
      )}
    </nav>
  );
};

export default Navbar;
