"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const principles = [
  {
    number: "01",
    title: "Customer Focus",
    description:
      "Prioritizing customer satisfaction and understanding their needs.",
  },
  {
    number: "02",
    title: "Integrity",
    description: "Upholding ethical standards in all operations.",
  },
  {
    number: "03",
    title: "Innovation",
    description: "Embracing new ideas and technologies for growth.",
  },
];

const stats = [
  {
    value: 2021,
    label: "Founded",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years of Service",
  },
  {
    value: 100,
    suffix: "+",
    label: "Clients",
  },
];

export function AboutStats() {
  return (
    <section className="px-6 py-24 md:px-0 md:py-32">
      <div className="mx-auto max-w-[1100px]">
        {/* Outer layered frame */}
        <div className="rounded-[32px] border border-[#0b1c30]/10 bg-[#f7fbff] p-2 md:p-3">
          {/* Main card */}
          <div className="relative overflow-hidden rounded-[26px] border border-[#0b1c30]/10 bg-white shadow-[0_20px_60px_rgba(11,28,48,0.08)]">
            {/* Decorative concentric layers */}
            <div className="pointer-events-none absolute -top-32 -right-32 size-[420px] rounded-full border border-[#0b1c30]/[0.05]" />

            <div className="pointer-events-none absolute -top-20 -right-20 size-[280px] rounded-full border border-[#0b1c30]/[0.05]" />

            {/* Soft light overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,28,48,0.04),transparent_40%)]" />

            <div className="relative z-10 grid md:grid-cols-[0.85fr_1.15fr]">
              {/* Company Foundation */}
              <div className="relative overflow-hidden p-8 md:p-12">
                <div className="relative z-10">
                  <p className="text-xs font-semibold tracking-[0.2em] text-[#0b1c30]/50 uppercase">
                    Sathriyan Group&apos;s Foundation
                  </p>

                  <div className="mt-12 space-y-10">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                      >
                        <span className="font-display block text-5xl leading-none font-bold tracking-tight text-[#0b1c30] md:text-7xl">
  <AnimatedNumber
    value={stat.value}
    suffix={stat.suffix}
  />
</span>

                        <span className="mt-2 block text-sm text-[#0b1c30]/50">
                          {stat.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Core Principles */}
              <div className="border-t border-[#0b1c30]/10 md:border-t-0 md:border-l">
                <div className="p-8 md:p-12">
                  <p className="text-xs font-semibold tracking-[0.2em] text-[#0b1c30]/50 uppercase">
                    What Guides Us
                  </p>

                  <div className="mt-8">
                    {principles.map((principle, index) => (
                      <motion.div
                        key={principle.title}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                        className="group border-b border-[#0b1c30]/10 py-6 first:border-t"
                      >
                        <div className="flex items-start justify-between gap-6">
                          <div className="flex gap-5">
                            <span className="pt-1 text-xs text-[#0b1c30]/35">
                              {principle.number}
                            </span>

                            <div>
                              <h3 className="text-xl font-medium text-[#0b1c30] md:text-2xl">
                                {principle.title}
                              </h3>

                              <p className="mt-2 max-w-[380px] text-sm leading-relaxed text-[#0b1c30]/55 md:text-base">
                                {principle.description}
                              </p>
                            </div>
                          </div>

                          <ArrowUpRight className="size-5 shrink-0 -translate-x-2 text-[#0b1c30]/0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-[#0b1c30]/50" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const duration = 900;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1,
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}