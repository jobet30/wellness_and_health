/**
 * @author:
 * Jobet P. Casquejo
 * @description:
 * ProgramHighlights component to display key achievements or milestones of the organization's programs.
 * Date: 2024-12-15
 * @version: 1.0.0
 * @license: MIT
 */

import React from "react";

/**
 * ProgramHighlights component to showcase program achievements and milestones.
 *
 * @returns {JSX.Element} The ProgramHighlights component.
 */
const ProgramHighlights = () => {
  const highlights = [
    {
      id: "1",
      title: "10,000 Students Educated",
      description:
        "Provided quality education to 10,000 children across 15 regions.",
    },
    {
      id: "2",
      title: "500 Clinics Established",
      description:
        "Built 500 community clinics offering free healthcare services.",
    },
    {
      id: "3",
      title: "1 Million Trees Planted",
      description:
        "Promoted reforestation with 1 million trees planted globally.",
    },
    {
      id: "4",
      title: "1,000 Youth Leaders Empowered",
      description:
        "Developed leadership skills in young individuals to create change.",
    },
  ];

  return (
    <section className="program-highlights w-full mb-12 py-16 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Program Highlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((highlight) => (
          <div
            key={highlight.id}
            className="highlight-card text-center p-6 bg-white rounded-md shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">{highlight.title}</h3>
            <p className="text-base">{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramHighlights;
