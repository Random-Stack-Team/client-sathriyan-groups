"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { companyDivisions, companyProfile, contactInfo } from "@/lib";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socialIcons = [
  {
    name: "Instagram",
    href: contactInfo.socials.instagram,
    icon: "/assets/home/instagram.png",
  },
  {
    name: "WhatsApp",
    href: contactInfo.socials.whatsapp,
    icon: "/assets/home/whatsapp.png",
  },
  {
    name: "Phone",
    href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
    icon: "/assets/home/phone.png",
  },
];

const heroStats = [
  { value: "07", label: "business divisions" },
  { value: "360", label: "group ecosystem" },
  { value: "01", label: "integrated network" },
];

export function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f5f7] text-[#111827]">
      <FloatingSocialLinks />
      <HeroSection />
      <OverviewSection />
      <ServicesSection />
      <UpcomingSection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[#0f1d2c] md:min-h-[820px]">
      <Image
        src="/assets/home/hero.jpg"
        alt="Luxury building exterior surrounded by palms"
        fill
        priority
        className="object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,20,32,0.9)_0%,rgba(10,20,32,0.7)_46%,rgba(10,20,32,0.18)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#0f1d2c]/80 to-transparent" />
      <Header />

      <div className="relative z-10 mx-auto grid min-h-[720px] w-full max-w-[1240px] items-end px-6 pt-32 pb-10 md:min-h-[820px] md:grid-cols-[1fr_372px] md:gap-20 md:px-0 md:pb-16">
        <div className="max-w-[760px] text-white">
          <p className="mb-6 text-xs font-bold tracking-[0.24em] text-[#d8bd65] uppercase">
            Diversified Group of Companies
          </p>
          <h1 className="font-display max-w-[760px] text-[42px] leading-[1.04] font-bold md:text-[76px]">
            {companyProfile.tagline}
          </h1>
          <p className="mt-7 max-w-[660px] text-[17px] leading-8 text-white/78 md:text-xl md:leading-9">
            {companyProfile.summary}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-[#111827] shadow-[0_18px_44px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d8bd65]"
            >
              Explore group
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/24 bg-white/8 px-6 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/14"
            >
              Contact office
            </Link>
          </div>
        </div>

        <div className="mt-10 hidden text-white md:block">
          <div className="border border-white/16 bg-white/8 p-5 backdrop-blur-xl">
            <p className="text-xs font-bold tracking-[0.18em] text-white/58 uppercase">
              Operating across
            </p>
            <div className="mt-5 grid gap-4">
              {companyDivisions.slice(0, 5).map((division) => (
                <Link
                  key={division.slug}
                  href={`/services/${division.slug}`}
                  className="group flex items-center justify-between border-b border-white/12 pb-4 text-sm font-bold text-white/86"
                >
                  <span>{division.name}</span>
                  <ArrowUpRight className="size-4 text-[#d8bd65] opacity-0 transition duration-300 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 border border-white/12 bg-black/12 backdrop-blur-xl">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="border-r border-white/10 p-4 last:border-r-0"
              >
                <p className="font-display text-2xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] leading-4 text-white/56">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="relative mx-auto flex h-24 max-w-[1240px] items-center justify-between px-6 lg:h-[104px] lg:px-0">
        <Link
          href="/"
          className="group flex h-16 w-[196px] items-center text-white transition duration-300 hover:opacity-90 lg:h-20 lg:w-[268px]"
          aria-label="Sathriyan Group home"
        >
          <Image
            src="/assets/logo/sathriyan-group-logo-no-bg.png"
            alt="Sathriyan Group"
            width={420}
            height={160}
            priority
            className="h-auto w-full object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)] transition duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <div className="flex items-center gap-1 rounded-full border border-white/18 bg-[#0b1420]/28 p-1.5 shadow-[0_18px_48px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative rounded-full px-4 py-2.5 text-[14px] leading-5 font-bold text-[#f5f5f5] transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                  item.href === "/"
                    ? "bg-white/16 text-white ring-1 ring-white/22"
                    : "hover:bg-white/12 hover:text-[#d8bd65]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full border border-white/25 bg-white/12 text-white backdrop-blur-xl lg:hidden"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        {isOpen ? (
          <nav
            aria-label="Mobile navigation"
            className="absolute inset-x-6 top-[88px] rounded-[8px] border border-white/18 bg-[#102030]/96 p-3 shadow-[0_20px_60px_rgba(16,32,48,0.35)] backdrop-blur-xl lg:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-[6px] px-4 py-3 text-sm font-bold transition duration-300 ${
                  item.href === "/"
                    ? "bg-white text-[#102030]"
                    : "text-white hover:bg-white/10 hover:text-[#d8bd65]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}

function FloatingSocialLinks() {
  return (
    <div className="fixed top-1/2 right-4 z-50 flex -translate-y-1/2 flex-col items-center gap-2.5 md:right-8">
      {socialIcons.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          aria-label={item.name}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
          className="group relative grid size-11 place-items-center overflow-hidden rounded-full bg-white/92 shadow-[0_14px_34px_rgba(17,24,39,0.16)] ring-1 ring-black/5 backdrop-blur-md transition duration-300 hover:-translate-x-1 hover:bg-[#d8bd65] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <Image
            src={item.icon}
            alt=""
            width={32}
            height={32}
            className="size-8 object-contain transition duration-300 group-hover:scale-105"
          />
        </Link>
      ))}
    </div>
  );
}

function OverviewSection() {
  return (
    <section className="border-b border-black/8 bg-white px-6 py-16 md:px-0 md:py-24">
      <div className="mx-auto grid max-w-[1240px] gap-14 md:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-[#8a6f22] uppercase">
            Group Overview
          </p>
          <p className="font-display mt-5 max-w-[420px] text-[30px] leading-tight font-bold text-[#111827] md:text-[44px]">
            A practical business group working across property, brand,
            consulting, trade, events, and food.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-black/8 bg-black/8 md:grid-cols-3">
          {companyProfile.foundations.map((item, index) => (
            <div key={item.title} className="bg-[#fbfbfd] p-7">
              <span className="text-xs font-bold text-[#8a8f98]">
                0{index + 1}
              </span>
              <h2 className="mt-8 text-xl font-bold text-[#111827]">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-[#667085]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="bg-[#f5f5f7] px-6 py-16 md:px-0 md:py-24">
      <div className="mx-auto max-w-[1242px]">
        <div className="grid gap-8 md:grid-cols-[460px_1fr] md:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#8a6f22] uppercase">
              Business Divisions
            </p>
            <h2 className="font-display mt-4 text-[34px] leading-tight font-bold md:text-[56px]">
              Built across connected sectors.
            </h2>
          </div>
          <p className="max-w-[650px] text-base leading-8 text-[#667085] md:text-lg">
            Each division has its own operating focus while supporting the
            larger group ecosystem. This gives clients a single network for
            construction, sales, branding, events, advisory, trade, and food.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {companyDivisions.map((service, index) => (
            <Link
              key={service.name}
              href={`/services/${service.slug}`}
              className={`group relative grid min-h-[430px] overflow-hidden rounded-[8px] bg-white shadow-[0_18px_55px_rgba(17,24,39,0.08)] ring-1 ring-black/5 transition duration-500 hover:-translate-y-1 hover:bg-[#111827] hover:shadow-[0_24px_70px_rgba(17,24,39,0.16)] ${
                index === companyDivisions.length - 1 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-72"
                />
              </div>
              <div className="flex flex-col p-7">
                <p className="text-[11px] font-bold tracking-[0.16em] text-[#8a6f22] uppercase transition duration-300 group-hover:text-[#d8bd65]">
                  {service.sector}
                </p>
                <h3 className="font-display mt-5 text-[26px] leading-tight font-bold text-[#111827] transition duration-300 group-hover:text-white">
                  {service.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#667085] transition duration-300 group-hover:text-white/74">
                  {service.summary}
                </p>
                <div className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold text-[#111827] transition duration-300 group-hover:text-[#d8bd65]">
                  Learn more
                  <ArrowUpRight className="size-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function UpcomingSection() {
  return (
    <section className="bg-white px-6 py-16 md:px-0 md:py-24">
      <div className="mx-auto grid max-w-[1242px] overflow-hidden rounded-[8px] bg-[#111827] shadow-[0_30px_90px_rgba(17,24,39,0.16)] md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[320px]">
          <Image
            src="/assets/home/upcoming.jpg"
            alt="Concert crowd with stage lights"
            fill
            sizes="(min-width: 1280px) 560px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="p-8 text-white md:p-12">
          <div className="flex items-center gap-2.5">
            <motion.span
              className="block size-2.5 bg-[#d8bd65]"
              initial={{ opacity: 0.4 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-sm font-bold tracking-[0.16em] text-[#d8bd65] uppercase">
              Upcoming
            </span>
          </div>

          <div className="mt-16 max-w-[560px]">
            <div className="flex items-center gap-2.5">
              <Image
                src="/assets/home/mic.svg"
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
              <h3 className="font-display text-[32px] leading-tight font-bold md:text-[44px]">
                Anirudh Music Festival
              </h3>
            </div>
            <div className="mt-6 h-px w-full bg-white/18" />
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              <EventDetail icon="/assets/home/time.svg">
                <span>Oct 12, 2026</span>
                <span>7pm to 10pm</span>
              </EventDetail>
              <EventDetail icon="/assets/home/event-location.svg">
                <span>Nehru Stadium, Chennai</span>
              </EventDetail>
              <EventDetail icon="/assets/home/ticket.svg">
                <span>Book My Show</span>
              </EventDetail>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventDetail({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2.5 text-sm font-semibold text-white/78">
      <Image src={icon} alt="" width={28} height={28} className="size-6" />
      <p className="flex flex-col leading-normal">{children}</p>
    </div>
  );
}

function Footer() {
  const quickLinks = navItems.filter((item) => item.label !== "Home");

  return (
    <footer className="bg-[#0b1420] px-6 text-white md:px-0">
      <div className="mx-auto max-w-[1240px] py-10 md:py-12">
        <div className="grid gap-10 border-b border-white/10 pb-9 lg:grid-cols-[0.8fr_1.55fr] lg:gap-16">
          <div className="max-w-[340px]">
            <Image
              src="/assets/logo/sathriyan-group-logo-no-bg.png"
              alt="Sathriyan Group"
              width={420}
              height={160}
              className="h-auto w-[185px] object-contain"
            />
            <p className="font-display mt-5 text-xl leading-tight font-bold md:text-[26px]">
              {companyProfile.tagline}
            </p>
            <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/56">
              {companyProfile.summary}
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {socialIcons.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/5 transition duration-300 hover:border-[#d8bd65] hover:bg-[#d8bd65]"
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="size-6 object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[0.7fr_1.25fr_0.95fr]">
            <FooterColumn title="Company">
              <div className="grid gap-3">
                {quickLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm font-semibold text-white/58 transition duration-300 hover:text-[#d8bd65]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </FooterColumn>

            <FooterColumn title="Divisions">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {companyDivisions.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group flex items-center justify-between gap-3 text-sm font-semibold text-white/58 transition duration-300 hover:text-[#d8bd65]"
                  >
                    <span>{service.name}</span>
                    <ArrowUpRight className="size-3.5 opacity-0 transition duration-300 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </FooterColumn>

            <FooterColumn title="Office">
              <div className="flex flex-col gap-4 text-sm font-semibold text-white/58">
                <FooterContact icon="/assets/home/location.svg">
                  {contactInfo.address.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </FooterContact>
                <FooterContact icon="/assets/home/phone-icon.svg">
                  <span>{contactInfo.phone}</span>
                </FooterContact>
                <FooterContact icon="/assets/home/mail.svg">
                  <span>{contactInfo.email}</span>
                </FooterContact>
              </div>
            </FooterColumn>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-xs font-semibold tracking-wide text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <span>Copyright 2026 Sathriyan Group. All rights reserved.</span>
          <span>Strength in Unity. Growth in Diversity.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xs font-bold tracking-[0.18em] text-[#d8bd65] uppercase">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function FooterContact({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <Image
        src={icon}
        alt=""
        width={18}
        height={20}
        className="mt-0.5 size-4 shrink-0 opacity-64"
      />
      <p className="flex flex-col leading-normal">{children}</p>
    </div>
  );
}
