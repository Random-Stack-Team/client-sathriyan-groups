import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Header } from "@/components/site/header";
import { companyDivisions, companyProfile } from "@/lib";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socialItems = [
  {
    name: "Instagram",
    icon: "/assets/home/instagram.png",
    iconClassName: "size-8",
  },
  {
    name: "WhatsApp",
    icon: "/assets/home/whatsapp.png",
    iconClassName: "size-7",
  },
  { name: "Phone", icon: "/assets/home/phone.png", iconClassName: "size-7" },
];

const heroStats = [
  { value: "07", label: "group divisions" },
  { value: "07", label: "sectors covered" },
  { value: "03", label: "core values" },
];

const ecosystemClusters = [
  {
    title: "Property",
    divisions: ["Sathriyan Builders", "Landmark Realty"],
    description:
      "Development, construction, sales, leasing, and property advisory working as one real estate pipeline.",
  },
  {
    title: "Brand Experience",
    divisions: ["Boldmark Agency", "Nexgen Events"],
    description:
      "Creative identity, campaigns, launches, exhibitions, and live brand moments shaped together.",
  },
  {
    title: "Growth",
    divisions: ["InterWorld Link", "NextWave Advisors", "Sathriyan Foods"],
    description:
      "Trade access, advisory support, and hospitality ventures built for scalable business expansion.",
  },
];

