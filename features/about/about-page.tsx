import { Header } from "@/components/site/header";

import { AboutHero } from "./components/about-hero";
import { MissionVision } from "./components/mission-vision";
import { AboutStats } from "./components/about-stats";
import { AboutCTA } from "./components/about-cta";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function AboutPage() {
  return (
    <main className="bg-brand-surface text-brand-ink min-h-screen">
      <Header navItems={navItems} />

      <AboutHero />
      <MissionVision />
      <AboutStats />
      <AboutCTA />
    </main>
  );
}