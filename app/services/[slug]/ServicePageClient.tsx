"use client";

import { useState } from "react";

import Image from "next/image";

import Link from "next/link";

import { ArrowLeft, ArrowUpRight } from "lucide-react";



import { Header } from "@/components/site/header";

import { companyDivisions } from "@/lib";



const navItems = [

  { label: "Home", href: "/" },

  { label: "Services", href: "/services" },

  { label: "Blog", href: "/blogs" },

  { label: "About us", href: "/about" },

  { label: "Contact", href: "/contact" },

];



const builderProjects = [

  {

    name: "Project Name",

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



const projectFilters = [

  "All",

  "Upcoming",

  "Residential Construction",

  "Commercial Projects",

  "Infrastructure Projects",

  "Turnkey Projects",

  "Real Estate Development",

];



export default function ServicePageClient({

  division,

}: {

  division: (typeof companyDivisions)[number];

}) {

  const [activeFilter, setActiveFilter] = useState("All");



  const filteredProjects =

    activeFilter === "All"

      ? builderProjects

      : builderProjects.filter(

          (project) =>

            project.status === activeFilter ||

            project.category === activeFilter,

        );
  return (
    <main className="min-h-screen bg-brand-surface text-brand-ink">
      <Header navItems={navItems} />

      {/* Hero */}
      <section className="px-6 pb-20 pt-40 md:px-12 md:pb-28 md:pt-52 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/services"
            className="group mb-16 inline-flex items-center gap-3 text-sm uppercase tracking-[0.15em] text-brand-ink/60 transition-colors hover:text-brand-gold"
          >
            <ArrowLeft
              size={17}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to services
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.25em] text-brand-gold">
                {division.sector}
              </p>

              <h1 className="max-w-5xl font-display text-6xl leading-[0.9] tracking-[-0.05em] md:text-8xl">
                {division.name}
              </h1>

              <p className="mt-8 max-w-2xl font-display text-2xl italic text-brand-gold/90 md:text-3xl">
                {division.tagline}
              </p>
            </div>

            <p className="max-w-lg text-lg leading-relaxed text-brand-ink/65">
              {division.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="relative mx-auto aspect-[16/8] max-w-7xl overflow-hidden">
          <Image
            src={division.image}
            alt={division.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 90vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Details */}
      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">
              What we offer
            </p>

            <h2 className="mt-5 max-w-xl font-display text-5xl leading-none tracking-[-0.04em] md:text-6xl">
              Expertise built around your goals.
            </h2>
          </div>

          <div>
            <div className="border-t border-brand-ink/15">
              {division.services.map((service, index) => (
                <div
                  key={service}
                  className="flex items-center justify-between border-b border-brand-ink/15 py-6"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-sm text-brand-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-lg">{service}</span>
                  </div>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    className="text-brand-ink/40"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


{/* Projects */}
<section className="border-t border-brand-ink/15 px-6 py-24 md:px-12 md:py-32 lg:px-20">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">
        Our Projects
      </p>

      <h2 className="mt-5 font-display text-5xl leading-none tracking-[-0.04em] md:text-7xl">
        Work that takes
        <br />
        <span className="text-brand-gold">shape in the real world.</span>
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-brand-ink/65">
        Explore the projects and developments delivered through Sathriyan
        Builders across construction, infrastructure, and real estate.
      </p>
    </div>

    {/* Filters */}
    <div className="mt-16 flex gap-3 overflow-x-auto border-b border-brand-ink/15 pb-5">
      {projectFilters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => setActiveFilter(filter)}
          className={`shrink-0 rounded-full border px-5 py-3 text-sm transition-all duration-300 ${
            activeFilter === filter
              ? "border-brand-gold bg-brand-gold text-brand-surface"
              : "border-brand-ink/20 text-brand-ink/60 hover:border-brand-gold hover:text-brand-gold"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>

    {/* Project Cards */}
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {filteredProjects.map((project) => (
        <article
          key={project.name}
          className="group overflow-hidden border border-brand-ink/15"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute left-4 top-4">
              <span className="bg-brand-surface px-3 py-2 text-xs uppercase tracking-[0.15em]">
                {project.status}
              </span>
            </div>
          </div>

          <div className="p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-gold">
              {project.category}
            </p>

            <h3 className="mt-3 font-display text-3xl leading-none">
              {project.name}
            </h3>

            <p className="mt-4 text-sm text-brand-ink/55">
              {project.location}
            </p>
          </div>
        </article>
      ))}
    </div>

    {filteredProjects.length === 0 && (
      <div className="border border-brand-ink/15 py-20 text-center">
        <p className="text-brand-ink/55">
          Projects in this category will be showcased here soon.
        </p>
      </div>
    )}
  </div>
</section>


      {/* Audience */}
      <section className="border-t border-brand-ink/15 px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">
            Who we work with
          </p>

          <h2 className="mt-5 max-w-3xl font-display text-5xl leading-none tracking-[-0.04em] md:text-7xl">
            Built for businesses,
            <br />
            <span className="text-brand-gold">people, and possibilities.</span>
          </h2>

          <div className="mt-16 grid gap-px border border-brand-ink/15 bg-brand-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {division.audiences.map((audience) => (
              <div
                key={audience}
                className="bg-brand-surface p-8 text-lg"
              >
                {audience}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-brand-ink/15 px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">
            Start a conversation
          </p>

          <h2 className="mt-6 max-w-4xl font-display text-5xl leading-none tracking-[-0.04em] md:text-7xl">
            Have a project in mind?
            <br />
            <span className="text-brand-gold">Let's talk.</span>
          </h2>

          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-4 border-b border-brand-ink/40 pb-3 text-sm uppercase tracking-[0.15em] transition-colors hover:border-brand-gold"
          >
            Get in touch

            <ArrowUpRight
              size={18}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}