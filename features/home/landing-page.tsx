"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Construction",
    image: "/assets/home/construction.jpg",
  },
  {
    name: "Real Estate",
    image: "/assets/home/real-estate.jpg",
  },
  {
    name: "Nexgen Events",
    image: "/assets/home/events.jpg",
  },
  {
    name: "Boldmark Agency",
    image: "/assets/home/boldmark.jpg",
  },
  {
    name: "InterWorld Link",
    image: "/assets/home/interworld.jpg",
  },
  {
    name: "NextWave Advisor's",
    image: "/assets/home/advisor.jpg",
  },
  {
    name: "Foods & Hospitality",
    image: "/assets/home/food.jpg",
  },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const footerServices = [
  "Construction",
  "Boldmark Agency",
  "Nextgen Events",
  "Landmark Realty",
  "Interworld Link",
  "Nextwave Advisor's",
  "Foods & Hospitality",
];

const socialIcons = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: "/assets/home/instagram.png",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/911234567890",
    icon: "/assets/home/whatsapp.png",
  },
  {
    name: "Phone",
    href: "tel:+911234567890",
    icon: "/assets/home/phone.png",
  },
];

export function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7fbff] text-[#0b1c30]">
      <FloatingSocialLinks />
      <HeroSection />
      <ServicesSection />
      <UpcomingSection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[720px] overflow-hidden md:min-h-[800px]">
      <Image
        src="/assets/home/hero.jpg"
        alt="Luxury building exterior surrounded by palms"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#0b1c30]/30" />
      <Header />
      <div className="relative z-10 mx-auto flex min-h-[720px] w-full max-w-[1240px] items-end px-6 pt-28 pb-20 md:min-h-[800px] md:px-0 md:pb-[130px]">
        <div className="max-w-[750px] text-[#f5f5f5]">
          <h1 className="font-display w-[calc(100vw-48px)] max-w-[342px] text-[32px] leading-[1.08] font-bold tracking-[-0.02em] md:w-auto md:max-w-[760px] md:text-[64px]">
            Strength in Unity &<br className="md:hidden" /> Growth in Diversity
          </h1>
          <p className="mt-[15px] w-[calc(100vw-48px)] max-w-[342px] text-sm leading-[1.45] text-[#f5f5f5] md:w-auto md:max-w-[690px] md:text-2xl">
            Sathriyan Group is a diversified conglomerate with ventures in
            construction, real estate, branding, events, consultancy,
            international trade, and food & hospitality.
          </p>
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 h-[60px]">
      <div className="mx-auto flex h-full max-w-[1240px] items-center justify-between px-6 md:px-0">
        <Link href="/" className="flex items-center gap-3 text-white">
          <Image
            src="/assets/logo/sathriyan-logo-full.png"
            alt="Sathriyan Group"
            width={230}
            height={90}
            priority
            className="h-auto w-[120px] object-contain md:w-[170px]"
          />
        </Link>

        <nav className="hidden items-center rounded-full border border-[#e5e7eb] bg-white/0 px-[25px] py-[9px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-3 text-sm leading-5 text-[#f5f5f5] transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="w-[120px] md:w-[170px]" />
      </div>
    </header>
  );
}

function FloatingSocialLinks() {
  return (
    <div className="fixed top-1/2 right-4 z-50 flex -translate-y-1/2 flex-col items-center gap-3 md:right-8">
      {socialIcons.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          aria-label={item.name}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
          className="group relative grid size-[42px] place-items-center overflow-hidden rounded-full bg-white/15 shadow-[0_10px_30px_rgba(11,28,48,0.25)] ring-1 ring-white/30 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-white/30 hover:shadow-[0_14px_36px_rgba(11,28,48,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <Image
            src={item.icon}
            alt=""
            width={32}
            height={32}
            className="size-8 object-contain transition duration-300 group-hover:scale-110"
          />
        </Link>
      ))}
    </div>
  );
}

