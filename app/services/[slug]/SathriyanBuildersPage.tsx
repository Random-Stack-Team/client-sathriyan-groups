"use client";

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

const eventProjects = [
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
const division = companyDivisions.find(
(item) => item.slug === "nexgen-events",
);

if (!division) return null;

return ( <main className="min-h-screen bg-brand-surface text-brand-ink"> <Header navItems={navItems} />

```
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
          Experiences built around your vision.
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
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">
          Our Events
        </p>

        <h2 className="mt-5 max-w-3xl font-display text-5xl leading-none tracking-[-0.04em] md:text-7xl">
          Moments that become
          <br />
          <span className="text-brand-gold">
            lasting impressions.
          </span>
        </h2>
      </div>

      {/* Event Filters */}
      <div className="mb-10 flex flex-wrap gap-3">
        {[
          "All",
          "Upcoming",
          "Ongoing",
          "Completed",
        ].map((filter) => (
          <button
            key={filter}
            type="button"
            className="border border-brand-ink/20 px-5 py-3 text-xs uppercase tracking-[0.15em] transition-colors hover:border-brand-gold hover:text-brand-gold"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Event Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {eventProjects.map((project) => (
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
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute left-4 top-4 bg-brand-surface px-3 py-2 text-xs uppercase tracking-[0.12em]">
                {project.status}
              </div>
            </div>

            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.15em] text-brand-gold">
                {project.category}
              </p>

              <h3 className="mt-3 font-display text-2xl leading-tight">
                {project.name}
              </h3>

              <p className="mt-3 text-sm text-brand-ink/55">
                {project.location}
              </p>

              <Link
                href="/contact"
                className="group mt-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.15em]"
              >
                Plan your event

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>

  {/* Audience */}
  <section className="border-t border-brand-ink/15 px-6 py-24 md:px-12 md:py-32 lg:px-20">
    <div className="mx-auto max-w-7xl">
      <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">
        Who we work with
      </p>

      <h2 className="mt-5 max-w-3xl font-display text-5xl leading-none tracking-[-0.04em] md:text-7xl">
        Built for brands,
        <br />
        <span className="text-brand-gold">
          businesses, and celebrations.
        </span>
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
        Have an event
        <br />
        <span className="text-brand-gold">
          in mind?
        </span>
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
