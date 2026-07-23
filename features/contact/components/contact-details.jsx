"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="px-6 py-16 md:px-0 md:py-20">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid gap-6 md:grid-cols-3">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;

            const cardContent = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group rounded-[26px] border border-[#0b1c30]/10 bg-[#f7fbff] p-2 transition-transform duration-300 hover:-translate-y-1 md:p-2.5"
              >
                {/* Main card */}
                <div className="relative min-h-[170px] overflow-hidden rounded-[20px] border border-[#0b1c30]/10 bg-white shadow-[0_12px_40px_rgba(11,28,48,0.06)]">
                  {/* Decorative layers */}
                  <div className="pointer-events-none absolute -right-16 -bottom-20 size-56 rounded-full border border-[#0b1c30]/[0.05] transition-transform duration-500 group-hover:scale-110" />

                  <div className="pointer-events-none absolute -right-8 -bottom-12 size-36 rounded-full border border-[#0b1c30]/[0.05] transition-transform duration-500 group-hover:scale-110" />

                  {/* Soft overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(11,28,48,0.045),transparent_45%)]" />

                  {/* Content */}
                  <div className="relative z-10 flex min-h-[170px] items-stretch">
                    {/* Icon panel */}
                    <div className="relative flex w-[76px] shrink-0 items-center justify-center overflow-hidden bg-[#0b1c30]">
                      {/* Diagonal extension */}
                      <div className="pointer-events-none absolute top-0 -right-10 h-full w-10 bg-[#0b1c30] [clip-path:polygon(0_0,100%_0,0_100%)]" />

                      {/* Subtle icon panel detail */}
                      <div className="pointer-events-none absolute -bottom-8 -left-8 size-28 rounded-full border border-white/[0.08]" />

                      <Icon
                        aria-hidden="true"
                        strokeWidth={1.5}
                        className="relative z-10 size-6 text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-8deg]"
                      />
                    </div>

                    {/* Information */}
                    <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-7">
                      <p className="text-xs font-semibold tracking-[0.12em] text-[#0b1c30]/50 uppercase">
                        {detail.title}
                      </p>

                      <p className="mt-3 text-sm leading-relaxed font-medium text-[#0b1c30]">
                        {detail.value}
                      </p>
                    </div>

                    {/* Arrow */}
                    {detail.href && (
                      <div className="absolute top-5 right-5 grid size-8 place-items-center rounded-full border border-[#0b1c30]/10 text-[#0b1c30]/40 transition-all duration-300 group-hover:border-[#0b1c30]/30 group-hover:text-[#0b1c30]">
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );

            return detail.href ? (
              <a key={detail.title} href={detail.href}>
                {cardContent}
              </a>
            ) : (
              <div key={detail.title}>{cardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}