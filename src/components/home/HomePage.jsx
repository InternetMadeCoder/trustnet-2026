import { HeroSection } from "./HeroSection";
import { DatesSection } from "./DatesSection";
import { AboutSection } from "./AboutSection";
import { KeynoteSpeakers } from "./KeynoteSpeakers";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <DatesSection />
      <AboutSection />
      <KeynoteSpeakers />
      {/* Add other sections here as needed */}
    </main>
  );
}
