import type { Metadata } from "next";
import { AboutPage } from "@/features/about/about-page";

export const metadata: Metadata = {
  title: "About Us — Sathriyan Group",
  description:
    "Learn about Sathriyan Group — a diversified business group with ventures in construction, real estate, branding, events, consultancy, international trade, and food & hospitality.",
};

export default function About() {
  return <AboutPage />;
}