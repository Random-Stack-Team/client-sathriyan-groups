import { companyDivisions } from "@/lib";

import { ProjectDivisionPage } from "./ProjectDivisionPage";

const projects = [
  {
    name: "Residential Property Development",
    location: "Trichy, Tamil Nadu",
    category: "Residential Properties",
    status: "Upcoming",
    image: "/assets/services/landmark-realty/project-1.jpg",
  },
  {
    name: "Commercial Property Project",
    location: "Tamil Nadu",
    category: "Commercial Properties",
    status: "Ongoing",
    image: "/assets/services/landmark-realty/project-2.jpg",
  },
  {
    name: "Premium Land Development",
    location: "Tamil Nadu",
    category: "Land Development",
    status: "Completed",
    image: "/assets/services/landmark-realty/project-3.jpg",
  },
];

export default function LandmarkRealtyPage() {
  const division = companyDivisions.find(
    (item) => item.slug === "landmark-realty",
  );

  if (!division) {
    return null;
  }

  return (
    <ProjectDivisionPage
      division={division}
      projects={projects}
      intro="A real estate and property services division focused on sales, leasing, investment guidance, and project marketing."
      projectLabel="Realty Projects"
      projectHeading="Property opportunities presented with clarity and market direction."
      ctaText="Planning a property sale, lease, or investment conversation?"
    />
  );
}
