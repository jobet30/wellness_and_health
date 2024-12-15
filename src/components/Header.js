/**
 * @author: Jobet P. Casquejo
 * @description: A responsive header component with a transparent background.
 * It includes a logo, navigation links, and a mobile menu toggle. The header is sticky and appears at the top of the page.
 * TailwindCSS is used for styling, and the component is fully responsive.
 * @dateCreated: 2024-12-15
 * Version: 1.0.0
 * LIcense: MIT
 */

import React, { useState } from "react";
import { Link } from "gatsby";

/**
 * Header component that renders the navigation menu with mobile responsiveness,
 * a transparent background, and sticky positioning.
 *
 * @component
 * @example
 * return (
 *   <Header />
 * )
 */
const Header = () => {
  /**
   * State to toggle the visibility of the mobile navigation menu.
   *
   * @type {boolean}
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Toggles the mobile menu state when the hamburger icon is clicked.
   *
   * @function
   * @example
   * handleMenuToggle();
   */
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggles the mobile menu state
  };

  return (
    <header className="bg-transparent fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-xl font-bold text-gray-800">
          <Link to="/" className="hover:text-green-600 transition duration-300">
            Wellness & Education
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/programs"
            className="text-gray-600 hover:text-green-600 transition duration-300"
          >
            Programs
          </Link>
          <Link
            to="/donors"
            className="text-gray-600 hover:text-green-600 transition duration-300"
          >
            Donors
          </Link>
          <Link
            to="/children"
            className="text-gray-600 hover:text-green-600 transition duration-300"
          >
            Children
          </Link>
          <Link
            to="/caseworkers"
            className="text-gray-600 hover:text-green-600 transition duration-300"
          >
            Caseworkers
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search programs..."
            className="w-48 p-2 border rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
            Donate Now
          </button>

          {/* Hamburger Icon for Mobile Menu */}
          <button
            onClick={handleMenuToggle}
            className="space-y-2 text-gray-800"
          >
            <div className="h-0.5 w-8 bg-gray-800"></div>
            <div className="h-0.5 w-8 bg-gray-800"></div>
            <div className="h-0.5 w-8 bg-gray-800"></div>
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
