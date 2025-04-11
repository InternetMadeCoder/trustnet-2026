import { HeroSection } from "./HeroSection";
import { DatesSection } from "./DatesSection";
import { AboutSection } from "./AboutSection";
import { KeynoteSpeakers } from "./KeynoteSpeakers";
import { SDGSection } from "./SDGSection";
import { LocationSection } from "./LocationSection";
import { AboutJaipur } from "./AboutJaipur";
import { FAQSection } from "./FAQSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToLocation) {
      const element = document.getElementById("location");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Clear the state after scrolling
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);

  return (
    <main>
      <HeroSection />
      <DatesSection />
      <AboutSection />
      <KeynoteSpeakers />
      <SDGSection />
      <LocationSection />
      <AboutJaipur />
      <FAQSection />
    </main>
  );
}
