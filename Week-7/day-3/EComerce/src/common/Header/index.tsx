import React, { useState } from "react";
import { Link } from "react-router-dom";
// import style from './index.css'
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItemCount = 3; // Replace this with actual cart state

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          E-Shop
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/products" className="hover:text-gray-200">Products</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
          <Link to="/cart" className="relative">
            🛒 Cart
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-blue-700 p-4 space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/cart" onClick={() => setIsOpen(false)}>
            🛒 Cart ({cartItemCount})
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
