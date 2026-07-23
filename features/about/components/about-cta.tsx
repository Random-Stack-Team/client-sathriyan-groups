"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function AboutCTA() {
  return (
    <section className="px-6 py-20 md:px-0 md:py-32">
      <div className="mx-auto max-w-[1240px]">
        {/* Outer layer */}
        <div className="rounded-[32px] border border-[#0b1c30]/10 bg-[#f7fbff] p-2 md:p-3">
          {/* CTA card */}
          <div className="relative min-h-[500px] overflow-hidden rounded-[26px] bg-[#0b1c30] text-white">
            {/* Decorative concentric rings */}
            <div className="pointer-events-none absolute -top-48 -right-48 size-[650px] rounded-full border border-white/[0.06]" />

            <div className="pointer-events-none absolute -top-32 -right-32 size-[450px] rounded-full border border-white/[0.06]" />

            <div className="pointer-events-none absolute -top-16 -right-16 size-[280px] rounded-full border border-white/[0.06]" />

            {/* Abstract background shape */}
<div className="pointer-events-none absolute -right-32 -bottom-32 size-[500px] rounded-full bg-white/[0.025] blur-3xl" />

            {/* Soft overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_38%)]" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[500px] flex-col justify-between p-8 md:p-16">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
                <span className="size-2 rounded-full bg-white/70" />
                <span>Let&apos;s Work Together</span>
              </div>

              {/* Main content */}
              <div className="mt-20 max-w-[850px]">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="font-display text-4xl leading-[0.95] font-bold tracking-tight md:text-7xl"
                >
                  Let&apos;s build something
                  <br className="hidden md:block" /> enduring together.
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15,
                    ease: "easeOut",
                  }}
                  className="mt-8 max-w-[650px] text-base leading-relaxed text-white/65 md:text-lg"
                >
                  Whether you are looking for a development partner, investment
                  advisor, event producer, or trade facilitator, our team is
                  ready to help.
                </motion.p>
              </div>

              {/* CTA action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.25,
                  ease: "easeOut",
                }}
                className="mt-12"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1c30] transition-all duration-300 hover:gap-5 hover:bg-white/90"
                >
                  Contact Our Team

                  <span className="grid size-7 place-items-center rounded-full bg-[#0b1c30] text-white transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}