export function LandingPage() {
  return (
    <main className="bg-brand-surface text-brand-ink min-h-screen overflow-x-hidden">
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
    <section className="bg-brand-ink-muted relative min-h-[720px] overflow-hidden md:min-h-[820px]">
      <Image
        src="/assets/home/hero.jpg"
        alt="Luxury building exterior surrounded by palms"
        fill
        priority
        className="object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,20,32,0.9)_0%,rgba(10,20,32,0.7)_46%,rgba(10,20,32,0.18)_100%)]" />
      <div className="from-brand-ink-muted/80 absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t to-transparent" />
      <Header navItems={navItems} />

      <div className="relative z-10 mx-auto grid min-h-[720px] w-full max-w-[1240px] items-end px-6 pt-32 pb-10 md:min-h-[820px] md:grid-cols-[1fr_372px] md:gap-20 md:px-0 md:pb-16">
        <Reveal className="max-w-[760px] text-white" y={36}>
          <p className="text-brand-gold mb-6 text-xs font-bold tracking-[0.24em] uppercase">
            Diversified Group of Companies
          </p>
          <h1 className="font-display max-w-[760px] text-[42px] leading-[1.04] font-bold md:text-[76px]">
            {companyProfile.tagline}
          </h1>
          <p className="mt-7 max-w-[660px] text-[17px] leading-8 text-white/78 md:text-xl md:leading-9">
            {companyProfile.summary}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <Link
              href="/services"
              className="group ease-brand hover:text-brand-gold inline-flex items-center gap-3 text-sm font-bold text-white transition duration-700"
            >
              <span>Explore group</span>
              <span className="group-hover:border-brand-gold/70 grid size-7 place-items-center border border-white/22 transition duration-700 group-hover:translate-x-1">
                <ArrowUpRight className="size-3.5" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="group ease-brand inline-flex items-center gap-3 text-sm font-semibold text-white/68 transition duration-700 hover:text-white"
            >
              <span className="grid size-7 place-items-center border border-white/18 transition duration-700 group-hover:border-white/60">
                <ArrowUpRight className="size-3.5 rotate-45 transition duration-700 group-hover:rotate-0" />
              </span>
              <span>Contact office</span>
            </Link>
          </div>
        </Reveal>

        <Reveal
          className="mt-10 hidden text-white md:block"
          delay={0.14}
          y={28}
        >
          <div className="border border-white/16 bg-white/8 p-5 backdrop-blur-xl">
            <p className="text-xs font-bold tracking-[0.18em] text-white/58 uppercase">
              Operating across
            </p>
            <div className="mt-5 grid gap-4">
              {companyDivisions.slice(0, 5).map((division) => (
                <Link
                  key={division.slug}
                  href={`/services/${division.slug}`}
                  className="group flex items-center justify-between border-b border-white/12 pb-4 text-sm font-bold text-white/86 transition duration-700 hover:text-white"
                >
                  <span>{division.name}</span>
                  <ArrowUpRight className="text-brand-gold size-4 opacity-0 transition duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 border-y border-white/14 py-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="border-r border-white/12 px-4 first:pl-0 last:border-r-0 last:pr-0"
              >
                <p className="font-display text-[30px] leading-none font-bold text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-[11px] leading-4 font-semibold text-white/52">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FloatingSocialLinks() {
  return (
    <div className="fixed top-1/2 right-4 z-50 flex -translate-y-1/2 flex-col items-center gap-2.5 md:right-8">
      {socialItems.map((item) => (
        <div
          key={item.name}
          aria-label={item.name}
          className="hover:border-brand-gold/70 hover:bg-brand-gold/22 grid size-11 place-items-center rounded-full border border-white/24 bg-white/12 text-white shadow-[0_14px_34px_rgba(17,24,39,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-x-1"
        >
          <Image
            src={item.icon}
            alt=""
            width={32}
            height={32}
            className={`${item.iconClassName} object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.16)]`}
          />
        </div>
      ))}
    </div>
  );
}

function OverviewSection() {
  return (
    <section className="bg-white px-6 py-20 md:px-0 md:py-28">
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="grid gap-12 border-b border-black/8 pb-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-brand-gold-deep text-xs font-bold tracking-[0.22em] uppercase">
              Group Overview
            </p>
            <h2 className="font-display text-brand-ink mt-5 max-w-[620px] text-[38px] leading-[1.02] font-bold md:text-[64px]">
              Built as one group. Operated through focused divisions.
            </h2>
            <div className="mt-10 grid max-w-[420px] grid-cols-2 border-y border-black/10 py-6">
              <div className="border-r border-black/10 pr-6">
                <p className="font-display text-[42px] leading-none font-bold">
                  07
                </p>
                <p className="text-brand-muted mt-2 text-xs font-bold tracking-[0.14em] uppercase">
                  divisions
                </p>
              </div>
              <div className="pl-6">
                <p className="font-display text-[42px] leading-none font-bold">
                  03
                </p>
                <p className="text-brand-muted mt-2 text-xs font-bold tracking-[0.14em] uppercase">
                  foundations
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-brand-text max-w-[720px] text-xl leading-10">
              Sathriyan Group brings together independent business divisions
              across property, branding, events, advisory, trade, and
              hospitality. Each vertical has its own focus, while the group
              structure creates shared trust, reach, and operational strength.
            </p>

            <div className="mt-12 grid border-t border-black/8">
              {companyDivisions.slice(0, 5).map((division) => (
                <Link
                  key={division.slug}
                  href={`/services/${division.slug}`}
                  className="group ease-brand grid gap-3 border-b border-black/8 py-5 transition duration-700 md:grid-cols-[0.42fr_1fr_auto] md:items-center"
                >
                  <span className="text-brand-muted text-xs font-bold tracking-[0.16em] uppercase">
                    {division.sector}
                  </span>
                  <span className="text-brand-ink group-hover:text-brand-gold-deep text-lg font-bold transition duration-700">
                    {division.name}
                  </span>
                  <ArrowUpRight className="text-brand-muted-light group-hover:text-brand-gold-deep size-4 opacity-70 transition duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-0 pt-10">
          {companyProfile.foundations.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="grid gap-4 border-b border-black/8 py-7 last:border-b-0 md:grid-cols-[180px_0.55fr_1fr] md:items-start">
                <span className="text-brand-muted-light text-xs font-bold">
                  0{index + 1}
                </span>
                <h3 className="text-brand-ink text-xl font-bold">
                  {item.title}
                </h3>
                <p className="text-brand-muted max-w-[520px] text-sm leading-7 md:justify-self-end">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="bg-brand-surface px-6 py-16 md:px-0 md:py-24">
      <div className="mx-auto max-w-[1242px]">
        <Reveal className="grid gap-8 md:grid-cols-[460px_1fr] md:items-end">
          <div>
            <p className="text-brand-gold-deep text-xs font-bold tracking-[0.2em] uppercase">
              Group Ecosystem
            </p>
            <h2 className="font-display mt-4 text-[34px] leading-tight font-bold md:text-[56px]">
              One group, connected by purpose.
            </h2>
          </div>
          <p className="text-brand-muted max-w-[650px] text-base leading-8 md:text-lg">
            The homepage introduces how Sathriyan Group works as an ecosystem.
            Detailed service cards and individual offerings can live on the
            dedicated Services page.
          </p>
        </Reveal>

        <Reveal
          className="rounded-brand shadow-brand-soft mt-14 grid overflow-hidden bg-white ring-1 ring-black/5 lg:grid-cols-[0.95fr_1.05fr]"
          y={34}
        >
          <div className="bg-brand-ink relative min-h-[420px]">
            <Image
              src="/assets/home/construction.jpg"
              alt="Sathriyan Group construction and real estate ecosystem"
              fill
              sizes="(min-width: 1024px) 590px, 100vw"
              className="object-cover opacity-84"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.05)_0%,rgba(17,24,39,0.72)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-10">
              <p className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase">
                Operating Model
              </p>
              <h3 className="font-display mt-4 max-w-[430px] text-[32px] leading-tight font-bold md:text-[44px]">
                Divisions that support each other from idea to execution.
              </h3>
            </div>
          </div>

          <div className="p-6 md:p-8 lg:p-10">
            <div className="grid gap-px overflow-hidden rounded-[8px] bg-black/8">
              {ecosystemClusters.map((cluster, index) => (
                <article key={cluster.title} className="bg-white p-6">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <span className="text-brand-muted-light text-xs font-bold">
                        0{index + 1}
                      </span>
                      <h3 className="font-display text-brand-ink mt-3 text-2xl font-bold">
                        {cluster.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap justify-end gap-2">
                      {cluster.divisions.map((division) => (
                        <span
                          key={division}
                          className="bg-brand-surface text-brand-muted rounded-full px-3 py-1 text-[11px] font-bold"
                        >
                          {division}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-brand-muted mt-5 max-w-[620px] text-sm leading-7">
                    {cluster.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-black/8 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-brand-ink text-sm font-bold">
                  Explore all business divisions
                </p>
                <p className="text-brand-muted mt-1 text-sm">
                  {companyDivisions.length} focused verticals under Sathriyan
                  Group.
                </p>
              </div>
              <Link
                href="/services"
                className="group border-brand-ink/24 text-brand-ink ease-brand hover:border-brand-gold hover:text-brand-gold-deep inline-flex shrink-0 items-center justify-center gap-3 border-b pb-1.5 text-sm font-bold transition duration-700"
              >
                <span>Services page</span>
                <ArrowUpRight className="size-4 transition duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function UpcomingSection() {
  return (
    <section className="bg-white px-6 py-16 md:px-0 md:py-24">
      <div className="mx-auto max-w-[1242px]">
        <Reveal className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-brand-gold-deep text-xs font-bold tracking-[0.2em] uppercase">
              Group Highlights
            </p>
            <h2 className="font-display text-brand-ink mt-4 text-[34px] leading-tight font-bold md:text-[52px]">
              Current work across the group.
            </h2>
          </div>
          <p className="text-brand-muted max-w-[520px] text-base leading-8">
            A focused view of active construction work and upcoming event
            activity from Sathriyan Group divisions.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <ShowcaseCard
              image="/assets/home/construction.jpg"
              eyebrow="Undergoing Project"
              division="Sathriyan Builders"
              title="Sathriyan Builders Ongoing Project"
              description="An active project showcase from the real estate and construction division."
              href="/services/sathriyan-builders"
              details={[
                { label: "Project", value: "Ongoing development" },
                { label: "Division", value: "Sathriyan Builders" },
                { label: "Category", value: "Real estate and construction" },
                { label: "Status", value: "In progress" },
              ]}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ShowcaseCard
              image="/assets/home/upcoming.jpg"
              eyebrow="Upcoming Event"
              division="Nexgen Events"
              title="Anirudh Music Festival"
              description="A live entertainment event presented through the Nexgen Events division."
              href="/services/nexgen-events"
              details={[
                { label: "Date", value: "Oct 12, 2026" },
                { label: "Time", value: "7pm to 10pm" },
                { label: "Venue", value: "Nehru Stadium, Chennai" },
                { label: "Booking", value: "Book My Show" },
              ]}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ShowcaseCard({
  image,
  eyebrow,
  division,
  title,
  description,
  href,
  details,
}: {
  image: string;
  eyebrow: string;
  division: string;
  title: string;
  description: string;
  href: string;
  details: Array<{
    label: string;
    value: string;
  }>;
}) {
  return (
    <article className="group rounded-brand bg-brand-ink shadow-brand ease-brand overflow-hidden border border-white/10 transition duration-[1100ms] hover:-translate-y-1 hover:shadow-[0_30px_78px_rgba(17,24,39,0.2)]">
      <div className="relative min-h-[500px] sm:min-h-[470px] lg:min-h-[490px] xl:min-h-[470px]">
        <Image
          src={image}
          alt={`${division} ${title}`}
          fill
          sizes="(min-width: 1024px) 610px, 100vw"
          className="ease-brand object-cover opacity-100 saturate-[1.05] transition duration-[1400ms] group-hover:scale-[1.045] group-hover:saturate-[1.12]"
        />
        <div className="ease-brand absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.02)_0%,rgba(17,24,39,0.22)_42%,rgba(17,24,39,0.88)_100%)] transition duration-[1200ms] group-hover:bg-[linear-gradient(180deg,rgba(17,24,39,0.08)_0%,rgba(17,24,39,0.42)_48%,rgba(17,24,39,0.96)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_100%)] opacity-70" />
        <div className="absolute inset-0 flex flex-col justify-end p-5 text-white sm:p-6">
          <div className="ease-brand mb-3 transition duration-[1150ms] md:group-hover:-translate-y-1">
            <div className="border-brand-gold-bright inline-flex items-center gap-2.5 border-l-2 bg-black/18 py-1.5 pr-3 pl-3 backdrop-blur-xl">
              <span className="bg-brand-gold-bright size-2.5 animate-pulse rounded-full shadow-[0_0_18px_rgba(241,215,120,0.75)]" />
              <span className="text-brand-gold-bright text-xs font-black tracking-[0.18em] uppercase drop-shadow-[0_6px_16px_rgba(0,0,0,0.45)]">
                {eyebrow}
              </span>
            </div>
            <span className="mt-2 block text-[10px] font-bold tracking-[0.16em] text-white/74 uppercase">
              {division}
            </span>
          </div>
          <h3 className="font-display ease-brand max-w-[460px] text-[25px] leading-tight font-bold text-white drop-shadow-[0_12px_28px_rgba(0,0,0,0.35)] transition duration-[1150ms] md:text-[30px] md:group-hover:-translate-y-1">
            {title}
          </h3>

          <div className="rounded-brand bg-brand-ink-soft/72 ease-brand md:group-hover:bg-brand-ink-soft/72 mt-3 origin-bottom overflow-hidden border border-white/18 p-4 opacity-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_54px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition-all duration-[1250ms] md:pointer-events-none md:invisible md:max-h-0 md:translate-y-4 md:scale-[0.985] md:border-transparent md:bg-transparent md:p-0 md:opacity-0 md:shadow-none md:backdrop-blur-none md:group-hover:pointer-events-auto md:group-hover:visible md:group-hover:max-h-[340px] md:group-hover:translate-y-0 md:group-hover:scale-100 md:group-hover:border-white/18 md:group-hover:p-4 md:group-hover:opacity-100 md:group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_54px_rgba(0,0,0,0.22)] md:group-hover:backdrop-blur-2xl">
            <p className="ease-brand max-w-[520px] text-sm leading-6 text-white/82 transition duration-[1100ms] md:translate-y-1.5 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
              {description}
            </p>
            <dl className="mt-4 grid gap-0 divide-y divide-white/10 border-y border-white/10">
              {details.map((detail) => (
                <div
                  key={`${detail.label}-${detail.value}`}
                  className="ease-brand grid gap-1 py-2 transition duration-[1100ms] sm:grid-cols-[96px_1fr] sm:gap-4 md:translate-y-1.5 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
                >
                  <dt className="text-brand-gold-bright text-[10px] font-bold tracking-[0.16em] uppercase">
                    {detail.label}
                  </dt>
                  <dd className="text-sm leading-5 font-semibold text-white/88">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
            <Link
              href={href}
              className="group ease-brand hover:text-brand-gold-bright mt-4 inline-flex items-center gap-3 border-t border-white/14 pt-3 text-xs font-bold tracking-[0.08em] text-white/78 uppercase transition duration-700"
            >
              <span>View details</span>
              <ArrowUpRight className="size-3.5 transition duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function Footer() {
  const quickLinks = navItems.filter((item) => item.label !== "Home");

  return (
    <footer className="bg-brand-ink-soft px-6 text-white md:px-0">
      <Reveal className="mx-auto max-w-[1240px] py-12" y={24}>
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1fr_1.35fr] lg:items-start">
          <div>
            <div className="inline-flex">
              <Image
                src="/assets/logo/sathriyan-generated-logo-light.png"
                alt="Sathriyan Group"
                width={1128}
                height={1108}
                className="h-24 w-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)] md:h-32"
              />
            </div>
            <h2 className="font-display mt-7 max-w-[560px] text-[30px] leading-tight font-bold md:text-[42px]">
              {companyProfile.tagline}
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <p className="max-w-[640px] text-sm leading-7 text-white/58 md:text-base">
                {companyProfile.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {companyDivisions.map((division) => (
                  <Link
                    key={division.slug}
                    href={`/services/${division.slug}`}
                    className="hover:border-brand-gold/60 rounded-full border border-white/10 px-3 py-1.5 text-xs font-bold text-white/54 transition duration-300 hover:text-white"
                  >
                    {division.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="flex flex-wrap gap-3 lg:justify-end">
                {quickLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="hover:text-brand-gold text-sm font-bold text-white/58 transition duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-xs font-semibold tracking-wide text-white/36 sm:flex-row sm:items-center sm:justify-between">
          <span>Copyright 2026 Sathriyan Group. All rights reserved.</span>
          <span>Crafted By Random Stack Technologies</span>
        </div>
      </Reveal>
    </footer>
  );
}
