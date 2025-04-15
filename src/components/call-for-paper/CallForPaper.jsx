import React, { useEffect } from "react";
import Hero from "./Hero";

const CallForPaper = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      {/* Add other sections here */}
    </main>
  );
};

export default CallForPaper;
