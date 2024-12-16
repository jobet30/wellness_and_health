import React from "react";

const CallToAction = () => (
  <section className="call-to-action w-full py-16 text-center bg-indigo-600 text-white">
    <h2 className="text-3xl font-semibold mb-4">Join Us to Empower Children</h2>
    <p className="text-lg mb-8">
      Help us provide better opportunities for children through education and
      community support.
    </p>
    <a
      href="/donate"
      className="bg-yellow-500 px-8 py-3 rounded-full text-xl hover:bg-yellow-400"
    >
      Support Our Mission
    </a>
  </section>
);

export default CallToAction;
