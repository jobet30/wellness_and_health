/**
 * @author: Jobet P. Casquejo
 * @description: ProgramFilter component to filter wellness programs by search query and category.
 * This component updates the filtered programs based on the user's input and passes the result back to the parent via the `onFilter` callback.
 * Date: 2024-12-15
 * @version: 1.0.0
 * @license: MIT
 */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * ProgramFilter component to filter wellness programs by search query and category.
 * This component updates the filtered programs based on the user's input and passes the result back to the parent via the `onFilter` callback.
 *
 * @component
 * @example
 * return (
 *   <ProgramFilter programs={programs} onFilter={handleFilterChange} />
 * )
 *
 * @param {Object[]} programs - Array of wellness program objects to filter.
 * @param {Function} onFilter - Callback function to handle filtered program data.
 * @returns {JSX.Element} A filter interface and display of the number of filtered programs.
 */
const ProgramFilter = ({ programs, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredPrograms, setFilteredPrograms] = useState([]);

  useEffect(() => {
    filterPrograms();
  }, [searchQuery, selectedCategory, programs]);

  /**
   * Filters the programs based on search query and selected category.
   */
  const filterPrograms = () => {
    if (!programs || programs.length === 0) {
      setFilteredPrograms([]);
      return;
    }

    const filtered = programs.filter((program) => {
      const matchesSearch = program.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory
        ? program.category.toLowerCase() === selectedCategory.toLowerCase()
        : true;

      return matchesSearch && matchesCategory;
    });

    setFilteredPrograms(filtered);
    onFilter(filtered);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="program-filter-container flex flex-col items-center w-full mb-8 mt-16 sm:mt-20">
      <h3 className="text-2xl font-semibold mb-4">Filter Programs</h3>
      <div className="flex flex-col sm:flex-row sm:space-x-4 w-full">
        <div className="search-container mb-4 sm:mb-0 w-full sm:w-1/2">
          <label htmlFor="search" className="block text-lg font-medium mb-2">
            Search Programs
          </label>
          <input
            id="search"
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Search by program name"
          />
        </div>

        <div className="category-container w-full sm:w-1/3">
          <label htmlFor="category" className="block text-lg font-medium mb-2">
            Program Category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">All Categories</option>
            <option value="Yoga">Yoga</option>
            <option value="Nutrition">Nutrition</option>
            <option value="Mental Health">Mental Health</option>
            <option value="Fitness">Fitness</option>
          </select>
        </div>
      </div>

      <div className="mt-4 text-lg text-gray-600">
        {filteredPrograms.length} programs found
      </div>
    </div>
  );
};

ProgramFilter.propTypes = {
  programs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default ProgramFilter;