function ServicesSection() {
  return (
    <section className="px-6 py-14 md:px-0 md:py-[75px]">
      <div className="mx-auto max-w-[1242px]">
        <h2 className="font-display text-center text-[26px] leading-tight font-light text-wrap md:text-5xl md:leading-none">
          Our Business Services
        </h2>

        <div className="mt-10 grid gap-[25px] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.name}
              className={`group relative h-[420px] overflow-hidden rounded-[10px] md:h-[500px] ${
                index === services.length - 1 ? "lg:col-start-2" : ""
              }`}
            >
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-[10px] bg-[#0b1c30]/20" />
              <div className="absolute inset-x-[29px] bottom-[29px] rounded-full bg-[#f5f5f5]/20 px-5 py-3 text-center text-xl font-bold text-[#f5f5f5] backdrop-blur-sm">
                {service.name}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function UpcomingSection() {
  return (
    <section className="px-6 pb-16 md:px-0 md:pb-[111px]">
      <div className="relative mx-auto h-[360px] max-w-[1242px] overflow-hidden rounded-[20px] md:h-[400px]">
        <Image
          src="/assets/home/upcoming.jpg"
          alt="Concert crowd with stage lights"
          fill
          sizes="(min-width: 1280px) 1242px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0b1c30]/30" />
        <div className="absolute top-[15px] left-[27px] flex items-center gap-2.5 text-white">
          <motion.span
            className="block size-2.5 rounded-full bg-white"
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: [0, 0, 1, 1, 0.21691, 0.03616, 0],
              scale: [1, 1.2, 1.2, 1.129, 1.068, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.1, 0.45, 0.7, 0.95, 0.9999, 1],
            }}
          />
          <span className="text-2xl font-bold">Upcomings</span>
        </div>

        <div className="absolute inset-x-6 bottom-10 mx-auto flex max-w-[628px] flex-col items-center text-[#f5f5f5] md:bottom-[57px]">
          <div className="flex items-center gap-2.5">
            <Image
              src="/assets/home/mic.svg"
              alt=""
              width={24}
              height={24}
              className="size-6"
            />
            <h3 className="text-center text-[28px] leading-tight font-semibold md:text-[32px]">
              Anirudth Music Festival
            </h3>
          </div>
          <div className="mt-3 h-px w-[min(365px,80%)] bg-white" />
          <div className="mt-4 grid w-full gap-6 text-center sm:grid-cols-3">
            <EventDetail icon="/assets/home/time.svg">
              <span>Oct 12, 2026</span>
              <span>7pm to 10pm</span>
            </EventDetail>
            <EventDetail icon="/assets/home/event-location.svg">
              <span>Nehru Stadium,Chennai.</span>
            </EventDetail>
            <EventDetail icon="/assets/home/ticket.svg">
              <span>Book My Show</span>
            </EventDetail>
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
    <div className="flex flex-col items-center gap-2.5 text-base font-medium">
      <Image src={icon} alt="" width={28} height={28} className="size-6" />
      <p className="flex flex-col leading-normal">{children}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0b1c30] px-6 text-white md:px-0">
      <div className="mx-auto max-w-[1240px] pt-[68px] pb-4">
        <div className="grid gap-12 md:grid-cols-[169px_1fr_auto] md:gap-[225px]">
          <div className="flex size-[169px] flex-col items-center justify-center">
            <Image
              src="/assets/logo/sathriyan-logo-emblem.png"
              alt="Sathriyan Group emblem"
              width={160}
              height={160}
              className="size-[130px] object-contain md:size-[160px]"
            />
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl font-bold">Our Services</h2>
              <div className="mt-[22px] grid grid-cols-1 gap-x-8 gap-y-5 text-base font-medium sm:grid-cols-2">
                {footerServices.map((service) => (
                  <Link
                    key={service}
                    href="/services"
                    className="hover:underline"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold">Office</h2>
              <div className="mt-[26px] flex flex-col gap-[26px] text-base font-medium">
                <FooterContact icon="/assets/home/location.svg">
                  <span>12,Bheema Nagar,</span>
                  <span>Trichy,620008.</span>
                </FooterContact>
                <FooterContact icon="/assets/home/phone-icon.svg">
                  <span>91+ 1234567890</span>
                </FooterContact>
                <FooterContact icon="/assets/home/mail.svg">
                  <span>abc@gmail.com</span>
                </FooterContact>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/35 pt-[26px]">
          <div className="flex items-center justify-center gap-2.5 text-base font-medium">
            <Image
              src="/assets/home/copyright.svg"
              alt=""
              width={12}
              height={12}
              className="size-3"
            />
            <span>All Rights Reserved.2026</span>
          </div>
        </div>
      </div>
    </footer>
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
    <div className="flex items-center gap-3">
      <Image src={icon} alt="" width={18} height={20} className="shrink-0" />
      <p className="flex flex-col leading-normal">{children}</p>
    </div>
  );
}
