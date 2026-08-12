import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { companyDivisions, companyProfile } from "@/lib";

export default function ServicesPage() {
  return (
    <main className="bg-brand-surface text-brand-ink min-h-screen">
      <section className="bg-brand-ink-soft px-5 pt-28 pb-12 text-white sm:px-6 md:px-12 md:pt-40 md:pb-20 lg:px-20">
        <div className="mx-auto max-w-[var(--container-max)] border-y border-white/12 py-8 md:py-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.42fr] lg:items-end">
            <div>
              <Reveal>
                <p className="text-brand-gold mb-6 text-xs tracking-[0.25em] uppercase">
                  Our Services
                </p>
              </Reveal>
              <Reveal>
                <h1 className="font-display max-w-5xl text-[42px] leading-[1.02] font-bold sm:text-5xl md:text-7xl md:leading-[0.95]">
                  Many capabilities.
                  <br />
                  <span className="text-brand-gold">One connected group.</span>
                </h1>
              </Reveal>
            </div>

            <Reveal>
              <div className="border-l border-white/14 pl-0 lg:pl-8">
                <p className="text-lg leading-relaxed text-white/72 md:text-xl">
                  {companyProfile.summary}
                </p>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/48">
                  Explore the businesses that make up Sathriyan Group and
                  discover the expertise behind each division.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-[var(--container-max)]">
          <div className="border-brand-ink/15 mb-10 flex items-end justify-between border-b pb-5 md:mb-12">
            <div>
              <p className="text-brand-gold text-xs tracking-[0.25em] uppercase">
                Our Divisions
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold md:text-4xl">
                Explore our services
              </h2>
            </div>
            <span className="text-brand-ink/50 hidden text-sm md:block">
              {String(companyDivisions.length).padStart(2, "0")} divisions
            </span>
          </div>

          <div className="space-y-8">
            {companyDivisions.map((division, index) => (
              <Reveal key={division.slug}>
                <Link
                  href={`/services/${division.slug}`}
                  className="group block"
                >
                  <article className="border-brand-ink/12 shadow-brand-soft hover:border-brand-gold/60 hover:shadow-brand grid overflow-hidden border bg-white transition duration-700 hover:-translate-y-1 md:grid-cols-2">
                    <div
                      className={`relative aspect-[4/3] overflow-hidden md:aspect-auto ${
                        index % 2 === 1 ? "md:order-2" : ""
                      }`}
                    >
                      <Image
                        src={division.image}
                        alt={division.name}
                        fill
                        sizes="100vw"
                        className="ease-brand object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="bg-brand-ink/18 group-hover:bg-brand-ink/4 absolute inset-0 transition-colors duration-500" />
                    </div>

                    <div
                      className={`flex min-h-[300px] flex-col justify-between p-6 md:min-h-[360px] md:p-12 lg:p-16 ${
                        index % 2 === 1 ? "md:order-1" : ""
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between">
                          <span className="text-brand-gold text-sm">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <ArrowUpRight
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            size={22}
                            strokeWidth={1.5}
                          />
                        </div>
                        <p className="text-brand-muted mt-8 text-xs font-bold tracking-[0.2em] uppercase md:mt-10">
                          {division.sector}
                        </p>
                        <h3 className="font-display mt-4 max-w-lg text-4xl leading-none font-bold md:text-5xl">
                          {division.name}
                        </h3>
                        <p className="font-display text-brand-gold-deep mt-5 max-w-md text-xl italic">
                          {division.tagline}
                        </p>
                        <p className="text-brand-muted mt-6 max-w-lg text-sm leading-relaxed">
                          {division.summary}
                        </p>
                      </div>

                      <div className="mt-10 flex items-center gap-3 text-sm font-bold tracking-[0.15em] uppercase">
                        <span>Explore division</span>
                        <span className="bg-brand-ink/40 group-hover:bg-brand-gold h-px w-10 transition-all duration-300 group-hover:w-16" />
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-brand-ink/15 border-t bg-white px-5 py-16 sm:px-6 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-[var(--container-max)]">
          <Reveal>
            <p className="text-brand-gold text-xs tracking-[0.25em] uppercase">
              Start a conversation
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-display mt-6 max-w-4xl text-[40px] leading-tight font-bold md:text-7xl md:leading-none">
              Find the right division
              <br />
              <span className="text-brand-gold">for your next move.</span>
            </h2>
          </Reveal>
          <Reveal>
            <Link
              href="/contact"
              className="group border-brand-ink/40 hover:border-brand-gold mt-10 inline-flex items-center gap-4 border-b pb-3 text-sm tracking-[0.15em] uppercase transition-colors"
            >
              Get in touch
              <ArrowUpRight
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                size={18}
                strokeWidth={1.5}
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
