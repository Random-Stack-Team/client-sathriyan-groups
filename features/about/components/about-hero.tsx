"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[linear-gradient(115deg,#071523_0%,#0b1c30_45%,#102a43_100%)] px-6 py-20 text-center text-[#f5f5f5] md:min-h-[440px] md:px-0 md:py-24">
      {/* Subtle light source */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 85% 50%, rgba(255,255,255,0.07), transparent 35%)",
        }}
      />

      {/* Subtle vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.18)_100%)]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[900px] flex-col items-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
          <span className="size-2 rounded-full bg-white/70" />
          <span>About Sathriyan Group</span>
        </div>

        {/* Heading */}
        <h1 className="font-display mt-7 text-4xl leading-[1.05] font-bold tracking-tight md:text-6xl">
          Who We Are
        </h1>

        {/* Animated Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-7 h-px w-32 origin-center bg-white/30 md:w-48"
        />

        {/* Description */}
        <p className="mx-auto mt-7 max-w-[800px] text-base leading-relaxed text-white/70 md:text-xl">
          Sathriyan Group is a diversified group with ventures in construction,
          real estate, branding, events, consultancy, international trade, and
          food & hospitality.
        </p>
      </div>
    </section>
  );
}