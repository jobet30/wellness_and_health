/**
 * @author: Jobet P. Casquejo
 * @description: ProgramList component to display a list of wellness programs.
 * This component fetches and displays all available programs, and handles pagination if necessary.
 * Date: 2024-12-15
 * @version: 1.0.0
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import ProgramCard from "./ProgramCard";

/**
 * ProgramList component to display a list of wellness programs.
 * It fetches program data and renders each program using the ProgramCard component.
 * Pagination can be implemented for larger data sets.
 *
 * @component
 * @example
 * return (
 *   <ProgramList programs={programs} />
 * )
 *
 * @param {Object[]} programs - The list of wellness programs to display.
 * @returns {JSX.Element} A list of wellness programs displayed using ProgramCard components.
 */
const ProgramList = ({ programs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const programsPerPage = 6;

  // Ensure programs is always an array, even if undefined or null
  const safePrograms = Array.isArray(programs) ? programs : [];

  /**
   * Calculate the index of the first program to display on the current page.
   * @param {number} page - The current page number.
   * @returns {number} The index of the first program to display.
   */
  const indexOfFirstProgram = (page) => (page - 1) * programsPerPage;

  /**
   * Calculate the index of the last program to display on the current page.
   * @param {number} page - The current page number.
   * @returns {number} The index of the last program to display.
   */
  const indexOfLastProgram = (page) => page * programsPerPage;

  /**
   * Handle pagination. Updates the current page based on user interaction.
   *
   * @param {number} page - The page number to navigate to.
   */
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentPrograms = safePrograms.slice(
    indexOfFirstProgram(currentPage),
    indexOfLastProgram(currentPage),
  );

  return (
    <div className="program-list-container flex flex-col items-center w-full px-4">
      <h2 className="text-3xl font-bold mb-4">Wellness Programs</h2>
      {/* Conditionally render ProgramCard components */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {currentPrograms.length > 0 ? (
          currentPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))
        ) : (
          <p className="text-center text-lg text-gray-600">
            No programs available.
          </p>
        )}
      </div>
      {/* Pagination controls */}
      {safePrograms.length > programsPerPage && (
        <div className="pagination mt-6 flex justify-center w-full">
          <button
            className="px-4 py-2 mx-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-2 text-lg">{`Page ${currentPage}`}</span>
          <button
            className="px-4 py-2 mx-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(safePrograms.length / programsPerPage)
            }
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

ProgramList.propTypes = {
  programs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProgramList;
