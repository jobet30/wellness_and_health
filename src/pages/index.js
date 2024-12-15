/**
 * @author: Jobet P. Casquejo
 * @description: Main entry point for the homepage. Renders the ProgramList and any other components like Header, Footer, etc.
 * Date: 2024-12-15
 * @version: 1.0.0
 */

import React, { useState } from "react";
import ProgramList from "../components/ProgramList";
import ProgramFilter from "../components/ProgramFilter";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

  /**
   * Handles changes in filter criteria and updates the filtered program list.
   *
   * @param {Object[]} filtered - The filtered list of programs based on the user's criteria.
   */
  const handleFilterChange = (filtered) => {
    setFilteredPrograms(filtered);
  };

  return (
    <div className="homepage-container flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow w-full px-4 py-6">
        <section className="programs-section w-full">
          <ProgramFilter programs={programs} onFilter={handleFilterChange} />
          <ProgramList programs={filteredPrograms} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
