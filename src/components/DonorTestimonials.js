/**
 * @author: Jobet P. Casquejo
 * @description: Displays testimonials from donors, showcasing their feedback and impact.
 * Date: 2024-12-15
 * @version: 1.0.0
 * @license: MIT
 */

import React, { useState, useEffect } from "react";
import JohnDoe from "../images/john-doe.jpg";
import JaneSmith from "../images/jane-smith.jpg";
import MarkJohnson from "../images/mark-johnson.jpg";
import EmilyTaylor from "../images/emily-taylor.jpg";
import DavidLee from "../images/david-lee.jpg";
import SarahWilson from "../images/sarah-wilson.jpg";

/**
 * DonorTestimonials component to display feedback and testimonials from donors.
 * These testimonials highlight the donor experience and impact of their contributions.
 *
 * @returns {JSX.Element} The donor testimonials section of the page.
 */
const DonorTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = () => {
      const fetchedTestimonials = [
        {
          id: "1",
          name: "John Doe",
          testimonial:
            "It’s been incredibly rewarding to contribute to education initiatives. Seeing the children’s lives transform through the opportunities provided has been the highlight of my philanthropic journey.",
          image: JohnDoe,
        },
        {
          id: "2",
          name: "Jane Smith",
          testimonial:
            "I’ve always believed in the power of education, and through my donations, I’ve been able to directly support scholarships for deserving students in remote areas.",
          image: JaneSmith,
        },
        {
          id: "3",
          name: "Mark Johnson",
          testimonial:
            "Supporting healthcare initiatives for senior citizens has been a fulfilling experience. Knowing that I’m making a difference in the lives of the elderly gives me a great sense of purpose.",
          image: MarkJohnson,
        },
        {
          id: "4",
          name: "Emily Taylor",
          testimonial:
            "My contributions towards environmental sustainability have been a journey of growth. I’m proud to support the preservation of wildlife and the protection of our planet.",
          image: EmilyTaylor,
        },
        {
          id: "5",
          name: "David Lee",
          testimonial:
            "I’ve been a passionate supporter of community health initiatives. Seeing the positive impact of my donations on the lives of those in need has been a privilege.",
          image: DavidLee,
        },
        {
          id: "6",
          name: "Sarah Wilson",
          testimonial:
            "I’ve been a lifelong supporter of education initiatives. Seeing the positive impact of my donations on the lives of students has been a privilege.",
          image: SarahWilson,
        },
      ];

      setTestimonials(fetchedTestimonials);
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="donor-testimonials-container w-full py-16 bg-white">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        What Our Donors Say
      </h2>

      <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="testimonial-card p-6 bg-gray-100 rounded-md shadow-md"
          >
            <div className="testimonial-header flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>
            </div>
            <p className="text-base text-gray-600 italic">
              "{testimonial.testimonial}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorTestimonials;
