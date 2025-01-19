import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-16 bg-red-600 text-white px-5'>
      {/* Logo */}
      <div className="log">
        <img 
          src="/nj_groww.jpg" 
          alt="NJ WEALTH" 
          className="h-12 w-auto object-contain"
        />
      </div>

      {/* Navigation Links */}
      <div className='menus'>
        <ul className='flex gap-5 items-center'>
          <li>
            <Link 
              href="/" 
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400 hover:text-red-900 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400 hover:text-red-900 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400 hover:text-red-900 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
