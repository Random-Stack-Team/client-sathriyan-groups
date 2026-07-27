"use client";

import { ArrowLeft, ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
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
  const base = "inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] uppercase rounded-full border border-brand-ink/10";
  const variantClass =
    variant === "modal"
      ? "bg-brand-surface text-brand-ink"
      : "bg-white/95 backdrop-blur-md text-brand-ink shadow-sm";

  return (
    <span className={`${base} ${variantClass}`}>
      <span className="relative flex h-2 w-2">
        {isActive ? (
          <>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-gold" />
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
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
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
    if (sectorLower.includes("construction")) return ["Under Construction", "Handed Over", "In Design"];
    if (sectorLower.includes("real estate")) return ["Selling Fast", "Sold Out", "Upcoming Phase"];
    if (sectorLower.includes("event")) return ["Upcoming", "Concluded", "Booking Open"];
    if (sectorLower.includes("brand")) return ["Live", "In Progress", "Delivered"];
    if (sectorLower.includes("trade")) return ["Active", "Completed", "Processing"];
    if (sectorLower.includes("advisory") || sectorLower.includes("consulting")) return ["Engaged", "Completed", "Initiated"];
    if (sectorLower.includes("food") || sectorLower.includes("hospitality")) return ["Operational", "Opening Soon", "Renovating"];
    return ["Ongoing", "Completed", "Planned"];
  };
  
  const contextualStatuses = getContextualStatuses(division.sector);
  
  const isActiveStatus = (status: string) => {
    const s = status.toLowerCase();
    return ["ongoing", "in review", "under construction", "selling fast", "upcoming", "live", "in progress", "active", "engaged", "operational", "opening soon", "in design", "booking open", "processing", "initiated", "upcoming phase"].includes(s);
  };

  // Guarantee 6 projects minimum
  const expandedProjects = Array.from({ length: 6 }, (_, index) => {
    const baseProject = projects[index % projects.length];
    const contextStatus = contextualStatuses[index % contextualStatuses.length];
    if (index < projects.length) return { ...baseProject, status: contextStatus };
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
    <main className="min-h-screen bg-brand-surface text-brand-ink">

      {/* Reduced Hero Section */}
      <section className="bg-brand-ink px-6 pt-32 pb-16 text-white md:px-12 md:pt-40 md:pb-20 lg:px-20 relative overflow-hidden">
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="mx-auto max-w-[var(--container-max)] relative z-10 py-4 md:py-8">
          <Reveal>
            <Link
              href="/services"
              className="group mb-12 inline-flex items-center gap-3 text-xs tracking-[0.2em] text-white/50 uppercase transition-colors hover:text-brand-gold"
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
                <p className="mb-6 text-xs tracking-[0.25em] text-brand-gold uppercase font-bold">
                  {division.sector}
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <h1 className="font-display max-w-4xl text-[44px] leading-[1.05] font-bold md:text-[64px] lg:text-[72px]">
                  {division.name}
                </h1>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="font-display mt-6 max-w-xl text-xl text-brand-gold/90 italic md:text-2xl border-l-2 border-brand-gold pl-5">
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
      <section className="bg-brand-ink px-6 pb-16 md:px-12 md:pb-20 lg:px-20">
        <div className="relative mx-auto aspect-[16/7] max-w-[var(--container-max)] overflow-hidden rounded-sm bg-brand-ink shadow-2xl">
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
      <section className="bg-brand-ink text-white relative px-6 py-16 md:px-12 md:py-24 lg:px-20 overflow-hidden">
        {/* Abstract dark gold gradient */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
        
        <div className="mx-auto max-w-[var(--container-max)] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
            
            {/* Left: Sticky Titles & Audiences */}
            <div className="lg:sticky lg:top-32 h-fit">
              <Reveal>
                <h2 className="font-display text-3xl leading-[1.1] font-bold md:text-4xl lg:text-5xl text-white mb-4">
                  Driving <span className="text-brand-gold italic">Excellence</span> Across Sectors.
                </h2>
                <p className="text-white/60 text-base leading-relaxed mb-10 max-w-md">
                  We blend deep industry knowledge with uncompromising standards to deliver transformational results for our partners.
                </p>
                
                <div className="mb-8">
                  <p className="text-xs tracking-[0.2em] font-bold text-brand-gold uppercase mb-6 flex items-center gap-4">
                    <span className="w-8 h-px bg-brand-gold"></span>
                    Who we serve
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {division.audiences.map((audience, index) => (
                      <Reveal key={audience} delay={index * 0.1}>
                        <span className="inline-block px-5 py-2.5 rounded-full border border-white/10 text-sm text-white/80 hover:text-brand-gold hover:border-brand-gold/50 transition-colors backdrop-blur-sm bg-white/5 cursor-default">
                          {audience}
                        </span>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Expertise Massive List */}
            <div className="flex flex-col mt-4 lg:mt-0 pt-4 lg:pt-0 lg:border-l lg:border-white/10 lg:pl-16">
              <Reveal>
                <p className="text-xs tracking-[0.2em] font-bold text-brand-gold uppercase mb-6 flex items-center gap-4">
                  <span className="w-8 h-px bg-brand-gold"></span>
                  Our Capabilities
                </p>
              </Reveal>
              <div className="flex flex-col">
                {division.services.map((service, index) => (
                  <Reveal key={service} delay={index * 0.1}>
                    <div className="group flex items-center justify-between py-4 md:py-6 border-b border-white/10 hover:border-brand-gold transition-colors duration-500 cursor-default">
                      <div className="flex items-start md:items-center gap-4 md:gap-8 flex-col md:flex-row">
                        <span className="font-display text-sm md:text-lg font-bold text-brand-gold/40 group-hover:text-brand-gold transition-colors tracking-widest">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-brand-gold transition-all duration-500 transform group-hover:translate-x-4">
                          {service}
                        </h3>
                      </div>
                      <div className="hidden md:flex w-10 h-10 rounded-full border border-white/20 items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-500 transform -rotate-45 group-hover:rotate-0">
                         <ArrowUpRight className="size-4 text-white/50 group-hover:text-brand-ink transition-colors" />
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
      <section className="bg-white px-6 pt-24 pb-24 md:px-12 md:pt-32 md:pb-32 lg:px-20">
        <div className="mx-auto max-w-[var(--container-max)]">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div>
                <p className="text-xs tracking-[0.25em] font-bold text-brand-gold uppercase">
                  {projectLabel}
                </p>
                <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight font-bold md:text-6xl text-brand-ink">
                  {projectHeading}
                </h2>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3 mb-12">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 text-xs font-bold tracking-[0.1em] uppercase rounded-full border transition-all duration-300 ${
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
              .filter(p => activeCategory === "All Projects" || p.category === activeCategory)
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
      <section className="bg-brand-ink px-6 py-24 text-white md:px-12 md:py-32 lg:px-20 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 translate-y-1/3 translate-x-1/3 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-[var(--container-max)] text-center relative z-10">
          <Reveal>
            <p className="text-xs tracking-[0.25em] font-bold text-brand-gold uppercase">
              Start a conversation
            </p>
            <h2 className="font-display mt-6 mx-auto max-w-4xl text-4xl leading-tight font-bold md:text-6xl">
              {ctaText}
            </h2>
            <Link
              href="/contact"
              className="group mt-12 inline-flex items-center gap-4 bg-white text-brand-ink px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:bg-brand-gold-deep hover:text-white hover:shadow-xl"
            >
              Get in touch
              <ArrowUpRight
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-ink/95 px-4 py-6 md:p-8 lg:p-12 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-[1400px] h-full max-h-[90vh] bg-white rounded-sm overflow-hidden flex flex-col lg:flex-row shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-50 grid size-12 place-items-center rounded-full bg-brand-surface/80 backdrop-blur-md text-brand-ink transition-all duration-500 hover:bg-brand-ink hover:text-white hover:rotate-90 border border-brand-ink/10"
            >
              <X strokeWidth={1.5} className="size-5" />
            </button>

            {/* Left Gallery Section */}
            <div className="lg:w-[55%] relative h-[40vh] lg:h-full bg-brand-ink">
               <ModalGallery project={selectedProject} />
            </div>

            {/* Right Content Section */}
            <div 
              data-lenis-prevent="true"
              className="lg:w-[45%] h-full overflow-y-auto custom-scrollbar bg-white p-8 md:p-16 flex flex-col"
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase">
                    {selectedProject.category}
                  </span>
                  <span className="w-12 h-px bg-brand-ink/10" />
                  <span className="text-brand-muted text-xs font-bold tracking-[0.2em] uppercase">
                    {division.name}
                  </span>
                </div>
                
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-ink leading-[1.1] mb-8">
                  {selectedProject.name}
                </h2>

                <div className="flex items-center gap-3 mb-12 border-b border-brand-ink/10 pb-8">
                  <StatusPill
                    status={selectedProject.status}
                    isActive={isActiveStatus(selectedProject.status)}
                    variant="modal"
                  />
                </div>

                <div className="space-y-6">
                  <h4 className="text-sm font-bold tracking-[0.15em] uppercase text-brand-ink">
                    Project Overview
                  </h4>
                  <p className="text-brand-muted text-lg leading-relaxed">
                    This project exemplifies the high standards and strategic execution of the {division.name} division. It serves as a benchmark for quality in the {division.sector} sector, demonstrating our commitment to excellence and long-term value creation.
                  </p>
                  <p className="text-brand-muted text-lg leading-relaxed">
                    The full scope, timeline, structural specifications, and detailed outcomes will be managed and populated via Payload CMS.
                  </p>
                </div>
                
                <div className="mt-16 grid grid-cols-2 gap-8 border-t border-brand-ink/10 pt-12">
                   <div>
                     <p className="text-brand-muted text-[10px] font-bold tracking-[0.15em] uppercase mb-2">Location</p>
                     <p className="font-bold text-brand-ink text-xl">{selectedProject.location}</p>
                   </div>
                   <div>
                     <p className="text-brand-muted text-[10px] font-bold tracking-[0.15em] uppercase mb-2">Client</p>
                     <p className="font-bold text-brand-ink text-xl">Private</p>
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
    "/assets/home/real-estate.jpg"
  ];

  return (
    <div className="group w-full text-left bg-white border border-brand-ink/10 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-brand-ink/5 hover:-translate-y-2 flex flex-col h-full">
      <div 
        className="relative aspect-[4/3] w-full overflow-hidden bg-brand-ink-soft cursor-pointer"
        onClick={() => onOpenModal(project)}
      >
        <Image
          src={gallery[activeImage]}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-1000 ease-brand group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-brand-ink/5 transition duration-700 group-hover:bg-transparent" />
        
        {/* Highly Visible Animated Status Pill */}
        <div className="absolute top-4 right-4 z-10">
          <StatusPill
            status={project.status}
            isActive={isActiveStatus(project.status)}
          />
        </div>
      </div>
      
      {/* Interactive Gallery Section */}
      <div className="grid grid-cols-4 gap-[2px] bg-brand-ink/5 p-[2px]">
        {gallery.map((img, i) => (
          <button
            key={`thumb-${i}`}
            type="button"
            onMouseEnter={() => setActiveImage(i)}
            onClick={(e) => {
              e.stopPropagation();
              setActiveImage(i);
            }}
            className={`relative aspect-[4/3] overflow-hidden bg-brand-surface transition-all duration-300 ${
              activeImage === i 
                ? "ring-2 ring-brand-gold ring-inset z-10" 
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
        className="p-6 md:p-8 flex flex-col flex-1 cursor-pointer"
        onClick={() => onOpenModal(project)}
      >
        <p className="text-xs tracking-[0.18em] font-bold text-brand-gold uppercase mb-3">
          {project.category}
        </p>
        <h3 className="font-display text-2xl leading-tight font-bold text-brand-ink group-hover:text-brand-gold-deep transition-colors duration-300">
          {project.name}
        </h3>
        <p className="mt-3 text-sm text-brand-muted">
          {project.location}
        </p>
        
        <div className="mt-8 pt-5 border-t border-brand-ink/10 flex items-center justify-between text-xs font-bold tracking-[0.15em] uppercase text-brand-ink/50 group-hover:text-brand-ink transition-colors duration-500 mt-auto">
          <span>View details</span>
          <div className="w-8 h-8 rounded-full bg-brand-surface flex items-center justify-center transition-all duration-500 group-hover:bg-brand-ink group-hover:text-white group-hover:rotate-45">
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
    "/assets/home/real-estate.jpg"
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
    <div className="relative w-full h-full group">
      <Image
        src={gallery[currentIndex]}
        alt={project.name}
        fill
        className="object-cover transition-opacity duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-transparent" />
      
      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
        <button
          onClick={prevImage}
          className="grid size-12 place-items-center rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-brand-gold hover:text-brand-ink transition-colors pointer-events-auto"
        >
          <ChevronLeft className="size-6" strokeWidth={1.5} />
        </button>
        <button
          onClick={nextImage}
          className="grid size-12 place-items-center rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-brand-gold hover:text-brand-ink transition-colors pointer-events-auto"
        >
          <ChevronRight className="size-6" strokeWidth={1.5} />
        </button>
      </div>
      
      {/* Controls */}
      <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between z-10">
        <div className="flex gap-2">
          {gallery.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                currentIndex === idx ? "w-8 bg-brand-gold" : "w-4 bg-white/30 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
        <div className="text-white font-display text-lg font-bold tracking-widest">
          0{currentIndex + 1} / 0{gallery.length}
        </div>
      </div>
    </div>
  );
}
