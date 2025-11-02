import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Education', path: '/education' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' }
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Placeholder div to prevent content jump when navbar becomes fixed */}
      <div className="h-16"></div>
      
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
          ${darkMode ? 'bg-gray-800/95' : 'bg-white/95'} 
          ${isScrolled ? 'shadow-lg backdrop-blur-md' : 'shadow-md'}
        `}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link 
                to="/" 
                className={`text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent
                  hover:scale-105 transition-transform duration-300`}
              >
                {"<SurajGodse/>"}
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-3 py-2 text-base font-medium transition-all duration-300 ease-in-out
                    hover:scale-105 group
                    ${isActivePath(item.path)
                      ? darkMode 
                        ? 'text-blue-400'
                        : 'text-blue-600'
                      : darkMode 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left scale-x-0 
                    transition-transform duration-300 group-hover:scale-x-100
                    ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}>
                  </span>
                </Link>
              ))}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300
                  hover:scale-110 hover:rotate-12
                  ${darkMode 
                    ? 'bg-gray-700 text-yellow-300 hover:text-yellow-200' 
                    : 'bg-gray-100 text-gray-600 hover:text-amber-500'
                  }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300
                  hover:scale-110 hover:rotate-12
                  ${darkMode 
                    ? 'bg-gray-700 text-yellow-300 hover:text-yellow-200' 
                    : 'bg-gray-100 text-gray-600 hover:text-amber-500'
                  }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-lg
                  transition-all duration-300 hover:scale-110
                  ${darkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out 
            ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
            ${darkMode ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur-md`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 rounded-lg text-base font-medium 
                  transition-all duration-300 ease-in-out
                  ${isActivePath(item.path)
                    ? darkMode 
                      ? 'bg-gray-700 text-blue-400'
                      : 'bg-gray-100 text-blue-600'
                    : darkMode 
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700/70' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/70'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;