"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Header } from "@/components/site/header";
import { companyDivisions, companyProfile } from "@/lib";

export default function ServicesPage() {

    const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blog" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

return ( <main className="min-h-screen bg-brand-surface text-brand-ink">
      <Header navItems={navItems} />

  {/* Hero */}
  <section className="px-6 pb-20 pt-32 md:px-12 md:pb-28 md:pt-44 lg:px-20">
    <div className="mx-auto max-w-7xl">
      <Reveal>
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-brand-gold">
          Our Services
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="max-w-5xl font-display text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
          Many capabilities.
          <br />
          <span className="text-brand-gold">One connected group.</span>
        </h1>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-10 max-w-2xl">
          <p className="text-lg leading-relaxed text-brand-ink/70 md:text-xl">
            {companyProfile.summary}
          </p>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-brand-ink/55">
            Explore the businesses that make up Sathriyan Group and discover
            the expertise behind each division.
          </p>
        </div>
      </Reveal>
    </div>
  </section>

  {/* Services */}
  <section className="px-6 pb-32 md:px-12 lg:px-20">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 flex items-end justify-between border-b border-brand-ink/15 pb-5">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">
            Our Divisions
          </p>

          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            Explore our services
          </h2>
        </div>

        <span className="hidden text-sm text-brand-ink/50 md:block">
          {String(companyDivisions.length).padStart(2, "0")} divisions
        </span>
      </div>

      <div className="space-y-8">
        {companyDivisions.map((division, index) => (
          <Reveal key={division.slug} delay={index * 0.05}>
            <Link
              href={`/services/${division.slug}`}
              className="group block"
            >
              <article className="grid overflow-hidden border border-brand-ink/15 bg-brand-surface transition-colors duration-500 hover:border-brand-gold/60 md:grid-cols-2">
                {/* Image */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden md:aspect-auto ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={division.image}
                    alt={division.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-brand-ink/10 transition-colors duration-500 group-hover:bg-brand-ink/0" />
                </div>

                {/* Content */}
                <div
                  className={`flex min-h-[360px] flex-col justify-between p-8 md:p-12 lg:p-16 ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <span className="text-sm text-brand-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <ArrowUpRight
                        size={22}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>

                    <p className="mt-10 text-xs uppercase tracking-[0.2em] text-brand-ink/50">
                      {division.sector}
                    </p>

                    <h3 className="mt-4 max-w-lg font-display text-4xl leading-none tracking-[-0.03em] md:text-5xl">
                      {division.name}
                    </h3>

                    <p className="mt-5 max-w-md font-display text-xl italic text-brand-gold/90">
                      {division.tagline}
                    </p>

                    <p className="mt-6 max-w-lg text-sm leading-relaxed text-brand-ink/65">
                      {division.summary}
                    </p>
                  </div>

                  <div className="mt-10 flex items-center gap-3 text-sm uppercase tracking-[0.15em]">
                    <span>Explore division</span>

                    <span className="h-px w-10 bg-brand-ink/40 transition-all duration-300 group-hover:w-16 group-hover:bg-brand-gold" />
                  </div>
                </div>
              </article>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="border-t border-brand-ink/15 px-6 py-24 md:px-12 md:py-32 lg:px-20">
    <div className="mx-auto max-w-7xl">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">
          Start a conversation
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-4xl font-display text-5xl leading-none tracking-[-0.04em] md:text-7xl">
          Find the right division
          <br />
          <span className="text-brand-gold">for your next move.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
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
      </Reveal>
    </div>
  </section>

 
</main>

);
}
