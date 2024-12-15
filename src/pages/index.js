/**
 * @author: Jobet P. Casquejo
 * @description: IndexPage component that serves as the homepage of the wellness site.
 * It handles rendering the header, footer, and additional homepage content.
 * Date: 2024-12-15
 * @version: 1.0.0
 * @license: MIT
 */
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

/**
 * IndexPage component that serves as the homepage of the wellness site.
 * It renders the header, footer, and several sections of content for the homepage.
 *
 * @component
 * @example
 * return (
 *   <IndexPage />
 * )
 *
 * @returns {JSX.Element} The layout of the homepage, including header, footer, and content sections.
 */
const IndexPage = () => {
  return (
    <div className="homepage-container flex flex-col min-h-screen">
      <Helmet>
        <title>Wellness Programs | Home</title>
        <meta
          name="description"
          content="Browse through our wide range of wellness programs including Yoga, Nutrition, Mental Health, and more."
        />
      </Helmet>

      <Header />
      <main className="flex-grow w-full px-4 py-6">
        <HeroSection />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
