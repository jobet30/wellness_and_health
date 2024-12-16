/**
 * @author:
 * Jobet P. Casquejo
 * @description:
 * Component to display testimonials about the programs.
 * Date: 2024-12-15
 * @version: 1.0.0
 * @license: MIT
 */

import React, { useState, useEffect } from "react";

/**
 * WhatPeopleSay component to showcase testimonials about the programs.
 *
 * @returns {JSX.Element} The WhatPeopleSay component.
 */
const WhatPeopleSay = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = () => {
      // Example testimonials data
      const sampleTestimonials = [
        {
          id: "1",
          name: "Alice Johnson",
          role: "Program Beneficiary",
          quote:
            "The education program opened doors I never thought possible. It truly transformed my life.",
        },
        {
          id: "2",
          name: "Michael Brown",
          role: "Community Volunteer",
          quote:
            "Participating in the health program was a rewarding experience. The impact we made was extraordinary.",
        },
        {
          id: "3",
          name: "Sophie Williams",
          role: "Environment Advocate",
          quote:
            "The environmental initiatives have inspired our community to take action and protect our planet.",
        },
        {
          id: "4",
          name: "Emily Davis",
          role: "Child Welfare Specialist",
          quote:
            "The child welfare program has helped me understand the importance of supporting children in need.",
        },
      ];

      setTestimonials(sampleTestimonials);
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="what-people-say w-full mb-12 py-16 bg-blue-100">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
        What People Say About Our Programs
      </h2>
      <div className="testimonials grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="testimonial-card text-center p-6 bg-white rounded-md shadow-md"
          >
            <p className="italic mb-4 text-gray-700">"{testimonial.quote}"</p>
            <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatPeopleSay;
