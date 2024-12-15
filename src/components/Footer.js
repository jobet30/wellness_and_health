/**
 * @author: Jobet P. Casquejo
 * @description: A responsive footer component with a transparent background.
 * It includes a logo, navigation links, and a mobile menu toggle. The footer is sticky and appears at the bottom of the page.
 * TailwindCSS is used for styling, and the component is fully responsive.
 * @dateCreated: 2024-12-15
 * Version: 1.0.0
 * LIcense: MIT
 */

import React from "react";

/**
 * Renders the footer of the website.
 *
 * The Footer component includes:
 * - A branding section with the site's name and a brief description.
 * - Navigation links for site pages such as "Programs" and "Donors".
 * - Social media links to platforms like Facebook, Twitter, and Instagram.
 * - A copyright notice and legal links (Privacy Policy, Terms of Service).
 *
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 *
 * @returns {JSX.Element} A fully responsive footer component.
 */

const Footer = () => {
  /**
   * Renders the Current Year
   * @returns {JSX.Element} The current year.
   */

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between md:items-center">
        {/* Branding Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">Wellness Education</h2>
          <p className="text-sm mt-2">
            Empowering communities through wellness and education programs.
          </p>
        </div>
        {/* Navigation Links */}
        <nav className="flex flex-wrap space-x-6 md:space-x-4">
          {["Programs", "Donors", "Children", "Caseworkers"].map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className="hover:text-green-400 text-sm"
            >
              {link}
            </a>
          ))}
        </nav>
        {/* Social Media Links */}
        <div className="flex space-x-6">
          {[
            {
              name: "Facebook",
              icon: "fab fa-facebook-f",
              href: "https://facebook.com",
            },
            {
              name: "Twitter",
              icon: "fab fa-twitter",
              href: "https://twitter.com",
            },
            {
              name: "Instagram",
              icon: "fab fa-instagram",
              href: "https://instagram.com",
            },
          ].map(({ name, icon, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              aria-label={`Follow us on ${name}`}
            >
              <i className={icon}></i>
            </a>
          ))}
        </div>
      </div>
      {/* Divider */}
      <div className="my-6 border-gray-700"></div>
      {/* Legal and Additional Links */}
      <div className="container mx-auto px-4 flex flex-col space-y-4 md:flex-row md:justify-between md:items-center">
        <p className="text-sm">
          &copy; {currentYear} Wellness Education. All rights reserved.
        </p>
        <nav className="flex space-x-4">
          {["Privacy Policy", "Terms of Service"].map((link) => (
            <a
              key={link}
              href={`/${link.replace(" ", "").toLowerCase()}`}
              className="hover:text-green-400 text-sm"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
