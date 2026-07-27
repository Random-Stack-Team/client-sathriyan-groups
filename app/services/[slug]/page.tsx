import { notFound } from "next/navigation";

import { companyDivisions } from "@/lib";

import SathriyanBuildersPage from "./SathriyanBuildersPage";
import LandmarkRealtyPage from "./LandmarkRealtyPage";
import NexgenEventsPage from "./NexgenEventsPage";
import { ProjectDivisionPage } from "./ProjectDivisionPage";

const availableSlugs = companyDivisions.map((division) => division.slug);

export function generateStaticParams() {
  return availableSlugs.map((slug) => ({ slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  switch (slug) {
    case "sathriyan-builders":
      return <SathriyanBuildersPage />;

    case "landmark-realty":
      return <LandmarkRealtyPage />;

    case "nexgen-events":
      return <NexgenEventsPage />;

    default: {
      const division = companyDivisions.find((item) => item.slug === slug);

      if (!division) {
        notFound();
      }

      const projects = [
        {
          name: `${division.name} Project`,
          location: "Tamil Nadu",
          category: division.sector,
          status: "Upcoming",
          image: division.image,
        },
        {
          name: `${division.name} Initiative`,
          location: "Tamil Nadu",
          category: division.services[0] ?? division.sector,
          status: "Ongoing",
          image: division.image,
        },
        {
          name: `${division.name} Showcase`,
          location: "Tamil Nadu",
          category: division.services[1] ?? division.sector,
          status: "Planned",
          image: division.image,
        },
      ];

      return (
        <ProjectDivisionPage
          division={division}
          projects={projects}
          intro={division.summary}
          projectLabel="Division Projects"
          projectHeading="Work shaped around focused business goals."
          ctaText={`Want to discuss ${division.name}?`}
        />
      );
    }
  }
}
