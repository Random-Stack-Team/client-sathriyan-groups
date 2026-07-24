"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";

const contactDetails = [
  {
    title: "Call us anytime",
    value: "+91 1234567890",
    href: "tel:+911234567890",
    icon: Phone,
  },
  {
    title: "Our headquarters",
    value: (
      <>
        12, Bheema Nagar,
        <br />
        Trichy, 620008
      </>
    ),
    href: "https://maps.google.com",
    icon: MapPin,
  },
  {
    title: "Send us an email",
    value: "abc@gmail.com",
    href: "mailto:abc@gmail.com",
    icon: Mail,
  },
];

export function ContactDetails() {
  return (
    <section className="px-6 py-16 md:px-0 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid items-stretch gap-5 md:grid-cols-3">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;

            return (
              <Reveal key={detail.title} delay={index * 0.08}>
                <a
                  href={detail.href}
                  target={detail.title === "Our headquarters" ? "_blank" : undefined}
                  rel={
                    detail.title === "Our headquarters"
                      ? "noreferrer"
                      : undefined
                  }
                  className="group relative flex h-full min-h-[220px] overflow-hidden rounded-brand border border-brand-ink/8 bg-white p-7 shadow-brand-soft transition duration-700 hover:-translate-y-1"
                >
                  {/* Secondary colour fill */}
                  <div className="bg-brand-ink-soft absolute inset-x-0 bottom-0 h-1/2 origin-bottom translate-y-full transition-transform duration-700 ease-out group-hover:translate-y-0" />

                  {/* Decorative border */}
                  <div className="pointer-events-none absolute inset-3 rounded-[calc(var(--radius-brand)-6px)] border border-brand-ink/5 transition duration-700 group-hover:border-white/20" />

                  <div className="relative z-10 flex w-full flex-col">
                    {/* Icon */}
                    <span className="bg-brand-ink-soft grid size-12 shrink-0 place-items-center rounded-full text-white transition duration-700 group-hover:bg-white group-hover:text-brand-ink-soft">
                      <Icon
                        className="size-5"
                        strokeWidth={1.8}
                      />
                    </span>

                    {/* Navigation arrow */}
                    <span className="absolute top-1 right-1 grid size-8 place-items-center rounded-full border border-brand-ink/10 text-brand-ink/40 transition-all duration-700 group-hover:border-white/30 group-hover:text-white">
                      <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
                    </span>

                    {/* Content */}
                    <div className="mt-auto pt-10">
                      <p className="text-brand-muted text-xs font-bold tracking-[0.16em] uppercase transition duration-700 group-hover:text-white/60">
                        {detail.title}
                      </p>

                      <p className="text-brand-ink mt-2 max-w-[260px] text-base leading-7 font-semibold transition duration-700 group-hover:text-white">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}