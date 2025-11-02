// src/components/Footer.js
import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`${
      darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'
    } py-6 mt-auto border-t ${
      darkMode ? 'border-gray-700' : 'border-gray-200'
    }`}>
      <div className="text-center text-sm">
        Made with ❤️ by Suraj Godse
      </div>
    </footer>
  );
};

export default Footer;