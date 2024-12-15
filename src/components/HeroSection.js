/**
 * @author:
 * Jobet P. Casquejo
 *
 * @description:
 * HeroSection component for the homepage of the website. This section introduces the programs focused on Child Welfare, Education, and Health, provides calls to action for the user to explore, and includes navigation logic.
 *
 * @date: 2023-03-19
 * @version: 1.4
 * @license: MIT
 */

import React from "react";
import { navigate } from "gatsby";

/**
 * HeroSection component for rendering the main hero content on the homepage.
 * This section includes a unique background color, additional content such as testimonials, statistics, and actionable buttons with navigation.
 *
 * @returns {JSX.Element} The hero section of the homepage.
 */
const HeroSection = () => {
  /**
   * Navigates to the "Learn More" page.
   */
  const handleLearnMore = () => {
    navigate("/learn-more");
  };

  /**
   * Navigates to the "Get Started" page.
   */
  const handleGetStarted = () => {
    navigate("/get-started");
  };

  /**
   * Navigates to the "Get Your Plan" page.
   */
  const handleGetYourPlan = () => {
    navigate("/get-your-plan");
  };

  return (
    <section
      className="homepage-hero w-full text-center mb-12 relative"
      style={{
        paddingTop: "100px",
        backgroundColor: "#ffffff",
        color: "#333",
      }}
    >
      <div className="hero-content relative z-10 text-black px-4 py-12">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Welcome to Nurture Future Foundation
        </h1>

        <p className="text-lg mb-6 max-w-2xl mx-auto">
          We are dedicated to improving the lives of children by focusing on
          education, health, and overall well-being. Our programs aim to empower
          children and their families through quality education, health support,
          and welfare initiatives. Join us in making a difference today.
        </p>

        <div className="intro-actions flex justify-center space-x-4">
          <button
            onClick={handleLearnMore}
            className="bg-blue-500 text-white px-8 py-4 rounded-md text-lg font-semibold"
          >
            Learn More
          </button>
          <button
            onClick={handleGetStarted}
            className="bg-green-500 text-white px-8 py-4 rounded-md text-lg font-semibold"
          >
            Get Started
          </button>
        </div>

        <div className="additional-cta mt-8">
          <p className="text-xl mb-4">
            Looking for personalized programs to support children's welfare?
          </p>
          <button
            onClick={handleGetYourPlan}
            className="bg-yellow-500 text-white px-8 py-4 rounded-md text-lg font-semibold"
          >
            Get Your Plan
          </button>
        </div>

        <div className="extra-content mt-12">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="text-lg list-disc list-inside max-w-2xl mx-auto">
            <li>Comprehensive child welfare and educational programs.</li>
            <li>
              Health support initiatives to ensure children’s physical and
              mental well-being.
            </li>
            <li>
              Holistic approach to nurturing and supporting children’s growth
              and development.
            </li>
          </ul>

          <div className="stats mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="stat bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold">15,000+</h3>
              <p className="text-lg">Children Benefited</p>
            </div>
            <div className="stat bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold">90%</h3>
              <p className="text-lg">Improvement in Health and Education</p>
            </div>
            <div className="stat bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold">100+</h3>
              <p className="text-lg">Dedicated Staff and Volunteers</p>
            </div>
          </div>

          <div className="testimonials mt-12">
            <h2 className="text-3xl font-semibold mb-6">
              What Our Beneficiaries Say
            </h2>
            <blockquote className="text-lg italic max-w-2xl mx-auto">
              "The support I received through these programs changed my life. I
              now have the education and resources to build a better future for
              my children."
              <span className="block text-right font-bold mt-4">
                - Maria S.
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
