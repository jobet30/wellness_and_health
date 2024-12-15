/**
 * @author: Jobet P. Casquejo
 * @description: A responsive header component with a background color that matches the theme.
 * It includes a logo, navigation links, a mobile menu toggle, a Donate Now button, and a search input field with a magnifying glass icon.
 * The header is sticky and appears at the top of the page. TailwindCSS is used for styling, and the component is fully responsive.
 * @dateCreated: 2024-12-15
 * Version: 1.0.0
 * License: MIT
 */

import React, { useState } from "react";
import { Link } from "gatsby";
import { FiSearch } from "react-icons/fi";

/**
 * Header component that renders the navigation menu with mobile responsiveness,
 * a background color, sticky positioning, a Donate Now button that redirects to a specific form,
 * and a search input with a magnifying glass icon.
 *
 * @component
 * @example
 * return (
 *   <Header />
 * )
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-green-700 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-xl font-bold text-white">
          <Link to="/" className="hover:text-green-300 transition duration-300">
            Nurture Future Foundation
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/programs"
            className="text-white hover:text-green-300 transition duration-300"
          >
            Programs
          </Link>
          <Link
            to="/donors"
            className="text-white hover:text-green-300 transition duration-300"
          >
            Donors
          </Link>
          <Link
            to="/children"
            className="text-white hover:text-green-300 transition duration-300"
          >
            Children
          </Link>
          <Link
            to="/caseworkers"
            className="text-white hover:text-green-300 transition duration-300"
          >
            Caseworkers
          </Link>
        </nav>

        {/* Desktop Search and Donate Now */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search programs..."
              className="w-48 pl-10 p-2 border rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <FiSearch
              className="absolute left-3 top-2 text-gray-500"
              size={20}
            />
          </div>
          <a
            href="/donation-form"
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
          >
            Donate Now
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search programs..."
              className="w-48 pl-10 p-2 border rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <FiSearch
              className="absolute left-3 top-2 text-gray-500"
              size={20}
            />
          </div>
          <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
            Donate Now
          </button>

          {/* Hamburger Icon for Mobile Menu */}
          <button onClick={handleMenuToggle} className="space-y-2 text-white">
            <div className="h-0.5 w-8 bg-white"></div>
            <div className="h-0.5 w-8 bg-white"></div>
            <div className="h-0.5 w-8 bg-white"></div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white absolute top-16 left-0 right-0 shadow-lg p-4`}
      >
        <nav className="space-y-4">
          <Link
            to="/programs"
            className="block text-gray-800 hover:text-green-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Programs
          </Link>
          <Link
            to="/donors"
            className="block text-gray-800 hover:text-green-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Donors
          </Link>
          <Link
            to="/children"
            className="block text-gray-800 hover:text-green-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Children
          </Link>
          <Link
            to="/caseworkers"
            className="block text-gray-800 hover:text-green-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Caseworkers
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
