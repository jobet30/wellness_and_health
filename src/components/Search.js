/**
 * @author: Jobet P. Casquejo
 * @description: Search component to handle searching through programs, donors, children, etc.
 * This component renders an input field for users to enter search queries.
 * Based on the entered query, it displays relevant search results in real-time.
 * Date: 2024-12-15
 * @version: 1.0.0
 */

import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * Search component to handle searching through programs, donors, children, etc.
 * This component renders an input field for users to enter search queries.
 * Based on the entered query, it displays relevant search results in real-time.
 *
 * @component
 * @example
 * return (
 *   <Search data={data} onSearchResults={handleSearchResults} />
 * )
 *
 * @param {Object[]} data - The data to search through (programs, donors, etc.)
 * @param {Function} onSearchResults - Callback function to handle displaying search results.
 * @returns {JSX.Element} A fully functional search input with dynamic result rendering.
 */
const Search = ({ data, onSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  /**
   * Handle the input change in the search field.
   * It updates the query state and triggers the search action.
   *
   * @param {Object} event - The event triggered by the input change.
   */
  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  /**
   * Perform the search operation. Filters the data based on the query.
   * If the query is empty, it resets the search results.
   *
   * @param {string} query - The search query entered by the user.
   */
  const handleSearch = (query) => {
    if (!query.trim()) {
      setFilteredResults([]);
      return;
    }

    const results = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()),
    );

    setFilteredResults(results);
    onSearchResults(results);
  };

  return (
    <div className="search-container flex flex-col items-center w-full px-4">
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button
          className="absolute top-0 right-0 px-4 py-2 text-gray-500 bg-transparent border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          onClick={() => handleSearch(searchQuery)}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="search-results w-full max-w-lg mt-4">
        <ul className="list-none">
          {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <li key={item.id} className="py-2">
                <a
                  href={item.url}
                  className="block text-gray-900 hover:text-green-500"
                >
                  {item.name}
                </a>
              </li>
            ))
          ) : (
            <li className="text-gray-500 py-2">No results found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

Search.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onSearchResults: PropTypes.func.isRequired,
};

export default Search;
