"use client";

import { useState } from 'react';
import { FaBars, FaShoppingBag, FaUser, FaSearch } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to close the mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">

        {/* Left Div: Full Menu for Larger Screens */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/product" className="hover:text-gray-400">Product</Link>
          <Link href="/feature" className="hover:text-gray-400">Category</Link>
          <Link href="/discount" className="hover:text-gray-400">Sale</Link>
        </nav>

        {/* Center Div: Logo */}
        <div className="text-2xl font-bold text-center  ">
        <h1 className="font-semibold text-2xl mb-2">MEJIWOO</h1>
        <h1 className="font-semibold text-2xl ">미지우 </h1>
        </div>
        

        {/* Right Div: Full Menu for Larger Screens */}
        <nav className="hidden md:flex space-x-6 items-center">
          {/* Search Input (Only on Desktop) */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search" 
              className="px-4 py-2 rounded-2xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-600 w-32 sm:w-48 md:w-64 lg:w-80"
            />
            <FaSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white" />
          </div>
          <Link href="/seller" className="hover:text-gray-400">
            <FaShoppingBag size={20} />
          </Link>
          <Link href="/signup" className="hover:text-gray-400">
            <FaUser size={20} />
          </Link>
        </nav>

        {/* Hamburger Menu Icon (visible on small screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="block focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>

        {/* Mobile Menu (visible when hamburger icon is clicked) */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 text-white">
            <nav className="flex flex-col items-center space-y-4 p-4">
              <Link href="/" className="hover:text-gray-400" onClick={closeMobileMenu}>Home</Link>
              <Link href="/product" className="hover:text-gray-400" onClick={closeMobileMenu}>Product</Link>
              <Link href="/feature" className="hover:text-gray-400" onClick={closeMobileMenu}>Category</Link>
              <Link href="/discount" className="hover:text-gray-400" onClick={closeMobileMenu}>Sale</Link>
              <Link href="/seller" className="hover:text-gray-400" onClick={closeMobileMenu}>
                <FaShoppingBag size={20} />
              </Link>
              <Link href="/signup" className="hover:text-gray-400" onClick={closeMobileMenu}>
                <FaUser size={20} />
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
