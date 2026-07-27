"use client";

import { ArrowLeft, ArrowUpRight, Plus, X, Building2, Users, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Header } from "@/components/site/header";
import { navItems } from "@/lib";
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
      <Header navItems={navItems} />

      {/* Reduced Hero Section */}
      <section className="bg-brand-ink px-6 pt-32 pb-16 text-white md:px-12 md:pt-40 md:pb-20 lg:px-20 relative overflow-hidden">
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="mx-auto max-w-7xl relative z-10 py-4 md:py-8">
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
                  "{division.tagline}"
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
        <div className="relative mx-auto aspect-[16/7] max-w-7xl overflow-hidden rounded-sm bg-brand-ink shadow-2xl">
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

      {/* Redesigned Premium "What we offer" (Services) */}
      <section className="bg-brand-ink px-6 py-24 md:px-12 md:py-32 lg:px-20 text-white">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-16 border-b border-white/10 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">
                  Our Expertise
                </p>
                <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold">
                  What we offer.
                </h2>
              </div>
              <p className="max-w-md text-white/60 text-lg leading-relaxed md:text-right">
                Specialized solutions crafted with precision. We focus on delivering exceptional quality across every touchpoint of our service verticals.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col">
            {division.services.map((service, index) => (
              <Reveal key={service} delay={index * 0.1}>
                <div className="group border-b border-white/10 py-8 md:py-12 flex items-center justify-between transition-colors hover:border-brand-gold cursor-default overflow-hidden">
                  <div className="flex items-center gap-6 md:gap-16">
                    <span className="font-display text-2xl md:text-4xl font-bold text-white/20 group-hover:text-brand-gold transition-colors duration-500">
                      0{index + 1}
                    </span>
                    <h3 className="font-display text-2xl md:text-5xl font-bold group-hover:translate-x-4 transition-transform duration-500">
                      {service}
                    </h3>
                  </div>
                  <ArrowUpRight className="text-white/0 group-hover:text-brand-gold transition-all duration-500 size-8 md:size-12 -translate-x-8 group-hover:translate-x-0 hidden md:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Premium "Who we work with" (Audiences) */}
      <section className="bg-brand-gold px-6 py-24 md:px-12 md:py-32 lg:px-20 text-brand-ink">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-brand-ink/60 text-xs font-bold tracking-[0.25em] uppercase mb-12 text-center">
              Who we work with
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 md:gap-x-12 md:gap-y-6">
              {division.audiences.map((audience, index) => (
                <div key={audience} className="flex items-center gap-4 md:gap-12">
                  <span className="font-display text-3xl md:text-5xl lg:text-7xl font-bold hover:text-white transition-colors duration-300 cursor-default">
                    {audience}
                  </span>
                  {index < division.audiences.length - 1 && (
                    <span className="text-brand-ink/20 text-3xl md:text-5xl lg:text-7xl font-light">/</span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects Grid Section (Min 6 Projects with Animated Pills) */}
      <section className="bg-white px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-7xl">
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
        <div className="mx-auto max-w-7xl text-center relative z-10">
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
                  <span className="inline-flex items-center gap-2 bg-brand-surface px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase text-brand-ink rounded-full border border-brand-ink/10">
                    <span className="relative flex h-2 w-2">
                      {isActiveStatus(selectedProject.status) ? (
                        <>
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
                        </>
                      ) : (
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      )}
                    </span>
                    {selectedProject.status}
                  </span>
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
          <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] uppercase text-brand-ink shadow-sm rounded-full border border-brand-ink/10">
            <span className="relative flex h-2 w-2">
              {isActiveStatus(project.status) ? (
                <>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
                </>
              ) : (
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              )}
            </span>
            {project.status}
          </span>
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
