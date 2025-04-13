import React from "react";
import Hero from "./Hero";
import WelcomeSection from "./WelcomeSection";
import ObjectivesSection from "./ObjectivesSection";

const AboutConference = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <WelcomeSection />
      <ObjectivesSection />
    </main>
  );
};

export default AboutConference;
