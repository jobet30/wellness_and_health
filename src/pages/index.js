/**
 * @author: Jobet P. Casquejo
 * @description: IndexPage component that serves as the homepage of the wellness site.
 * It handles rendering the header, program filter, list of programs, and footer.
 * Date: 2024-12-15
 * @version: 1.0.0
 * @license: MIT
 */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProgramList from "../components/ProgramList";
import ProgramFilter from "../components/ProgramFilter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

/**
 * IndexPage component that serves as the homepage of the wellness site.
 * It handles rendering the header, program filter, list of programs, and footer.
 *
 * @component
 * @example
 * return (
 *   <IndexPage programs={programs} />
 * )
 *
 * @param {Object[]} programs - Array of wellness program objects to be displayed on the homepage.
 * @returns {JSX.Element} The layout of the homepage, including filter and program list.
 */
const IndexPage = ({ programs }) => {
  const [filteredPrograms, setFilteredPrograms] = useState(programs);
  const [loading, setLoading] = useState(false); // Loading state

  /**
   * Handles changes in filter criteria and updates the filtered program list.
   * This method is passed to ProgramFilter for user interaction.
   *
   * @param {Object[]} filtered - The filtered list of programs based on the user's criteria.
   */
  const handleFilterChange = (filtered) => {
    setLoading(true); // Start loading when filtering
    setFilteredPrograms(filtered);
  };

  /**
   * This effect runs when the component mounts or when the programs or filteredPrograms change.
   * It ensures that the filtered programs are updated accordingly.
   */
  useEffect(() => {
    if (programs) {
      setLoading(false); // Stop loading once programs are set
    }
  }, [programs]);

  return (
    <div className="homepage-container flex flex-col min-h-screen">
      <Helmet>
        <title>Wellness Programs | Home</title>
        <meta
          name="description"
          content="Browse through our wide range of wellness programs including Yoga, Nutrition, Mental Health, and more."
        />
      </Helmet>

      <Header />
      <main className="flex-grow w-full px-4 py-6">
        <section className="programs-section w-full">
          <ProgramFilter programs={programs} onFilter={handleFilterChange} />
          {loading ? (
            <div className="loading-indicator text-center py-4">
              <p>Loading...</p>
            </div>
          ) : (
            <ProgramList programs={filteredPrograms} />
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

/**
 * Prop validation for IndexPage component.
 * Ensures that programs is an array of program objects.
 */
IndexPage.propTypes = {
  programs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default IndexPage;
