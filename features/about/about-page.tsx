"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/motion/reveal";

const timelineItems = [
  {
    year: "2021",
    title: "It started with one idea",
    text: "One venture. One goal: build something that actually works for people.",
    image: "/assets/home/construction.jpg",
    imageAlt: "Sathriyan Group foundation milestone",
  },
  {
    year: "2023",
    title: "Many directions, one identity",
    text: "Each business found its market. Each team found its rhythm. One group, many directions.",
    image: "/assets/home/events.jpg",
    imageAlt: "Sathriyan Group portfolio expansion",
  },
  {
    year: "2026",
    title: "Ready for what is next",
    text: "A unified brand, a real presence, and a platform built for what comes next.",
    image: "/assets/home/upcoming.jpg",
    imageAlt: "Sathriyan Group corporate launch",
  },
];

const whyItems = [
  {
    title: "One name people know",
    text: "Multiple businesses, one brand. Clients and partners see one company, not separate entities.",
  },
  {
    title: "Different markets, same quality",
    text: "Property, events, advisory, trade, hospitality. Each one serves its own market, all backed by the same team.",
  },
  {
    title: "Same rules for everyone",
    text: "No division gets special treatment. The same standards apply everywhere, because that is how you build a reputation.",
  },
];

const metrics = [
  { value: 2021, label: "Founded" },
  { value: 5, suffix: "+", label: "Years of Service" },
  { value: 100, suffix: "+", label: "Clients" },
];

const guidingPrinciples = [
  {
    title: "Listen first",
    description:
      "Before we pitch, before we plan, we listen. What does the client actually need? That is where every project starts.",
  },
  {
    title: "Say what you mean",
    description:
      "No hidden fees. No missed deadlines. No surprises. We tell you what to expect, and then we deliver on it.",
  },
  {
    title: "Keep getting better",
    description:
      "What worked yesterday might not work tomorrow. We adapt, we improve, we stay sharp, without cutting corners.",
  },
];

export function AboutPage() {
  return (
    <main className="bg-brand-surface text-brand-ink min-h-screen">
      <AboutHero />
      <CompanyStory />
      <MetricsSection />
      <MissionVision />
      <WhySection />
      <TimelineSection />
      <FounderMessage />
      <BlogIntroSection />
      <AboutCTA />
    </main>
  );
}

/* ─────────────────────────────────────────────
   1. Hero
   ───────────────────────────────────────────── */
function AboutHero() {
  return (
    <section className="bg-brand-ink-soft relative overflow-hidden text-white">
      <Image
        src="/assets/home/hero.jpg"
        alt="Sathriyan Group corporate profile"
        fill
        sizes="100vw"
        priority
        className="object-cover opacity-48"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,28,48,0.96)_0%,rgba(11,28,48,0.78)_56%,rgba(11,28,48,0.34)_100%)]" />
      <div className="relative z-10 mx-auto grid min-h-[var(--hero-min-height-mobile)] max-w-[var(--container-max)] items-center px-6 pt-28 pb-8 md:min-h-[var(--hero-min-height)] md:px-0 md:pt-32 md:pb-10">
        <Reveal className="grid gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-center" y={36}>
          <div>
            <p className="text-brand-gold text-xs font-bold tracking-[0.24em] uppercase">
              About Sathriyan Group
            </p>
            <h1 className="font-display mt-6 max-w-[840px] text-[42px] leading-[1.06] font-bold md:text-[76px] md:leading-[1.03]">
              How one venture became seven.
            </h1>
          </div>
          <div className="border-y border-white/14 py-6 lg:border-y-0 lg:border-l lg:py-3 lg:pl-8">
            <p className="text-base leading-8 text-white/74 md:text-lg">
              Multiple businesses. Construction, real estate, branding, events,
              advisory, trade, and hospitality. Each one doing its own thing,
              all connected by the same values.
            </p>
            <p className="text-brand-muted-light mt-5 text-sm leading-7">
              Founded in 2021, the group runs independent divisions,
              each one focused on its own market, each one built on the same
              trust.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   2. Company Story
   ───────────────────────────────────────────── */
