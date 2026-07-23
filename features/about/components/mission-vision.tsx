"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const values = [
  {
    title: "Our Mission",
    description:
      "To deliver quality, reliability, and innovation across every venture while creating lasting value for our customers and partners.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description:
      "To build a diversified and trusted group of businesses that grows through unity, innovation, and a commitment to excellence.",
    icon: Eye,
  },
];

export function MissionVision() {
  return (
    <section className="px-6 py-24 md:px-0 md:py-32">
      <div className="mx-auto grid max-w-[1100px] gap-6 md:grid-cols-2">
        {values.map((value, index) => {
          const Icon = value.icon;

          return (
            <motion.article
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -4 }}
              className="group relative flex min-h-[360px] items-center overflow-hidden rounded-2xl bg-[#0b1c30] px-8 py-12 text-white md:px-12"
            >
              {/* Layer 1: subtle inner border */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />

              {/* Layer 2: soft gradient depth */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

              {/* Layer 3: watermark icon */}
              <Icon
                aria-hidden="true"
                strokeWidth={1}
                className="pointer-events-none absolute -right-2 -bottom-6 size-64 text-white opacity-[0.06] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-rotate-6 md:right-[-20px] md:bottom-[-20px] md:size-80"
              />

              {/* Content */}
              <div className="relative z-10 max-w-[480px]">
                <h2 className="font-display text-3xl leading-tight font-bold md:text-5xl">
                  {value.title}
                </h2>

                <p className="mt-6 text-base leading-relaxed text-white/75 md:text-xl">
                  {value.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}