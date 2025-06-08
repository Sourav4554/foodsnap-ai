import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icon library
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // state to manage mobile menu visibility

  const toggleMenu = () => setIsOpen(!isOpen); // function to toggle mobile menu visibility
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">
        <span className="text-green-500">FoodSnap</span>{" "}
        <span className="text-blue-500">AI</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
        <a href="#home">
          {" "}
          <li className="hover:text-green-600 cursor-pointer transition">
            Home
          </li>
        </a>
        <a href="#about">
          <li className="hover:text-green-600 cursor-pointer transition">
            About
          </li>
        </a>
        <a href="#work">
          {" "}
          <li className="hover:text-green-600 cursor-pointer transition">
            How it Works
          </li>
        </a>
      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-[64px] left-0 w-full bg-white text-gray-700 font-medium flex flex-col items-center space-y-4 py-6 md:hidden shadow-md">
          <li className="hover:text-green-600 cursor-pointer">Home</li>
          <li className="hover:text-green-600 cursor-pointer">About</li>
          <li className="hover:text-green-600 cursor-pointer">How it Works</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
