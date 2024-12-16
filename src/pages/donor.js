/**
 * @author: Jobet P. Casquejo
 * @description: Donor Page which displays the Donor and Highlights
 * Date: 2024-12-15
 * @version: 1.0.0
 * @license: MIT
 */

import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import ContributionHighlights from "../components/ContributionHighlights";
import DonorTestimonials from "../components/DonorTestimonials";

/**
 * DonorPage component that showcases donor contributions, donor recognition, and testimonials.
 * This page highlights the contributions made by donors and shares their impact on the organization.
 *
 * @returns {JSX.Element} The complete donor page.
 */
const DonorPage = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchDonors = () => {
      const newDonors = [
        {
          id: "1",
          name: "John Doe",
          description:
            "John has been an active supporter of education and health initiatives for over 10 years.",
        },
        {
          id: "2",
          name: "Jane Smith",
          description:
            "Jane has helped fund scholarships for underprivileged students in remote areas.",
        },
        {
          id: "3",
          name: "Mark Johnson",
          description:
            "Mark's contribution has been pivotal in the development of community health projects.",
        },
        {
          id: "4",
          name: "Emily Taylor",
          description:
            "Emily has been a passionate advocate for environmental sustainability and wildlife preservation.",
        },
        {
          id: "5",
          name: "David Lee",
          description:
            "David has been instrumental in supporting the development of rural healthcare initiatives.",
        },
        {
          id: "6",
          name: "Sarah Wilson",
          description:
            "Sarah has been instrumental in supporting the development of community education initiatives.",
        },
      ];

      setDonors(newDonors);
    };

    fetchDonors();
  }, []);

  return (
    <Layout>
      <section className="donor-intro w-full mb-12 py-16 bg-gradient-to-r from-purple-300 to-indigo-400">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Our Valued Donors</h1>
          <p className="text-xl">
            Your generous contributions make a significant impact on child
            welfare, education, and health.
          </p>
        </div>
      </section>

      <section className="donor-recognition w-full mb-12 py-16 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Donor Recognition
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {donors.map((donor) => (
            <div
              key={donor.id}
              className="donor-card text-center p-6 bg-gray-200 rounded-md shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">{donor.name}</h3>
              <p className="text-base">{donor.description}</p>
            </div>
          ))}
        </div>
      </section>

      <ContributionHighlights />

      <DonorTestimonials />

      <section className="call-to-action w-full py-16 text-center bg-indigo-600 text-white">
        <h2 className="text-3xl font-semibold mb-4">Become a Donor Today</h2>
        <p className="text-lg mb-8">
          Join us in making a difference. Your support can change lives.
          Together, we can help create a brighter future for children, families,
          and communities.
        </p>
        <a
          href="/donate"
          className="bg-yellow-500 px-8 py-3 rounded-full text-xl"
        >
          Donate Now
        </a>
      </section>
    </Layout>
  );
};

export default DonorPage;
