import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Navbar – positioned a bit below top as you wanted */}
      <nav className="absolute top-10 left-10 right-10 z-50 bg-black/70 backdrop-blur-xl shadow-xl rounded-2xl">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold tracking-tight">
            <Link 
              to="/" 
              className="text-white hover:text-green-400 transition-colors duration-300"
              onClick={closeMenu}
            >
              NSS
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
            <Link
              to="/about-us"
              className="text-gray-200 hover:text-white text-lg font-medium transition-colors duration-300"
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
              to="/events"
              className="text-gray-200 hover:text-white text-lg font-medium transition-colors duration-300"
              onClick={closeMenu}
            >
              Event Details
            </Link>
            <Link
              to="/download"
              className="text-gray-200 hover:text-white text-lg font-medium transition-colors duration-300"
              onClick={closeMenu}
            >
              Brochure
            </Link>
            <Link
              to="/contact"
              className="text-gray-200 hover:text-white text-lg font-medium transition-colors duration-300"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu – slides from right with blur */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-black/90 backdrop-blur-xl border-l border-white/10 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 text-white focus:outline-none"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Menu items */}
        <div className="flex flex-col items-center justify-center h-full space-y-10 text-center px-6">
          <Link
            to="/about-us"
            className="text-2xl text-gray-200 hover:text-green-400 transition-colors duration-300"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="/events"
            className="text-2xl text-gray-200 hover:text-green-400 transition-colors duration-300"
            onClick={closeMenu}
          >
            Event Details
          </Link>
          <Link
            to="/download"
            className="text-2xl text-gray-200 hover:text-green-400 transition-colors duration-300"
            onClick={closeMenu}
          >
            Brochure
          </Link>
          <Link
            to="/contact"
            className="text-2xl text-gray-200 hover:text-green-400 transition-colors duration-300"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Blurry overlay when mobile menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;