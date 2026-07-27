"use client";

import { ArrowUp, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { companyDivisions, navItems } from "@/lib";

export function Footer() {
  return (
    <footer className="bg-brand-footer px-6 text-white md:px-0">
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="pt-16 pb-8" y={20}>
          <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_0.8fr]">
            <div className="max-w-[320px]">
              <Image
                src="/assets/logo/sathriyan-generated-logo-light.png"
                alt="Sathriyan Group"
                width={1128}
                height={1108}
                className="h-16 w-auto object-contain md:h-20"
              />
              <p className="text-white/40 mt-5 text-sm leading-7">
                Seven businesses. Construction, real estate, branding, events,
                advisory, trade, and hospitality.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="grid size-9 place-items-center rounded-full border border-white/10 text-white/40 transition duration-300 hover:border-white/30 hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="grid size-9 place-items-center rounded-full border border-white/10 text-white/40 transition duration-300 hover:border-white/30 hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a
                  href="tel:+91"
                  aria-label="Phone"
                  className="grid size-9 place-items-center rounded-full border border-white/10 text-white/40 transition duration-300 hover:border-white/30 hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
                Company
              </p>
              <div className="mt-5 grid gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm text-white/50 transition duration-300 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
                Divisions
              </p>
              <div className="mt-5 grid gap-3">
                {companyDivisions.map((division) => (
                  <Link
                    key={division.slug}
                    href={`/services/${division.slug}`}
                    className="text-sm text-white/50 transition duration-300 hover:text-white"
                  >
                    {division.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
                  Reach us
                </p>
                <div className="mt-5 grid gap-3 text-sm text-white/50">
                  <p>Contact details to be confirmed by the team.</p>
                </div>
                <Link
                  href="/contact"
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold transition duration-300 hover:text-brand-gold-bright"
                >
                  Get in touch
                  <ArrowUpRight className="size-3.5 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group mt-8 grid size-10 place-items-center rounded-full border border-white/10 text-white/30 transition duration-300 hover:border-white/30 hover:text-white lg:mt-0 lg:ml-auto"
                aria-label="Back to top"
              >
                <ArrowUp className="size-4 transition duration-300 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="border-t border-white/8 py-6 text-[11px] text-white/25 sm:flex sm:items-center sm:justify-between">
          <span>&copy; 2026 Sathriyan Group. All rights reserved.</span>
          <span className="mt-2 sm:mt-0">
            Crafted by Random Stack Technologies
          </span>
        </div>
      </div>
    </footer>
  );
}