function CompanyStory() {
  return (
    <section className="bg-white px-6 py-20 md:px-0 md:py-28">
      <div className="mx-auto max-w-[var(--container-max)]">
        <Reveal className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative min-h-[560px] overflow-hidden rounded-brand bg-brand-ink">
            <Image
              src="/assets/home/construction.jpg"
              alt="Sathriyan Group construction story"
              fill
              sizes="(min-width: 1024px) 590px, 100vw"
              className="object-cover opacity-88"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.04)_0%,rgba(17,24,39,0.82)_100%)]" />
            <p className="font-display absolute right-6 bottom-6 left-6 text-[42px] leading-tight font-bold text-white md:right-8 md:bottom-8 md:left-8 md:text-[64px]">
              One venture led to another.
            </p>
          </div>

          <div>
            <p className="text-brand-gold-deep text-xs font-bold tracking-[0.22em] uppercase">
              Company Story
            </p>
            <h2 className="font-display mt-5 text-[40px] leading-tight font-bold md:text-[66px]">
              How we got here.
            </h2>
            <div className="mt-8 space-y-6 border-y border-black/8 py-7">
              <p className="text-brand-text text-xl leading-10">
                It started with one question: what do people actually need
                from a business group? The answer was simple: reliability. Do
                what you say. Deliver what you promise. And keep doing it.
              </p>
              <p className="text-brand-muted text-base leading-8">
                The group structure was not about building an empire. It was
                about giving each business the space to grow, while keeping
                the standards that made people trust us in the first place.
              </p>
              <p className="text-brand-muted text-base leading-8">
                From the first division to the seventh, every new venture had
                to earn its place. Not every idea made the cut. The ones that
                did, they are the businesses you see today.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   3. Metrics + Guiding Principles
   ───────────────────────────────────────────── */
