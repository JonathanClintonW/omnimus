import { useState } from 'react';
import Link from 'next/link';
import DarkModeToggle from '../context/DarkModeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <nav className="bg-white shadow-md rounded-md">
      <div className="flex justify-between gap-4 text-black bg-white px-4 rounded-md py-2 font-bold uppercase shadow-lg">
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" passHref>
            <span className="text-black font-bold uppercase cursor-pointer ">Omnimus</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/projects" passHref>
            <span className="text-black font-bold uppercase cursor-pointer">Projects</span>
          </Link>
          <Link href="/clients" passHref>
            <span className="text-black font-bold uppercase cursor-pointer">Clients</span>
          </Link>
          <Link href="/contact" passHref>
            <span className="text-black font-bold uppercase cursor-pointer">Contact</span>
          </Link>
          <DarkModeToggle />
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg
              className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
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
              ></path>
            </svg>
            <svg
              className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white dark:bg-black shadow-lg z-50 transition-all duration-500 ease-in-out ${isMenuOpen ? 'slide-in' : 'slide-out'
          }`}
      >
        <div className="px-6 pt-4 pb-3 space-y-1 text-xl text-black dark:text-white flex flex-col gap-4 transition-all duration-500">
          <div className='py-4 border-b-2 flex justify-between'>
            <Link href="/" passHref onClick={closeMenu}>
              <span className="font-bold uppercase cursor-pointer text-gradient-turquoise">Omnimus</span>
            </Link>
            <button onClick={toggleMenu}>
              <svg
                className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

          </div>

          <Link href="/projects" onClick={closeMenu}>
            <span className="font-semibold uppercase cursor-pointer">Projects</span>
          </Link>
          <Link href="/clients" onClick={closeMenu}>
            <span className="font-semibold uppercase cursor-pointer">Clients</span>
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            <span className="font-semibold uppercase cursor-pointer">Contact</span>
          </Link>
          <div className='font-semibold' onClick={closeMenu}>
            <DarkModeToggle />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
