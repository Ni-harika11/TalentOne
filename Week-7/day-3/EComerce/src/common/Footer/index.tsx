import React from "react";
import { Link } from "react-router-dom";
// import style from './index.css'
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">E-Shop</h2>
          <p className="text-gray-400">Your one-stop shop for everything!</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/products" className="hover:text-gray-400">Products</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">🌐</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-4">
        © {new Date().getFullYear()} E-Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
