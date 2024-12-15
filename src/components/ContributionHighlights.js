/**
 * @author:
 * @description: ContributionHighlights component to display key contributions made by donors.
 * It dynamically fetches the highlights from a local JSON file at runtime.
 * Date: 2024-12-15
 * @version: 1.0.0
 * @license: MIT
 */

import React, { useState, useEffect } from "react";

/**
 * ContributionHighlights component to display key contributions made by donors.
 * It dynamically fetches the highlights from a local JSON file at runtime.
 *
 * @returns {JSX.Element} The contribution highlights section of the page.
 */
const ContributionHighlights = () => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const fetchContributions = () => {
      const newContributions = [
        {
          id: "1",
          title: "Education Fund for Rural Children",
          description:
            "Contributed towards the education of 100 children in rural areas, providing necessary school supplies and resources.",
          amount: 5000,
          date: "2024-01-15",
        },
        {
          id: "2",
          title: "Health Initiative for Senior Citizens",
          description:
            "Funded healthcare initiatives that provide free medical check-ups and health treatments for elderly individuals.",
          amount: 3000,
          date: "2024-03-22",
        },
        {
          id: "3",
          title: "Emergency Relief for Natural Disaster Victims",
          description:
            "Provided immediate relief including food, shelter, and medical care to victims of a major earthquake.",
          amount: 8000,
          date: "2024-05-10",
        },
        {
          id: "4",
          title: "Building Sustainable Water Systems",
          description:
            "Helped construct sustainable water filtration systems in underdeveloped communities to ensure access to clean drinking water.",
          amount: 12000,
          date: "2024-07-04",
        },
        {
          id: "5",
          title: "Childrens Education Initiatives",
          description:
            "Funded educational initiatives for children in remote areas, providing access to quality education and resources.",
          amount: 15000,
          date: "2024-09-18",
        },
        {
          id: "6",
          title: "Community Development Program",
          description:
            "Funded a community development program that provides educational opportunities, mentorship, and community outreach to underprivileged individuals.",
          amount: 20000,
          date: "2024-11-02",
        },
      ];

      setContributions(newContributions);
    };

    fetchContributions();
  }, []);

  return (
    <section className="contribution-highlights w-full mb-12 py-16 bg-gradient-to-r from-blue-300 to-green-300">
      <h2 className="text-3xl font-semibold text-center text-white mb-8">
        Contribution Highlights
      </h2>

      {/* Display contribution cards dynamically */}
      <div className="contributions-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contributions.map((contribution) => (
          <div
            key={contribution.id}
            className="contribution-card p-6 bg-white rounded-md shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">{contribution.title}</h3>
            <p className="text-base mb-4">{contribution.description}</p>
            <p className="text-lg font-semibold">
              Amount: ${contribution.amount}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              {new Date(contribution.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContributionHighlights;