function MetricsSection() {
  return (
    <section className="bg-white px-6 pb-20 md:px-0 md:pb-28">
      <Reveal className="mx-auto max-w-[var(--container-max)]">
        <div className="grid overflow-hidden border-y border-black/8 bg-white lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative overflow-hidden bg-brand-ink-soft p-7 text-white md:p-10">
            <div className="absolute right-0 bottom-0 h-px w-2/3 bg-brand-gold/30" />
            <p className="text-brand-gold text-xs font-bold tracking-[0.22em] uppercase">
              Sathriyan Group&apos;s Foundation
            </p>
            <div className="relative mt-10 grid gap-8">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="font-display text-[54px] leading-none font-bold md:text-[76px]">
                    <AnimatedMetric
                      value={metric.value}
                      suffix={metric.suffix}
                    />
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white/52">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-7 md:p-10">
            <p className="text-brand-muted text-xs font-bold tracking-[0.22em] uppercase">
              What Guides Us
            </p>
            <div className="mt-7 grid gap-4">
              {guidingPrinciples.map((principle) => (
                <article
                  key={principle.title}
                  className="group border-l border-black/10 py-2 pl-5 transition duration-700 hover:border-brand-gold-deep"
                >
                  <h3 className="font-display text-brand-ink text-2xl font-bold">
                    {principle.title}
                  </h3>
                  <p className="text-brand-muted mt-2 max-w-[520px] text-sm leading-7">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function AnimatedMetric({
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
      { threshold: 0.45 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number | null = null;
    const duration = 1100;
    const animate = (currentTime: number) => {
      startTime ??= currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * value));
      if (progress < 1) requestAnimationFrame(animate);
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

/* ─────────────────────────────────────────────
   4. Mission & Vision
   ───────────────────────────────────────────── */
function MissionVision() {
  return (
    <section className="bg-white px-6 py-24 md:px-0 md:py-32">
      <div className="mx-auto max-w-[var(--container-max)]">
        <Reveal className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_0.3fr] lg:items-end">
          <div>
            <p className="text-brand-gold-deep text-xs font-bold tracking-[0.24em] uppercase">
              Mission &amp; Vision
            </p>
            <h2 className="font-display mt-6 max-w-[920px] text-[44px] leading-[1.02] font-bold md:text-[72px]">
              A clear direction, built into every division.
            </h2>
          </div>
          <p className="text-brand-muted max-w-[420px] text-base leading-8 lg:justify-self-end">
            Sathriyan Group grows by keeping each company focused, useful, and
            accountable to the same operating standard.
          </p>
        </Reveal>

        <Reveal className="grid overflow-hidden rounded-brand bg-brand-ink-soft shadow-brand lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative min-h-[520px] overflow-hidden">
            <Image
              src="/assets/home/interworld.jpg"
              alt="Sathriyan Group direction and growth"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover opacity-78"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,28,48,0.04)_0%,rgba(11,28,48,0.86)_100%)]" />
            <div className="absolute right-7 bottom-7 left-7 md:right-9 md:bottom-9 md:left-9">
              <p className="text-brand-gold text-xs font-bold tracking-[0.22em] uppercase">
                Strategic Compass
              </p>
              <p className="font-display mt-4 max-w-[520px] text-[38px] leading-tight font-bold text-white md:text-[56px]">
                Focused companies. One group standard.
              </p>
            </div>
          </div>

          <div className="bg-brand-ink-soft p-7 text-white md:p-10 lg:p-12">
            <div className="relative grid gap-8">
              <div className="absolute top-10 bottom-10 left-[18px] hidden w-px bg-white/12 sm:block" />
              {[
                {
                  label: "Mission",
                  title: "Turn practical business needs into dependable outcomes.",
                  text: "We build each Sathriyan division around a clear market need, then serve it with consistent execution, transparent communication, and measurable value.",
                },
                {
                  label: "Vision",
                  title: "Create a trusted group identity that grows with purpose.",
                  text: "Our goal is not to add businesses for the sake of size, but to grow divisions that earn trust, strengthen the group, and create long-term relevance.",
                },
              ].map((item) => (
                <article
                  key={item.label}
                  className="group relative grid gap-5 border-b border-white/12 pb-8 last:border-b-0 last:pb-0 sm:grid-cols-[52px_1fr]"
                >
                  <div className="relative z-10 grid size-9 place-items-center border border-brand-gold/50 bg-brand-ink-soft text-brand-gold transition duration-700 group-hover:bg-brand-gold group-hover:text-brand-ink">
                    <span className="size-2 bg-current" />
                  </div>
                  <div>
                    <p className="text-brand-gold text-xs font-bold tracking-[0.22em] uppercase">
                      {item.label}
                    </p>
                    <h3 className="font-display mt-4 max-w-[620px] text-[32px] leading-tight font-bold md:text-[46px] group-hover:text-brand-gold transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="mt-5 max-w-[620px] text-base leading-8 text-white/62">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   5. Why
   ───────────────────────────────────────────── */
function WhySection() {
  return (
    <section className="bg-brand-surface px-6 py-20 md:px-0 md:py-28">
      <div className="mx-auto max-w-[var(--container-max)]">
        <Reveal className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
          <div>
            <p className="text-brand-gold-deep text-xs font-bold tracking-[0.22em] uppercase">
              Why Sathriyan Group
            </p>
            <h2 className="font-display mt-5 max-w-[620px] text-[42px] leading-tight font-bold md:text-[68px]">
              Why run multiple businesses under one roof?
            </h2>
            <p className="text-brand-muted mt-6 max-w-[480px] text-base leading-8">
              A group is not just a label. It is a way of doing business that
              makes each division stronger: shared systems, shared reputation,
              shared standards. Each one stands on its own, but none of them
              start from zero.
            </p>
          </div>

          <div className="relative min-h-[480px] overflow-hidden rounded-brand bg-brand-ink">
            <Image
              src="/assets/home/real-estate.jpg"
              alt="Sathriyan Group diversified operations"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.1)_0%,rgba(17,24,39,0.85)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 grid gap-0 p-6 md:p-8">
              {whyItems.map((item, index) => (
                <article
                  key={item.title}
                  className="group border-b border-white/12 py-5 last:border-b-0"
                >
                  <div className="grid grid-cols-[32px_1fr] gap-4">
                    <span className="font-display text-brand-gold text-2xl leading-none font-bold">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-[420px] text-sm leading-6 text-white/65">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   6. Timeline
   ───────────────────────────────────────────── */
function TimelineSection() {
  return (
    <section className="bg-white px-6 py-20 md:px-0 md:py-28">
      <div className="mx-auto max-w-[var(--container-max)]">
        <Reveal className="mb-12 max-w-[760px]">
          <p className="text-brand-gold-deep text-xs font-bold tracking-[0.22em] uppercase">
            Timeline
          </p>
          <h2 className="font-display mt-5 text-[42px] leading-tight font-bold md:text-[68px]">
            The journey so far.
          </h2>
          <p className="text-brand-muted mt-5 max-w-[600px] text-base leading-8">
            Three milestones. Each one built on the work that came before.
          </p>
        </Reveal>

        <div className="grid gap-6">
          {timelineItems.map((item, index) => (
            <Reveal key={item.title}>
              <article className="group grid overflow-hidden rounded-brand border border-black/8 bg-white transition duration-700 hover:-translate-y-1 hover:shadow-brand lg:grid-cols-[1fr_1.2fr]">
                <div
                  className={`relative min-h-[320px] overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 500px, 100vw"
                    className="object-cover transition duration-[1400ms] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.06)_0%,rgba(17,24,39,0.72)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <span className="font-display text-brand-gold-bright text-[56px] leading-none font-bold drop-shadow-[0_8px_20px_rgba(0,0,0,0.4)] md:text-[80px]">
                      {item.year}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
                  <span className="text-brand-gold-deep text-xs font-bold tracking-[0.18em] uppercase">
                    Milestone {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-4 text-[28px] leading-tight font-bold md:text-[36px]">
                    {item.title}
                  </h3>
                  <p className="text-brand-muted mt-4 max-w-[480px] text-base leading-8">
                    {item.text}
                  </p>
                  <span className="bg-brand-gold-deep mt-6 block h-px w-12" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   7. Founder Message
   ───────────────────────────────────────────── */
function FounderMessage() {
  return (
    <section className="bg-brand-ink-soft px-6 py-20 text-white md:px-0 md:py-28">
      <div className="mx-auto grid max-w-[var(--container-max)] gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <Reveal className="relative min-h-[520px] overflow-hidden rounded-brand bg-brand-ink">
          <Image
            src="/assets/home/advisor.jpg"
            alt="Founder and Chairman of Sathriyan Group"
            fill
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover opacity-72"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.08)_0%,rgba(17,24,39,0.76)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
            <p className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase">
              Leadership Vision
            </p>
            <h3 className="font-display mt-3 text-2xl font-bold">
              Built on principle. Grown with patience.
            </h3>
          </div>
        </Reveal>

        <Reveal>
            <p className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase">
              From the founder
            </p>
            <blockquote className="font-display mt-6 max-w-[720px] text-[34px] leading-tight font-bold md:text-[52px]">
              Build businesses people trust. Not just ones they use.
            </blockquote>
            <div className="mt-8 space-y-5 border-y border-white/12 py-7">
              <p className="text-base leading-8 text-white/70">
                Sathriyan Group was never about being the biggest. It was
                about building something people come back to, because it
                works, because it lasts, because they know what to expect.
              </p>
              <p className="text-base leading-8 text-white/70">
                Every division carries that same idea. Not because someone
                enforces it, but because it is just how we do things. Quality
                is not a policy here. It is the only way we know how to work.
              </p>
            </div>
          <div className="mt-7">
            <p className="text-sm font-bold text-white/80">
              Founder &amp; Chairman
            </p>
            <p className="mt-1 text-sm text-white/50">Sathriyan Group</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   8. CTA
   ───────────────────────────────────────────── */
function BlogIntroSection() {
  return (
    <section className="bg-brand-surface px-6 py-24 md:px-0 md:py-32">
      <Reveal className="mx-auto grid max-w-[var(--container-max)] overflow-hidden rounded-brand bg-white shadow-brand-soft ring-1 ring-black/5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-between p-8 md:p-10 lg:p-12">
          <div>
            <p className="text-brand-gold-deep text-xs font-bold tracking-[0.22em] uppercase">
              Sathriyan Journal
            </p>
            <h2 className="font-display mt-5 max-w-[620px] text-[44px] leading-tight font-bold md:text-[68px]">
              Ideas, updates, and notes from the group.
            </h2>
            <p className="text-brand-muted mt-6 max-w-[540px] text-base leading-8">
              A place for project thinking, leadership notes, division
              updates, and practical stories behind the work.
            </p>
          </div>
          <Link
            href="/blog"
            className="group mt-10 inline-flex w-fit items-center gap-4 border-b border-brand-gold-deep pb-2 text-sm font-bold text-brand-ink-soft transition duration-700 ease-brand hover:text-brand-gold-deep"
          >
            View the journal
            <ArrowUpRight className="size-4 transition duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <Link href="/blog" className="group relative min-h-[460px] overflow-hidden bg-brand-ink">
          <Image
            src="/assets/home/hero.jpg"
            alt="Sathriyan Group journal preview"
            fill
            sizes="(min-width: 1024px) 620px, 100vw"
            className="object-cover opacity-82 transition duration-[1600ms] ease-brand group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.04)_0%,rgba(17,24,39,0.84)_100%)]" />
          <div className="absolute right-6 bottom-6 left-6 md:right-8 md:bottom-8 md:left-8">
            <p className="text-brand-gold text-xs font-bold tracking-[0.22em] uppercase">
              Read Next
            </p>
            <p className="font-display mt-4 max-w-[560px] text-[34px] leading-tight font-bold text-white md:text-[48px]">
              The story behind decisions, projects, and direction.
            </p>
          </div>
        </Link>
      </Reveal>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-ink px-6 py-20 text-white md:px-0 md:py-28">
      <Image
        src="/assets/home/hero.jpg"
        alt="Sathriyan Group corporate environment"
        fill
        sizes="100vw"
        loading="eager"
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,20,32,0.95)_0%,rgba(10,20,32,0.82)_50%,rgba(10,20,32,0.6)_100%)]" />
      <Reveal className="relative z-10 mx-auto max-w-[var(--container-max)]">
        <div className="border-y border-white/12 py-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-brand-gold text-xs font-bold tracking-[0.22em] uppercase">
                Start A Conversation
              </p>
              <h2 className="font-display mt-5 max-w-[780px] text-[36px] leading-tight font-bold md:text-[60px]">
                Have a project in mind? Let&apos;s talk.
              </h2>
              <p className="text-white/60 mt-4 max-w-[600px] text-base leading-8">
                Whether it is a project, a partnership, or just a question
                about the group, we are here. Reach out and we will take it
                from there.
              </p>
            </div>
            <Link
              href="/contact"
              className="group bg-brand-gold-deep text-white ease-brand hover:bg-brand-gold inline-flex h-12 items-center justify-center gap-4 px-6 text-sm font-bold transition duration-700"
            >
              <span>Contact page</span>
              <ArrowUpRight className="size-4 transition duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
