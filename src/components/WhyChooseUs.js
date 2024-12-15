/**
 * @author: Jobet P. Casquejo
 * @description: Component displaying the Why Choose Us section of the homepage.
 * This section highlights the key features of the child welfare, education, and health programs.
 * Date: 2024-12-15
 * @version: 1.0.0
 * @license: MIT
 */
import React from "react";

/**
 * WhyChooseUs component to showcase the key features of the child welfare, education, and health programs.
 * This section highlights the reasons why clients should choose the programs offered.
 *
 * @component
 * @example
 * return (
 *   <WhyChooseUs />
 * )
 */
const WhyChooseUs = () => {
  return (
    <section className="why-choose-us w-full mb-12 py-16 bg-gradient-to-r from-blue-300 to-green-300">
      {/* Section Header */}
      <h2 className="text-3xl font-semibold text-center text-white mb-8">
        Why Choose Us?
      </h2>

      {/* Features Grid Container */}
      <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature Card 1: Child-Centered Care */}
        <div className="feature-card text-center p-6 bg-white rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-4">Child-Centered Care</h3>
          <p>
            Our programs are built with the child at the heart of everything we
            do. We focus on ensuring each child receives personalized care that
            meets their specific needs, whether it's emotional, physical, or
            social. With a dedicated team of professionals, we ensure a safe and
            supportive environment for every child to thrive and develop their
            full potential.
          </p>
        </div>

        {/* Feature Card 2: Focus on Education */}
        <div className="feature-card text-center p-6 bg-white rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-4">Focus on Education</h3>
          <p>
            Education is a key pillar in shaping a child's future. We offer
            innovative and interactive learning programs that cater to a diverse
            range of needs, from early childhood education to supplemental
            academic support. Our educators work closely with each child to
            create customized learning experiences that inspire curiosity and
            drive academic success.
          </p>
        </div>

        {/* Feature Card 3: Holistic Health Approach */}
        <div className="feature-card text-center p-6 bg-white rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            Holistic Health Approach
          </h3>
          <p>
            We understand that a child's well-being goes beyond just physical
            health. Our holistic health approach focuses on nurturing mental,
            physical, and emotional health, ensuring that children grow into
            well-rounded individuals. We offer counseling, nutritional support,
            and fitness programs designed to promote a balanced lifestyle,
            helping children build resilience and emotional intelligence.
          </p>
        </div>

        {/* Feature Card 4: Community Engagement */}
        <div className="feature-card text-center p-6 bg-white rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-4">Community Engagement</h3>
          <p>
            Our work extends beyond just the child, involving families and
            communities to ensure a nurturing environment for growth. We
            regularly organize community events, workshops, and awareness
            campaigns to raise understanding of child welfare issues and
            encourage active participation in improving children's lives.
          </p>
        </div>

        {/* Feature Card 5: Expert Guidance */}
        <div className="feature-card text-center p-6 bg-white rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
          <p>
            Our team consists of highly skilled professionals including
            educators, healthcare providers, counselors, and child welfare
            specialists. With years of experience, they provide expert guidance
            to families and communities on how to best support the growth and
            development of children. We ensure that every child has access to
            the resources and expertise they need to succeed.
          </p>
        </div>

        {/* Feature Card 6: Inclusive Programs */}
        <div className="feature-card text-center p-6 bg-white rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-4">Inclusive Programs</h3>
          <p>
            We believe that every child deserves the opportunity to succeed,
            regardless of their background or circumstances. Our programs are
            designed to be inclusive and adaptable, ensuring that children with
            diverse abilities, needs, and challenges can participate fully. We
            work to break down barriers to education and well-being, providing
            opportunities for all children to learn, grow, and thrive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
