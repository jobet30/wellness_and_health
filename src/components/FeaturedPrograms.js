// src/components/FeaturedPrograms.js
import React from "react";

const FeaturedPrograms = () => {
  return (
    <section className="featured-programs w-full mb-12">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Featured Programs
      </h2>
      <div className="programs-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="program-card bg-gray-200 p-6 rounded-md">
          <h3 className="text-xl font-semibold mb-4">Yoga for Beginners</h3>
          <p className="text-base">
            A comprehensive beginner's guide to yoga to help you start your
            journey towards a healthier lifestyle.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
            Learn More
          </button>
        </div>
        <div className="program-card bg-gray-200 p-6 rounded-md">
          <h3 className="text-xl font-semibold mb-4">Nutrition Coaching</h3>
          <p className="text-base">
            Personalized nutrition plans and coaching to help you eat healthier
            and feel your best.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
            Learn More
          </button>
        </div>
        <div className="program-card bg-gray-200 p-6 rounded-md">
          <h3 className="text-xl font-semibold mb-4">Mental Health Support</h3>
          <p className="text-base">
            Guided programs focused on improving mental well-being through
            stress management, meditation, and mindfulness.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
