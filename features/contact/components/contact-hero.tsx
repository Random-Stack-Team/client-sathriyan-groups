import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Header } from "@/components/site/header";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function ContactHero() {
  return (
    <section className="bg-brand-ink-soft relative overflow-hidden text-white">
      <Image
        src="/assets/home/hero.jpg"
        alt="Sathriyan Group corporate environment"
        fill
        priority
        className="object-cover opacity-42"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,28,48,0.96)_0%,rgba(11,28,48,0.84)_52%,rgba(11,28,48,0.42)_100%)]" />

      <Header navItems={navItems} />

      <div className="relative z-10 mx-auto grid min-h-[620px] max-w-[1240px] items-end px-6 pt-36 pb-16 md:px-0">
        <Reveal className="max-w-[820px]" y={36}>
          <p className="text-brand-gold text-xs font-bold tracking-[0.24em] uppercase">
            Contact Sathriyan Group
          </p>

          <h1 className="font-display mt-6 max-w-[760px] text-[44px] leading-[1.02] font-bold md:text-[78px]">
            Start the right conversation.
          </h1>

          <p className="mt-7 max-w-[650px] text-lg leading-9 text-white/70">
            Reach the group for business enquiries, division-specific
            discussions, partnerships, and project conversations.
          </p>
        </Reveal>
      </div>
    </section>
  );
}