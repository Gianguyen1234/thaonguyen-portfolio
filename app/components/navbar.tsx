"use client";

import { useState } from 'react';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo or Brand */}
          <div className="text-lg font-bold flex items-center">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <i className="fas fa-user-circle fa-2x mr-2"></i>
                My Portfolio
              </div>
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <i className={`fas fa-${isOpen ? 'times' : 'bars'} fa-2x`}></i>
            </button>
          </div>

          {/* Navigation Links */}
          <div className={`flex-col md:flex-row md:flex md:space-x-4 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
            <Link href="/">
              <div className="px-3 py-2 transition-transform transform hover:scale-105 hover:text-yellow-300 flex items-center cursor-pointer">
                <i className="fas fa-home"></i>
                <span className="ml-1">Home</span>
              </div>
            </Link>
            <Link href="/about">
              <div className="px-3 py-2 transition-transform transform hover:scale-105 hover:text-yellow-300 flex items-center cursor-pointer">
                <i className="fas fa-user"></i>
                <span className="ml-1">About</span>
              </div>
            </Link>
            <Link href="/projects">
              <div className="px-3 py-2 transition-transform transform hover:scale-105 hover:text-yellow-300 flex items-center cursor-pointer">
                <i className="fas fa-briefcase"></i>
                <span className="ml-1">Projects</span>
              </div>
            </Link>
            <Link href="/contact">
              <div className="px-3 py-2 transition-transform transform hover:scale-105 hover:text-yellow-300 flex items-center cursor-pointer">
                <i className="fas fa-envelope"></i>
                <span className="ml-1">Contact</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-2 md:hidden flex justify-around">
        <Link href="/">
          <div className="flex flex-col items-center text-white">
            <i className="fas fa-home"></i>
            <span className="text-xs">Home</span>
          </div>
        </Link>
        <Link href="/about">
          <div className="flex flex-col items-center text-white">
            <i className="fas fa-user"></i>
            <span className="text-xs">About</span>
          </div>
        </Link>
        <Link href="/projects">
          <div className="flex flex-col items-center text-white">
            <i className="fas fa-briefcase"></i>
            <span className="text-xs">Projects</span>
          </div>
        </Link>
        <Link href="/contact">
          <div className="flex flex-col items-center text-white">
            <i className="fas fa-envelope"></i>
            <span className="text-xs">Contact</span>
          </div>
        </Link>
      </div>
    </>
  );
}
