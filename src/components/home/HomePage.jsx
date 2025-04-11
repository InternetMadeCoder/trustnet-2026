import { HeroSection } from "./HeroSection";
import { DatesSection } from "./DatesSection";
import { AboutSection } from "./AboutSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <DatesSection />
      <AboutSection />
      {/* Add other sections here as needed */}
    </main>
  );
}
