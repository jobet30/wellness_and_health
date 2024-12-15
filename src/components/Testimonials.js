/**
 * @author: Jobet P. Casquejo
 * @description: Component to show the Testimonials section of the homepage.
 * It displays feedback from clients regarding the child welfare, education, and health programs.
 * Each testimonial highlights different aspects of the programs and their impact on children and families.
 * Date: 2024-12-15
 * @version: 1.0.0
 * @license: MIT
 */
import React from "react";

/**
 * Testimonials component displays feedback from clients regarding the child welfare, education, and health programs.
 * Each testimonial highlights different aspects of the programs and their impact on children and families.
 *
 * @component
 * @example
 * return (
 *   <Testimonials />
 * )
 */
const Testimonials = () => {
  return (
    <section className="testimonials w-full mb-12 py-16 bg-gradient-to-r from-purple-300 to-blue-300">
      {/* Section Header */}
      <h2 className="text-3xl font-semibold text-center text-white mb-8">
        What Our Clients Say
      </h2>

      {/* Testimonial Carousel Container */}
      <div className="testimonials-carousel flex justify-center space-x-8 flex-wrap">
        {/* Testimonial 1: Child-Centered Care */}
        <div className="testimonial-card bg-white p-6 rounded-md w-80 shadow-md mb-6">
          <p className="text-base italic mb-4">
            "This program has been life-changing for my child. The personalized
            care and attention they receive are unlike any other program we've
            experienced. They are thriving both emotionally and academically!"
          </p>
          <p className="font-semibold">- Jennifer P.</p>
          <p className="text-sm text-gray-500">
            Parent of a 7-year-old student
          </p>
        </div>

        {/* Testimonial 2: Focus on Education */}
        <div className="testimonial-card bg-white p-6 rounded-md w-80 shadow-md mb-6">
          <p className="text-base italic mb-4">
            "The educational support has made a huge difference in my child's
            academic success. They are more confident in their studies and enjoy
            learning in ways I never thought possible. Their teachers are
            attentive and genuinely care about their development."
          </p>
          <p className="font-semibold">- Mark T.</p>
          <p className="text-sm text-gray-500">
            Parent of an 8-year-old student
          </p>
        </div>

        {/* Testimonial 3: Holistic Health Approach */}
        <div className="testimonial-card bg-white p-6 rounded-md w-80 shadow-md mb-6">
          <p className="text-base italic mb-4">
            "I am so grateful for the holistic health approach. It’s not just
            about physical health but mental and emotional well-being as well.
            My child now has a better understanding of their own needs and is
            much more resilient. The counseling services have been especially
            helpful."
          </p>
          <p className="font-semibold">- Claire S.</p>
          <p className="text-sm text-gray-500">
            Parent of a 9-year-old with mental health support needs
          </p>
        </div>

        {/* Testimonial 4: Community Engagement */}
        <div className="testimonial-card bg-white p-6 rounded-md w-80 shadow-md mb-6">
          <p className="text-base italic mb-4">
            "The community workshops and family engagement have been incredible.
            We feel more connected as a family and are better equipped to
            support our child's growth together. The program encourages open
            discussions, and we are able to build stronger family bonds."
          </p>
          <p className="font-semibold">- David and Maria H.</p>
          <p className="text-sm text-gray-500">
            Parents of twins, ages 5 and 6
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
