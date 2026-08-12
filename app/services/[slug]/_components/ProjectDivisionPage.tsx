"use client";

import {
  ArrowLeft,
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import type { CompanyDivision } from "@/lib";
import { Reveal } from "@/components/motion/reveal";

type ProjectItem = {
  name: string;
  location: string;
  category: string;
  status: string;
  image: string;
};

type ProjectDivisionPageProps = {
  division: CompanyDivision;
  projects: ProjectItem[];
  intro: string;
  projectLabel: string;
  projectHeading: string;
  ctaText: string;
};

function StatusPill({
  status,
  isActive,
  variant = "card",
}: {
  status: string;
  isActive: boolean;
  variant?: "card" | "modal";
}) {
  const base =
    "inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] uppercase rounded-full border border-brand-ink/10";
  const variantClass =
    variant === "modal"
      ? "bg-brand-surface text-brand-ink"
      : "bg-white/95 backdrop-blur-md text-brand-ink shadow-sm";

  return (
    <span className={`${base} ${variantClass}`}>
      <span className="relative flex h-2 w-2">
        {isActive ? (
          <>
            <span className="bg-brand-gold absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
            <span className="bg-brand-gold relative inline-flex h-2 w-2 rounded-full" />
          </>
        ) : (
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        )}
      </span>
      {status}
    </span>
  );
}

export function ProjectDivisionPage({
  division,
  projects,
  intro,
  projectLabel,
  projectHeading,
  ctaText,
}: ProjectDivisionPageProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );
  const [activeCategory, setActiveCategory] = useState("All Projects");

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const getContextualStatuses = (sector: string) => {
    const sectorLower = sector.toLowerCase();
    if (sectorLower.includes("construction"))
      return ["Under Construction", "Handed Over", "In Design"];
    if (sectorLower.includes("real estate"))
      return ["Selling Fast", "Sold Out", "Upcoming Phase"];
    if (sectorLower.includes("event"))
      return ["Upcoming", "Concluded", "Booking Open"];
    if (sectorLower.includes("brand"))
      return ["Live", "In Progress", "Delivered"];
    if (sectorLower.includes("trade"))
      return ["Active", "Completed", "Processing"];
    if (sectorLower.includes("advisory") || sectorLower.includes("consulting"))
      return ["Engaged", "Completed", "Initiated"];
    if (sectorLower.includes("food") || sectorLower.includes("hospitality"))
      return ["Operational", "Opening Soon", "Renovating"];
    return ["Ongoing", "Completed", "Planned"];
  };

  const contextualStatuses = getContextualStatuses(division.sector);

  const isActiveStatus = (status: string) => {
    const s = status.toLowerCase();
    return [
      "ongoing",
      "in review",
      "under construction",
      "selling fast",
      "upcoming",
      "live",
      "in progress",
      "active",
      "engaged",
      "operational",
      "opening soon",
      "in design",
      "booking open",
      "processing",
      "initiated",
      "upcoming phase",
    ].includes(s);
  };

  // Guarantee 6 projects minimum
  const expandedProjects = Array.from({ length: 6 }, (_, index) => {
    const baseProject = projects[index % projects.length];
    const contextStatus = contextualStatuses[index % contextualStatuses.length];
    if (index < projects.length)
      return { ...baseProject, status: contextStatus };
    return {
      ...baseProject,
      name: `${baseProject.name} ${index + 1}`,
      status: contextStatus,
    };
  });

  const projectCategories = [
    "All Projects",
    ...Array.from(new Set(expandedProjects.map((project) => project.category))),
  ];

  return (
    <main className="bg-brand-surface text-brand-ink min-h-screen">
      {/* Reduced Hero Section */}
      <section className="bg-brand-ink relative overflow-hidden px-5 pt-28 pb-12 text-white sm:px-6 md:px-12 md:pt-40 md:pb-20 lg:px-20">
        {/* Abstract background element */}
        <div className="bg-brand-gold/5 pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/3 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[var(--container-max)] py-4 md:py-8">
          <Reveal>
            <Link
              href="/services"
              className="group hover:text-brand-gold mb-8 inline-flex items-center gap-3 text-xs tracking-[0.2em] text-white/50 uppercase transition-colors md:mb-12"
            >
              <ArrowLeft
                className="transition-transform duration-300 group-hover:-translate-x-1"
                size={16}
                strokeWidth={1.5}
              />
              Back to services
            </Link>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <Reveal delay={0.1}>
                <p className="text-brand-gold mb-6 text-xs font-bold tracking-[0.25em] uppercase">
                  {division.sector}
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <h1 className="font-display max-w-4xl text-[40px] leading-[1.06] font-bold sm:text-[44px] md:text-[64px] lg:text-[72px]">
                  {division.name}
                </h1>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="font-display border-brand-gold text-brand-gold/90 mt-6 max-w-xl border-l-2 pl-5 text-lg italic md:text-2xl">
                  &ldquo;{division.tagline}&rdquo;
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.4}>
              <p className="max-w-lg text-lg leading-relaxed text-white/70">
                {intro}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-brand-ink px-5 pb-12 sm:px-6 md:px-12 md:pb-20 lg:px-20">
        <div className="bg-brand-ink relative mx-auto aspect-[4/3] max-w-[var(--container-max)] overflow-hidden rounded-sm shadow-2xl md:aspect-[16/7]">
          <Reveal delay={0.5}>
            <Image
              src={division.image}
              alt={division.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 90vw"
              className="object-cover opacity-90"
            />
          </Reveal>
        </div>
      </section>

      {/* Showstopper Expertise & Audiences Section */}
      <section className="bg-brand-ink relative overflow-hidden px-5 py-14 text-white sm:px-6 md:px-12 md:py-24 lg:px-20">
        {/* Abstract dark gold gradient */}
        <div className="bg-brand-gold/10 pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full blur-[120px]" />
        <div className="bg-brand-gold/5 pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/3 rounded-full blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[var(--container-max)]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            {/* Left: Sticky Titles & Audiences */}
            <div className="h-fit lg:sticky lg:top-32">
              <Reveal>
                <h2 className="font-display mb-4 text-[32px] leading-[1.1] font-bold text-white md:text-4xl lg:text-5xl">
                  Driving{" "}
                  <span className="text-brand-gold italic">Excellence</span>{" "}
                  Across Sectors.
                </h2>
                <p className="mb-10 max-w-md text-base leading-relaxed text-white/60">
                  We blend deep industry knowledge with uncompromising standards
                  to deliver transformational results for our partners.
                </p>

                <div className="mb-8">
                  <p className="text-brand-gold mb-6 flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase">
                    <span className="bg-brand-gold h-px w-8"></span>
                    Who we serve
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {division.audiences.map((audience, index) => (
                      <Reveal key={audience} delay={index * 0.1}>
                        <span className="hover:text-brand-gold hover:border-brand-gold/50 inline-block cursor-default rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/80 backdrop-blur-sm transition-colors">
                          {audience}
                        </span>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Expertise Massive List */}
            <div className="mt-4 flex flex-col pt-4 lg:mt-0 lg:border-l lg:border-white/10 lg:pt-0 lg:pl-16">
              <Reveal>
                <p className="text-brand-gold mb-6 flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase">
                  <span className="bg-brand-gold h-px w-8"></span>
                  Our Capabilities
                </p>
              </Reveal>
              <div className="flex flex-col">
                {division.services.map((service, index) => (
                  <Reveal key={service} delay={index * 0.1}>
                    <div className="group hover:border-brand-gold flex cursor-default items-center justify-between border-b border-white/10 py-4 transition-colors duration-500 md:py-6">
                      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
                        <span className="font-display text-brand-gold/40 group-hover:text-brand-gold text-sm font-bold tracking-widest transition-colors md:text-lg">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display group-hover:text-brand-gold transform text-xl font-bold text-white transition-all duration-500 group-hover:translate-x-4 md:text-2xl lg:text-3xl">
                          {service}
                        </h3>
                      </div>
                      <div className="group-hover:bg-brand-gold group-hover:border-brand-gold hidden h-10 w-10 -rotate-45 transform items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:rotate-0 md:flex">
                        <ArrowUpRight className="group-hover:text-brand-ink size-4 text-white/50 transition-colors" />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section (Min 6 Projects with Animated Pills) */}
      <section className="bg-white px-5 pt-16 pb-18 sm:px-6 md:px-12 md:pt-32 md:pb-32 lg:px-20">
        <div className="mx-auto max-w-[var(--container-max)]">
          <Reveal>
            <div className="mb-10 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end">
              <div>
                <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase">
                  {projectLabel}
                </p>
                <h2 className="font-display text-brand-ink mt-4 max-w-2xl text-[36px] leading-tight font-bold md:text-6xl">
                  {projectHeading}
                </h2>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mb-10 flex flex-wrap gap-2.5 md:mb-12 md:gap-3">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2.5 text-[11px] font-bold tracking-[0.1em] uppercase transition-all duration-300 md:px-5 md:text-xs ${
                    activeCategory === category
                      ? "border-brand-ink bg-brand-ink text-white shadow-md"
                      : "border-brand-ink/15 text-brand-ink/70 hover:border-brand-gold hover:text-brand-gold bg-brand-surface"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {expandedProjects
              .filter(
                (p) =>
                  activeCategory === "All Projects" ||
                  p.category === activeCategory,
              )
              .map((project, index) => (
                <Reveal key={`${project.name}-${index}`} delay={index * 0.1}>
                  <ProjectCard
                    project={project}
                    isActiveStatus={isActiveStatus}
                    onOpenModal={setSelectedProject}
                  />
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-ink relative overflow-hidden px-5 py-16 text-white sm:px-6 md:px-12 md:py-32 lg:px-20">
        <div className="bg-brand-gold/10 pointer-events-none absolute right-0 bottom-0 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full blur-3xl" />
        <div className="relative z-10 mx-auto max-w-[var(--container-max)] text-center">
          <Reveal>
            <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase">
              Start a conversation
            </p>
            <h2 className="font-display mx-auto mt-6 max-w-4xl text-[36px] leading-tight font-bold md:text-6xl">
              {ctaText}
            </h2>
            <Link
              href="/contact"
              className="group text-brand-ink hover:bg-brand-gold-deep mt-12 inline-flex items-center gap-4 rounded-sm bg-white px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:text-white hover:shadow-xl"
            >
              Get in touch
              <ArrowUpRight
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                size={18}
                strokeWidth={2}
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Editorial Project Modal */}
      {selectedProject && (
        <div
          className="bg-brand-ink/95 fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 backdrop-blur-xl md:p-8 lg:p-12"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="animate-in fade-in slide-in-from-bottom-8 relative flex h-full max-h-[92vh] w-full max-w-[1400px] flex-col overflow-hidden rounded-sm bg-white shadow-2xl duration-700 ease-out lg:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="border-brand-ink/10 bg-brand-surface/90 text-brand-ink hover:bg-brand-ink absolute top-4 right-4 z-50 grid size-10 place-items-center rounded-full border backdrop-blur-md transition-all duration-500 hover:rotate-90 hover:text-white md:top-6 md:right-6 md:size-12"
            >
              <X strokeWidth={1.5} className="size-5" />
            </button>

            {/* Left Gallery Section */}
            <div className="bg-brand-ink relative h-[34vh] lg:h-full lg:w-[55%]">
              <ModalGallery project={selectedProject} />
            </div>

            {/* Right Content Section */}
            <div
              data-lenis-prevent="true"
              className="custom-scrollbar flex h-full flex-col overflow-y-auto bg-white p-6 md:p-12 lg:w-[45%] lg:p-16"
            >
              <div className="flex-1">
                <div className="mb-8 flex items-center gap-4">
                  <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase">
                    {selectedProject.category}
                  </span>
                  <span className="bg-brand-ink/10 h-px w-12" />
                  <span className="text-brand-muted text-xs font-bold tracking-[0.2em] uppercase">
                    {division.name}
                  </span>
                </div>

                <h2 className="font-display text-brand-ink mb-8 text-[34px] leading-[1.1] font-bold md:text-5xl lg:text-6xl">
                  {selectedProject.name}
                </h2>

                <div className="border-brand-ink/10 mb-12 flex items-center gap-3 border-b pb-8">
                  <StatusPill
                    status={selectedProject.status}
                    isActive={isActiveStatus(selectedProject.status)}
                    variant="modal"
                  />
                </div>

                <div className="space-y-6">
                  <h4 className="text-brand-ink text-sm font-bold tracking-[0.15em] uppercase">
                    Project Overview
                  </h4>
                  <p className="text-brand-muted text-lg leading-relaxed">
                    This project exemplifies the high standards and strategic
                    execution of the {division.name} division. It serves as a
                    benchmark for quality in the {division.sector} sector,
                    demonstrating our commitment to excellence and long-term
                    value creation.
                  </p>
                  <p className="text-brand-muted text-lg leading-relaxed">
                    The full scope, timeline, structural specifications, and
                    detailed outcomes will be managed and populated via Payload
                    CMS.
                  </p>
                </div>

                <div className="border-brand-ink/10 mt-12 grid gap-6 border-t pt-8 sm:grid-cols-2 md:mt-16 md:gap-8 md:pt-12">
                  <div>
                    <p className="text-brand-muted mb-2 text-[10px] font-bold tracking-[0.15em] uppercase">
                      Location
                    </p>
                    <p className="text-brand-ink text-lg font-bold md:text-xl">
                      {selectedProject.location}
                    </p>
                  </div>
                  <div>
                    <p className="text-brand-muted mb-2 text-[10px] font-bold tracking-[0.15em] uppercase">
                      Client
                    </p>
                    <p className="text-brand-ink text-lg font-bold md:text-xl">
                      Private
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function ProjectCard({
  project,
  isActiveStatus,
  onOpenModal,
}: {
  project: ProjectItem;
  isActiveStatus: (status: string) => boolean;
  onOpenModal: (project: ProjectItem) => void;
}) {
  const [activeImage, setActiveImage] = useState(0);
  // Using multiple varied images so the gallery effect is visible
  const gallery = [
    project.image,
    "/assets/home/construction.jpg",
    "/assets/home/events.jpg",
    "/assets/home/real-estate.jpg",
  ];

  return (
    <div className="group border-brand-ink/10 hover:shadow-brand-ink/5 flex h-full w-full flex-col overflow-hidden rounded-sm border bg-white text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      <div
        className="bg-brand-ink-soft relative aspect-[4/3] w-full cursor-pointer overflow-hidden"
        onClick={() => onOpenModal(project)}
      >
        <Image
          src={gallery[activeImage]}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="ease-brand object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="bg-brand-ink/5 absolute inset-0 transition duration-700 group-hover:bg-transparent" />

        {/* Highly Visible Animated Status Pill */}
        <div className="absolute top-4 right-4 z-10">
          <StatusPill
            status={project.status}
            isActive={isActiveStatus(project.status)}
          />
        </div>
      </div>

      {/* Interactive Gallery Section */}
      <div className="bg-brand-ink/5 grid grid-cols-4 gap-[2px] p-[2px]">
        {gallery.map((img, i) => (
          <button
            key={`thumb-${i}`}
            type="button"
            onMouseEnter={() => setActiveImage(i)}
            onClick={(e) => {
              e.stopPropagation();
              setActiveImage(i);
            }}
            className={`bg-brand-surface relative aspect-[4/3] overflow-hidden transition-all duration-300 ${
              activeImage === i
                ? "ring-brand-gold z-10 ring-2 ring-inset"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={img}
              alt={`${project.name} thumbnail ${i + 1}`}
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <div
        className="flex flex-1 cursor-pointer flex-col p-6 md:p-8"
        onClick={() => onOpenModal(project)}
      >
        <p className="text-brand-gold mb-3 text-xs font-bold tracking-[0.18em] uppercase">
          {project.category}
        </p>
        <h3 className="font-display text-brand-ink group-hover:text-brand-gold-deep text-2xl leading-tight font-bold transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-brand-muted mt-3 text-sm">{project.location}</p>

        <div className="border-brand-ink/10 text-brand-ink/50 group-hover:text-brand-ink mt-8 mt-auto flex items-center justify-between border-t pt-5 text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-500">
          <span>View details</span>
          <div className="bg-brand-surface group-hover:bg-brand-ink flex h-8 w-8 items-center justify-center rounded-full transition-all duration-500 group-hover:rotate-45 group-hover:text-white">
            <ArrowUpRight className="size-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalGallery({ project }: { project: ProjectItem }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Using multiple varied images so the gallery effect is visible
  const gallery = [
    project.image,
    "/assets/home/construction.jpg",
    "/assets/home/events.jpg",
    "/assets/home/real-estate.jpg",
  ];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="group relative h-full w-full">
      <Image
        src={gallery[currentIndex]}
        alt={project.name}
        fill
        className="object-cover transition-opacity duration-500"
      />
      <div className="from-brand-ink/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />

      {/* Navigation Arrows */}
      <div className="pointer-events-none absolute inset-y-0 right-4 left-4 z-10 flex items-center justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <button
          onClick={prevImage}
          className="hover:bg-brand-gold hover:text-brand-ink pointer-events-auto grid size-12 place-items-center rounded-full bg-black/20 text-white backdrop-blur-md transition-colors"
        >
          <ChevronLeft className="size-6" strokeWidth={1.5} />
        </button>
        <button
          onClick={nextImage}
          className="hover:bg-brand-gold hover:text-brand-ink pointer-events-auto grid size-12 place-items-center rounded-full bg-black/20 text-white backdrop-blur-md transition-colors"
        >
          <ChevronRight className="size-6" strokeWidth={1.5} />
        </button>
      </div>

      {/* Controls */}
      <div className="absolute right-8 bottom-8 left-8 z-10 flex items-end justify-between">
        <div className="flex gap-2">
          {gallery.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentIndex === idx
                  ? "bg-brand-gold w-8"
                  : "w-4 bg-white/30 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
        <div className="font-display text-lg font-bold tracking-widest text-white">
          0{currentIndex + 1} / 0{gallery.length}
        </div>
      </div>
    </div>
  );
}
