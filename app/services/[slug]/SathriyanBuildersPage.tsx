import { companyDivisions } from "@/lib";

import { ProjectDivisionPage } from "./ProjectDivisionPage";

const projects = [
  {
    name: "Residential Development",
    location: "Trichy, Tamil Nadu",
    category: "Residential Construction",
    status: "Upcoming",
    image: "/assets/services/sathriyan-builders/project-1.jpg",
  },
  {
    name: "Commercial Development",
    location: "Tamil Nadu",
    category: "Commercial Projects",
    status: "Ongoing",
    image: "/assets/services/sathriyan-builders/project-2.jpg",
  },
  {
    name: "Infrastructure Project",
    location: "Tamil Nadu",
    category: "Infrastructure Projects",
    status: "Completed",
    image: "/assets/services/sathriyan-builders/project-3.jpg",
  },
];

export default function SathriyanBuildersPage() {
  const division = companyDivisions.find(
    (item) => item.slug === "sathriyan-builders",
  );

  if (!division) {
    return null;
  }

  return (
    <ProjectDivisionPage
      division={division}
      projects={projects}
      intro="A construction and real estate division focused on residential, commercial, infrastructure, and urban planning projects."
      projectLabel="Builder Projects"
      projectHeading="Developments planned, built, and shaped for long-term value."
      ctaText="Have a construction or development project in mind?"
    />
  );
}
