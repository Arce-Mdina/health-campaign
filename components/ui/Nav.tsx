'use client'

import { useState } from 'react';

import Image from 'next/image';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Scroll to the element with a given id and offset
  const handleScroll = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const headerOffset = 50; // Change this value to adjust the scroll offset
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    // Close mobile menu after clicking
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 w-full z-[100] bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand / Logo */}
          <div className="flex items-center gap-[10px]">
            <Image 
              src="/diabetes.png"
              width={50}
              height={50}
              alt="Favicon"
              priority
            />
            {/* <a
              href="#home"
              onClick={handleScroll('home')}
              className="text-[20px] font-extrabold text-cyan-400 sm:text-[25px]"
            >
              
            </a> */}
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              onClick={handleScroll('about')}
              className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              About
            </a>

            <a
              onClick={handleScroll('prevention')}
              className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Prevention
            </a>

            <a
              onClick={handleScroll('treatment')}
              className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Treatment
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                // Cross icon when menu is open
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon when menu is closed
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800">
            <a
              onClick={handleScroll('about')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-700 transition-colors"
            >
              About
            </a>
            <a
              onClick={handleScroll('prevention')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-700 transition-colors"
            >
              Prevention
            </a>
            <a
              onClick={handleScroll('treatment')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-700 transition-colors"
            >
              Treatment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;