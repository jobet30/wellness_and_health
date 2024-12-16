/**
 * @author:
 * Jobet P. Casquejo
 * @description:
 * Highlights component for the "Children" program.
 * Date: 2024-12-15
 * @version: 1.0.0
 * @license: MIT
 */

import React from "react";

const ChildrenHighlights = () => {
  const highlights = [
    {
      id: "1",
      title: "Access to Quality Education",
      description:
        "Providing books, supplies, and classrooms for underprivileged children.",
    },
    {
      id: "2",
      title: "Nutrition Programs",
      description:
        "Ensuring children have access to healthy meals for better learning outcomes.",
    },
    {
      id: "3",
      title: "Community Support",
      description:
        "Engaging parents and communities to foster a supportive environment.",
    },
    {
      id: "4",
      title: "Emotional Support",
      description:
        "Providing emotional support and guidance to children in times of need.",
    },
    {
      id: "5",
      title: "Cultural Activities",
      description:
        "Organizing cultural events and activities for children to learn and grow.",
    },
    {
      id: "6",
      title: "Safety Programs",
      description:
        "Implementing safety programs to prevent harm and violence for children.",
    },
  ];

  return (
    <section className="children-highlights w-full mb-12 py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Program Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="highlight-card p-6 bg-white rounded-md shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">{highlight.title}</h3>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChildrenHighlights;
