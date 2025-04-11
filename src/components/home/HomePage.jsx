import { HeroSection } from "./HeroSection";
import { DatesSection } from "./DatesSection";
import { AboutSection } from "./AboutSection";
import { KeynoteSpeakers } from "./KeynoteSpeakers";
import { SDGSection } from "./SDGSection";
import { LocationSection } from "./LocationSection";
import { AboutJaipur } from "./AboutJaipur";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <DatesSection />
      <AboutSection />
      <KeynoteSpeakers />
      <SDGSection />
      <LocationSection />
      <AboutJaipur />
    </main>
  );
}
