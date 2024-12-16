/**
 * @author:
 * Jobet P. Casquejo
 * @description:
 * Page for the "Children" program.
 * Date: 2024-12-15
 * @version: 1.0.0
 * @license: MIT
 */

import React from "react";
import Layout from "../components/Layout";
import ChildrenHighlights from "../components/ChildrenHighlights";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

const ChildrenPage = () => (
  <Layout>
    <section className="children-intro w-full py-16 bg-gradient-to-r from-teal-300 to-green-400">
      <div className="container mx-auto text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          Empowering Children for a Brighter Future
        </h1>
        <p className="text-xl">
          Learn how we’re transforming lives through education, nutrition, and
          community programs.
        </p>
      </div>
    </section>

    <ChildrenHighlights />

    <Testimonials />

    <CallToAction />
  </Layout>
);

export default ChildrenPage;
