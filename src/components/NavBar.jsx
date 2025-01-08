import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-black' : 'bg-transparent'
    } text-white py-4 px-6`}>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <a href="/" className="text-white">It Lives Beneath</a>
        </div>

        <div className="lg:hidden flex items-center" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="text-2xl cursor-pointer" />
        </div>

        <div className="hidden lg:flex space-x-6 text-lg">
          <a href="#home" className="hover:text-gray-400 transition duration-300">Home</a>
          <a href="#about" className="hover:text-gray-400 transition duration-300">About</a>
          <a href="#features" className="hover:text-gray-400 transition duration-300">Features</a>
          <a href="#download" className="hover:text-gray-400 transition duration-300">Download</a>
        </div>
        
        <div className={`lg:hidden fixed top-0 right-0 bg-black bg-opacity-90 w-2/3 h-full transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-end p-6">
            <FontAwesomeIcon icon={faTimes} className="text-3xl text-white cursor-pointer" onClick={toggleMenu} />
          </div>
          <div className="flex flex-col items-center text-xl space-y-6 mt-12">
            <a href="#home" className="text-white hover:text-gray-400 transition duration-300" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-white hover:text-gray-400 transition duration-300" onClick={toggleMenu}>About</a>
            <a href="#features" className="text-white hover:text-gray-400 transition duration-300" onClick={toggleMenu}>Features</a>
            <a href="#download" className="text-white hover:text-gray-400 transition duration-300" onClick={toggleMenu}>Download</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

