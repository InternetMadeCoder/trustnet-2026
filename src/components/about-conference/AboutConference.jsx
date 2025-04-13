import React, { useEffect } from "react";
import Hero from "./Hero";
import WelcomeSection from "./WelcomeSection";
import ObjectivesSection from "./ObjectivesSection";
import { KeynoteSpeakers } from "../home/KeynoteSpeakers";

const AboutConference = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <WelcomeSection />
      <ObjectivesSection />
      <div className="bg-white">
        <KeynoteSpeakers />
      </div>
    </main>
  );
};

export default AboutConference;
