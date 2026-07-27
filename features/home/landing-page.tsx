import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { companyDivisions, companyProfile, navItems } from "@/lib";

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

export function LandingPage() {
  return (
    <main className="bg-brand-surface text-brand-ink min-h-screen">
      <FloatingSocialLinks />
      <HeroSection />
      <OverviewSection />
      <AboutIntroSection />
      <UpcomingSection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="bg-brand-ink-muted relative min-h-[var(--hero-min-height-mobile)] overflow-hidden md:min-h-[var(--hero-min-height)]">
      <Image
        src="/assets/home/hero.jpg"
        alt="Luxury building exterior surrounded by palms"
        fill
        sizes="100vw"
        priority
        className="object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,20,32,0.9)_0%,rgba(10,20,32,0.7)_46%,rgba(10,20,32,0.18)_100%)]" />
      <div className="from-brand-ink-muted/80 absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t to-transparent" />
      <Header navItems={navItems} />

      <div className="relative z-10 mx-auto grid min-h-[var(--hero-min-height-mobile)] w-full max-w-[1240px] items-end px-6 pt-32 pb-10 md:min-h-[var(--hero-min-height)] md:grid-cols-[1fr_372px] md:gap-20 md:px-0 md:pb-16">
        <Reveal className="max-w-[760px] text-white" y={36}>
            <p className="text-brand-gold mb-6 text-xs font-bold tracking-[0.24em] uppercase">
              Sathriyan Group
            </p>
          <h1 className="font-display max-w-[760px] text-[42px] leading-[1.04] font-bold md:text-[76px]">
            {companyProfile.tagline}
          </h1>
          <p className="mt-7 max-w-[660px] text-[17px] leading-8 text-white/78 md:text-xl md:leading-9">
            {companyProfile.summary}
          </p>
          <div className="mt-10 max-w-[560px] border-y border-white/16 py-4">
            <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
              <Link
                href="/services"
                className="group ease-brand hover:text-brand-gold grid gap-1 text-white transition duration-700 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-5"
              >
                <span>
                  <span className="block text-base font-bold">
                    Explore the group
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-white/56 transition duration-700 group-hover:text-white/72">
                    What we do and who we do it for.
                  </span>
                </span>
                <span className="group-hover:border-brand-gold/70 mt-2 grid size-9 place-items-center border border-white/18 transition duration-700 group-hover:translate-x-1 sm:mt-0">
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>

              <Link
                href="/contact"
                className="group ease-brand inline-flex items-center justify-between gap-4 border-t border-white/10 pt-3 text-sm font-semibold text-white/64 transition duration-700 hover:text-white sm:border-t-0 sm:border-l sm:pt-0 sm:pl-6"
              >
                <span>Contact office</span>
                <ArrowUpRight className="text-brand-gold size-3.5 rotate-45 transition duration-700 group-hover:rotate-0" />
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal
          className="hidden text-white md:block"
          delay={0.14}
          y={28}
        >
          <div className="border border-white/16 bg-white/15 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl">
            <p className="text-xs font-bold tracking-[0.18em] text-white/58 uppercase">
              First look
            </p>
            <p className="mt-3 max-w-[290px] text-sm leading-6 text-white/58">
              A look at property, events, and brand work across the group.
            </p>
            <div className="mt-5 grid gap-4">
              {companyDivisions.slice(0, 3).map((division) => (
                <Link
                  key={division.slug}
                  href={`/services/${division.slug}`}
                  className="group grid gap-1 border-b border-white/12 pb-4 transition duration-700 hover:text-white"
                >
                  <span className="text-brand-gold text-[10px] font-bold tracking-[0.16em] uppercase">
                    {division.sector}
                  </span>
                  <span className="flex items-center justify-between gap-4 text-sm font-bold text-white/86">
                    {division.name}
                    <ArrowUpRight className="size-4 opacity-0 transition duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/services"
              className="hover:text-brand-gold mt-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.12em] text-white/62 uppercase transition duration-700"
            >
              View all divisions
              <ArrowUpRight className="size-3.5" />
            </Link>
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
          className="hover:border-brand-gold/70 hover:bg-brand-gold/22 grid size-11 place-items-center rounded-full border border-white/24 bg-[rgba(11,28,48,0.7)] text-white shadow-[0_14px_34px_rgba(17,24,39,0.18)] transition duration-300 hover:-translate-x-1"
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
              Multiple businesses. One group.
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
              Independent businesses, each with its own team and focus.
              From construction to events to trade, they work separately but
              share the same way of doing things.
            </p>

            <div className="mt-12 grid border-t border-black/8">
              {companyDivisions.map((division) => (
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

        <Reveal className="pt-14">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-brand-gold-deep text-xs font-bold tracking-[0.2em] uppercase">
                Operating Code
              </p>
              <h3 className="font-display text-brand-ink mt-4 max-w-[420px] text-[32px] leading-tight font-bold md:text-[44px]">
                How we work. Every time.
              </h3>
            </div>
            <p className="text-brand-muted max-w-[620px] text-base leading-8 lg:justify-self-end">
              Different markets. Same principles. Every division follows the
              same playbook, because consistency is what builds reputation.
            </p>
          </div>

          <div className="mt-10 border-y border-black/8 py-8">
            <div className="grid gap-0 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
              {companyProfile.foundations.map((item, index) => (
                <div key={item.title} className="contents">
                  <article className="group py-6 lg:py-0">
                    <div className="flex items-center justify-between gap-4 lg:block">
                      <span className="font-display text-brand-muted-light text-3xl leading-none font-bold">
                        0{index + 1}
                      </span>
                      <span className="hidden h-px flex-1 bg-black/10 sm:block lg:mt-7" />
                    </div>
                    <h4 className="font-display text-brand-ink mt-4 text-[28px] leading-tight font-bold">
                      {item.title}
                    </h4>
                    <p className="text-brand-muted mt-4 max-w-[330px] text-sm leading-7">
                      {item.description}
                    </p>
                  </article>

                  {index < companyProfile.foundations.length - 1 ? (
                    <div
                      aria-hidden="true"
                      className="text-brand-gold-deep hidden px-7 lg:flex lg:items-start lg:pt-12"
                    >
                      <span className="font-display text-5xl leading-none">
                        +
                      </span>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-black/8 pt-6 lg:flex lg:items-center lg:justify-between">
              <p className="text-brand-muted text-xs font-bold tracking-[0.18em] uppercase">
                Result
              </p>
              <p className="font-display text-brand-ink mt-3 max-w-[780px] text-[28px] leading-tight font-bold md:text-[38px] lg:mt-0 lg:text-right">
                Same standard. Every company. No exceptions.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AboutIntroSection() {
  return (
    <section className="bg-brand-surface px-6 py-18 md:px-0 md:py-28">
      <div className="mx-auto max-w-[1242px]">
        <Reveal className="grid gap-8 md:grid-cols-[0.78fr_1fr] md:items-end">
          <div>
            <p className="text-brand-gold-deep text-xs font-bold tracking-[0.2em] uppercase">
              About Sathriyan Group
            </p>
            <h2 className="font-display mt-4 text-[40px] leading-tight font-bold md:text-[66px]">
              Companies that work together.
            </h2>
          </div>
          <p className="text-brand-muted max-w-[650px] text-base leading-8 md:text-lg">
            We started with one business. Then another. Now there are many,
            each one doing its own thing, all running on the same trust and
            quality.
          </p>
        </Reveal>

        <Reveal
          className="rounded-brand shadow-brand-soft mt-14 grid overflow-hidden bg-white ring-1 ring-black/5 lg:grid-cols-[0.82fr_1.18fr]"
          y={34}
        >
          <div className="bg-brand-ink relative min-h-[440px]">
            <Image
              src="/assets/home/hero.jpg"
              alt="Sathriyan Group corporate profile"
              fill
              sizes="(min-width: 1024px) 590px, 100vw"
              loading="eager"
              className="object-cover opacity-82"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.08)_0%,rgba(17,24,39,0.78)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-10">
              <p className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase">
                Corporate Profile
              </p>
              <h3 className="font-display mt-4 max-w-[430px] text-[32px] leading-tight font-bold md:text-[44px]">
                One project at a time.
              </h3>
            </div>
          </div>

          <div className="p-6 md:p-8 lg:p-10">
            <div className="border-y border-black/8">
              <p className="text-brand-text max-w-[720px] py-7 text-lg leading-9 md:text-xl md:leading-10">
                Every division started with one project. One client. One
                result. That is how you build something real, not by doing
                everything at once, but by doing the first thing well.
              </p>
            </div>

            <div className="mt-8 border-y border-black/8">
              {[
                {
                  label: "Profile",
                  value:
                    "Multiple businesses, each built by people who know their market. No generic playbook, just real experience.",
                },
                {
                  label: "Role",
                  value:
                    "One name across different industries. Clients, partners, and teams know what to expect from a Sathriyan company.",
                },
                {
                  label: "Direction",
                  value:
                    "We add businesses that make sense. Not for the sake of growth, but because they fit and they work.",
                },
              ].map((item) => (
                <article
                  key={item.label}
                  className="grid gap-4 border-b border-black/8 py-5 last:border-b-0 md:grid-cols-[160px_1fr] md:items-start"
                >
                  <p className="text-brand-gold-deep text-xs font-bold tracking-[0.18em] uppercase">
                    {item.label}
                  </p>
                  <p className="text-brand-ink max-w-[620px] text-lg leading-8 font-semibold">
                    {item.value}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-brand-ink text-sm font-bold">
                  Want the full picture?
                </p>
                <p className="text-brand-muted mt-1 text-sm">
                  The About page tells the whole journey, from the first
                  venture to where we are today.
                </p>
              </div>
              <Link
                href="/about"
                className="group border-brand-ink/24 text-brand-ink ease-brand hover:border-brand-gold hover:text-brand-gold-deep inline-flex shrink-0 items-center justify-center gap-3 border-b pb-1.5 text-sm font-bold transition duration-700"
              >
                <span>About page</span>
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
              What we are working on.
            </h2>
          </div>
          <p className="text-brand-muted max-w-[520px] text-base leading-8">
            Active projects and upcoming events from across the group.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <ShowcaseCard
              image="/assets/home/construction.jpg"
              eyebrow="Undergoing Project"
              division="Sathriyan Builders"
              title="Sathriyan Builders Ongoing Project"
              description="Work in progress from the construction and real estate team."
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
              description="A live music event by Nexgen Events."
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
          loading="eager"
          sizes="(min-width: 1024px) 610px, 100vw"
          className="ease-brand object-cover opacity-100 saturate-[1.05] transition duration-[1400ms] group-hover:scale-[1.045] group-hover:saturate-[1.12]"
        />
        <div className="ease-brand absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.02)_0%,rgba(17,24,39,0.22)_42%,rgba(17,24,39,0.88)_100%)] transition duration-[1200ms] group-hover:bg-[linear-gradient(180deg,rgba(17,24,39,0.08)_0%,rgba(17,24,39,0.42)_48%,rgba(17,24,39,0.96)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_100%)] opacity-70" />
        <div className="absolute inset-0 flex flex-col justify-end p-5 text-white sm:p-6">
          <div className="ease-brand mb-3 transition duration-[1150ms] md:group-hover:-translate-y-1">
            <div className="border-brand-gold-bright inline-flex items-center gap-2.5 border-l-2 bg-[rgba(17,24,39,0.6)] py-1.5 pr-3 pl-3">
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

            <div className="rounded-brand bg-[rgba(11,28,48,0.88)] ease-brand md:group-hover:bg-[rgba(11,28,48,0.88)] mt-3 origin-bottom overflow-hidden border border-white/18 p-4 opacity-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_54px_rgba(0,0,0,0.22)] transition-all duration-[1250ms] md:pointer-events-none md:invisible md:max-h-0 md:translate-y-4 md:scale-[0.985] md:border-transparent md:bg-transparent md:p-0 md:opacity-0 md:shadow-none md:group-hover:pointer-events-auto md:group-hover:visible md:group-hover:max-h-[340px] md:group-hover:translate-y-0 md:group-hover:scale-100 md:group-hover:border-white/18 md:group-hover:p-4 md:group-hover:opacity-100 md:group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_54px_rgba(0,0,0,0.22)]">
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
