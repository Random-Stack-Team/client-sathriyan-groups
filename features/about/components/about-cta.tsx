import Link from "next/link";

export function AboutCTA() {
  return (
    <section className="px-6 py-20 md:px-0 md:py-32">
      <div className="mx-auto max-w-[1240px] rounded-2xl bg-[#0b1c30] px-6 py-16 text-center text-white md:px-20 md:py-24">
        <h2 className="font-display text-4xl leading-tight font-bold md:text-6xl">
          Let&apos;s build something enduring together.
        </h2>

        <p className="mx-auto mt-6 max-w-[700px] text-base leading-relaxed text-white/75 md:text-lg">
          Whether you are looking for a development partner, investment
          advisor, event producer, or trade facilitator, our team is ready to
          help.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0b1c30] transition-transform duration-300 hover:scale-105"
        >
          Contact Our Team
        </Link>
      </div>
    </section>
  );
}