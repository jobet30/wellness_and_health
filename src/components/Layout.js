/**
 * @author: Jobet P. Casquejo
 * @description: Layout component to provide a consistent structure across all pages.
 * Includes a shared Header and a content area for page-specific content.
 * Date: 2024-12-15
 * @version: 1.0.0
 * @license: MIT
 */
import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";

/**
 * Layout component to provide a consistent structure across all pages.
 * Includes a shared Header and a content area for page-specific content.
 *
 * @component
 * @example
 * // Usage in a page
 * return (
 *   <Layout>
 *     <h1>Page Content</h1>
 *   </Layout>
 * )
 *
 * @param {Object} props - React props
 * @param {React.ReactNode} props.children - The page-specific content to render inside the layout.
 * @returns {JSX.Element} The Layout component with a Header and content area.
 */
const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Shared Header */}
      <Header />

      {/* Page-Specific Content */}
      <main className="content px-6 py-12">{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
