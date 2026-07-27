import { companyDivisions } from "@/lib";

import { ProjectDivisionPage } from "./ProjectDivisionPage";

const projects = [
  {
    name: "Corporate Event",
    location: "Trichy, Tamil Nadu",
    category: "Corporate Events",
    status: "Upcoming",
    image: "/assets/services/nexgen-events/project-1.jpg",
  },
  {
    name: "Brand Experience",
    location: "Tamil Nadu",
    category: "Brand Events",
    status: "Ongoing",
    image: "/assets/services/nexgen-events/project-2.jpg",
  },
  {
    name: "Grand Celebration",
    location: "Tamil Nadu",
    category: "Private Celebrations",
    status: "Completed",
    image: "/assets/services/nexgen-events/project-3.jpg",
  },
];

export default function NexgenEventsPage() {
  const division = companyDivisions.find((item) => item.slug === "nexgen-events");

  if (!division) {
    return null;
  }

  return (
    <ProjectDivisionPage
      division={division}
      projects={projects}
      intro="An event management division focused on corporate events, exhibitions, launches, celebrations, and brand experiences."
      projectLabel="Event Projects"
      projectHeading="Experiences planned to move people, brands, and audiences."
      ctaText="Planning an event or brand experience?"
    />
  );
}
