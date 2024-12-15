/**
 * @author: Jobet P. Casquejo
 * @description: ProgramCard component to display a single wellness program.
 * This component receives a program object as a prop and renders the program's details.
 * Date: 2024-12-15
 * @version: 1.0.0
 * @license: MIT
 */
import React from "react";
import PropTypes from "prop-types";

/**
 * ProgramCard component displays the details of a single program.
 * It includes the program's name, description, and a link to more details.
 *
 * @component
 * @example
 * return (
 *   <ProgramCard program={{ id: 1, name: "Wellness Program", description: "A program to improve health and well-being", url: "/wellness" }} />
 * )
 *
 * @param {Object} program - The program object containing details like id, name, description, and URL.
 * @param {string} program.id - The unique identifier for the program.
 * @param {string} program.name - The name of the program.
 * @param {string} program.description - A short description of the program.
 * @param {string} program.url - A link to the program's detailed page.
 * @returns {JSX.Element} A card displaying the program's information.
 */
const ProgramCard = ({ program }) => {
  return (
    <div className="program-card bg-white shadow-lg rounded-lg p-4">
      <h3 className="text-xl font-semibold text-gray-900">{program.name}</h3>
      <p className="text-gray-700 mt-2">{program.description}</p>
      <a
        href={program.url}
        className="text-blue-500 mt-4 inline-block hover:underline"
      >
        Learn More
      </a>
    </div>
  );
};

ProgramCard.propTypes = {
  program: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProgramCard;
