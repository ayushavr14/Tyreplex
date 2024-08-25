import React, { useState } from "react";
import { navData } from "../data/nav-bar";
import Logo from "../assets/TP-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showSubItems, setShowSubItems] = useState(false);

  const handleMainHeadingClick = (index) => {
    setActiveIndex(index);
    setShowSubItems(true);
  };

  const handleBackClick = () => {
    setShowSubItems(false);
  };

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-800 hover:text-red-500 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Items (Desktop) */}
        <div className="hidden lg:flex items-center space-x-8">
          {navData.map((navItem, index) => (
            <div key={index} className="group relative">
              <a
                href="#"
                className="text-gray-800 font-medium hover:text-red-500"
              >
                {navItem.item}
              </a>
              {navItem.subItems && (
                <div className="absolute hidden group-hover:block bg-white border shadow-lg mt-1 rounded-lg w-56">
                  <ul className="py-2">
                    {navItem.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="hover:bg-gray-100">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-800"
                        >
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Login Button (Desktop) */}
        <div className="hidden lg:flex space-x-4">
          <a href="#" className="text-gray-800 hover:text-red-500">
            Login
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pt-2 pb-4">
          {!showSubItems ? (
            <div className="space-y-2">
              {navData.map((navItem, index) => (
                <button
                  key={index}
                  onClick={() => handleMainHeadingClick(index)}
                  className="block w-full text-left font-medium text-gray-800 hover:text-red-500 py-2"
                >
                  {navItem.item}
                </button>
              ))}
            </div>
          ) : (
            <div>
              <button
                onClick={handleBackClick}
                className="block text-left text-gray-800 hover:text-red-500 py-2"
              >
                ← Back
              </button>
              <ul className="pl-4 space-y-1">
                {navData[activeIndex]?.subItems?.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href="#"
                      className="block text-gray-800 hover:text-red-500 py-2"
                    >
                      {subItem}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-4">
            <a href="#" className="block text-gray-800 hover:text-red-500">
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
