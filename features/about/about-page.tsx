import { AboutHero } from "./components/about-hero";
import { SectorsSection } from "./components/sectors-section";
import { MissionVision } from "./components/mission-vision";
import {AboutStats} from "./components/about-stats";
import {AboutCTA} from "./components/about-cta";

export function AboutPage() {
  return (
    <main>
      <AboutHero />
      <SectorsSection />
        <MissionVision />
        <AboutStats />
        <AboutCTA />
    </main>
  );
}