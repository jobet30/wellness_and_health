/**
 * @author:
 * Jobet P. Casquejo
 * @description:
 * Programs Page that displays organization programs, highlights, and testimonials.
 * Date: 2024-12-15
 * @version: 1.1.0
 * @license: MIT
 */

import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import ProgramHighlights from "../components/ProgramHighlights";
import Testimonials from "../components/Testimonials";
import Education from "../images/education.jpg";
import Health from "../images/health.jpg";
import Environment from "../images/environmental.jpg";
import Youth from "../images/youth.jpg";
import ChildWelfare from "../images/child-welfare.jpg";
import DisasterRelief from "../images/disaster-relief.jpg";

/**
 * ProgramsPage component to showcase the organization's programs, highlights, and testimonials.
 *
 * @returns {JSX.Element} The ProgramsPage component.
 */
const ProgramsPage = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = () => {
      const newPrograms = [
        {
          id: "1",
          name: "Education for All",
          description:
            "Providing quality education for underprivileged children.",
          image: Education,
        },
        {
          id: "2",
          name: "Community Health",
          description: "Improving access to healthcare in rural areas.",
          image: Health,
        },
        {
          id: "3",
          name: "Environmental Sustainability",
          description: "Promoting clean energy and reforestation initiatives.",
          image: Environment,
        },
        {
          id: "4",
          name: "Youth Empowerment",
          description:
            "Skill-building and mentorship programs for young leaders.",
          image: Youth,
        },
        {
          id: "5",
          name: "Child Welfare",
          description: "Supporting and advocating for children in need.",
          image: ChildWelfare,
        },
        {
          id: "6",
          name: "Disaster Relief",
          description:
            "Providing aid and support during disasters and emergencies.",
          image: DisasterRelief,
        },
      ];

      setPrograms(newPrograms);
    };

    fetchPrograms();
  }, []);

  return (
    <Layout>
      {/* Intro Section */}
      <section className="programs-intro w-full mb-12 py-16 bg-gradient-to-r from-teal-300 to-green-400">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl">
            Explore our impactful programs that drive positive change in
            communities worldwide.
          </p>
        </div>
      </section>

      {/* Programs List Section */}
      <section className="programs-list w-full mb-12 py-16 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
          {programs.map((program) => (
            <div
              key={program.id}
              className="program-card p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={program.image}
                alt={program.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-4">{program.name}</h3>
              <p className="text-base text-gray-700">{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="program-highlights w-full mb-12 py-16 bg-gray-100">
        <ProgramHighlights />
      </section>

      {/* Testimonials Section */}
      <section className="programs-testimonials w-full mb-12 py-16 bg-gradient-to-r from-blue-300 to-indigo-400">
        <Testimonials />
      </section>

      {/* Call-to-Action Section */}
      <section className="call-to-action w-full py-16 text-center bg-indigo-600 text-white">
        <h2 className="text-3xl font-semibold mb-4">Get Involved Today</h2>
        <p className="text-lg mb-8">
          Join us in creating a better future. Your support can help expand our
          reach and impact.
        </p>
        <a
          href="/donate"
          className="bg-yellow-500 px-8 py-3 rounded-full text-xl font-semibold hover:bg-yellow-600 transition duration-300"
        >
          Support Our Programs
        </a>
      </section>
    </Layout>
  );
};

export default ProgramsPage;
