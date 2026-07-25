import { notFound } from "next/navigation";

import SathriyanBuildersPage from "./SathriyanBuildersPage";
import LandmarkRealtyPage from "./LandmarkRealtyPage";
import NexgenEventsPage from "./NexgenEventsPage";

const availableSlugs = [
  "sathriyan-builders",
  "landmark-realty",
  "nexgen-events",
];

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

    default:
      notFound();
  }
}