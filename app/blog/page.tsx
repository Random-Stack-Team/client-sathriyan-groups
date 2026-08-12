import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { blogPosts } from "@/lib";

export const metadata: Metadata = {
  title: "Journal | Sathriyan Group",
  description:
    "Company updates, project notes, and industry stories from Sathriyan Group of Companies.",
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <main className="bg-brand-surface text-brand-ink selection:bg-brand-gold/30 min-h-screen">
      {/* Featured Post Hero */}
      <section className="bg-brand-ink relative overflow-hidden px-5 pt-28 pb-14 text-white sm:px-6 md:px-12 md:pt-48 md:pb-28 lg:px-20">
        {/* Abstract background element */}
        <div className="bg-brand-gold/5 pointer-events-none absolute top-0 right-0 h-[420px] w-[420px] translate-x-1/3 -translate-y-1/3 rounded-full blur-3xl md:h-[800px] md:w-[800px]" />

        <div className="relative z-10 mx-auto max-w-[var(--container-max)]">
          <Reveal className="mb-10 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:mb-20 md:flex-row md:items-end">
            <div>
              <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase">
                Sathriyan Journal
              </p>
              <h1 className="font-display hover:text-brand-gold mt-4 text-[40px] leading-[1.08] font-bold transition-colors duration-500 md:text-6xl lg:text-[72px]">
                Stories behind <br className="hidden md:block" /> the work.
              </h1>
            </div>
            <p className="max-w-[380px] text-base leading-relaxed text-white/60">
              Notes from the Sathriyan ecosystem: project thinking, company
              direction, and ideas that shape how each division works.
            </p>
          </Reveal>

          {featuredPost && (
            <Reveal delay={0.1}>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16"
              >
                <div className="bg-brand-ink-soft relative aspect-[4/3] overflow-hidden rounded-sm lg:aspect-[16/10]">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="ease-brand object-cover transition duration-[1500ms] group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="bg-brand-ink/20 absolute inset-0 transition duration-700 group-hover:bg-transparent" />
                </div>
                <div className="flex flex-col py-4 lg:py-10">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="text-brand-gold bg-brand-gold/10 rounded-full px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase">
                      Featured
                    </span>
                    <span className="text-xs font-bold tracking-[0.1em] text-white/50 uppercase">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="font-display group-hover:text-brand-gold text-[32px] leading-[1.15] font-bold transition-colors duration-500 md:text-[44px] lg:text-[52px]">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="text-brand-gold mt-10 inline-flex items-center gap-3 text-sm font-bold tracking-[0.15em] uppercase transition duration-500 group-hover:text-white">
                    Read the cover story
                    <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </Reveal>
          )}
        </div>
      </section>

      {/* Grid Section */}
      <section className="bg-brand-surface relative z-10 -mt-8 px-5 py-16 sm:px-6 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-[var(--container-max)]">
          <Reveal className="border-brand-ink/10 mb-10 flex flex-col justify-between gap-6 border-b pb-6 md:mb-16 md:flex-row md:items-end">
            <h3 className="font-display text-[28px] font-bold md:text-[36px]">
              Latest Notes
            </h3>
          </Reveal>

          {/* Standard Grid */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post, index) => {
              return (
                <Reveal key={post.slug} delay={index * 0.1}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group border-brand-ink/10 hover:shadow-brand-ink/5 flex h-full flex-col overflow-hidden rounded-sm border bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="bg-brand-ink-soft relative aspect-[4/3] w-full overflow-hidden md:aspect-[4/5]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="ease-brand object-cover transition duration-[1500ms] group-hover:scale-105"
                      />
                      <div className="bg-brand-ink/10 absolute inset-0 transition duration-700 group-hover:bg-transparent" />

                      <div className="absolute top-4 left-4 z-10 bg-white/95 px-3 py-1.5 shadow-sm backdrop-blur-sm md:top-6 md:left-6">
                        <p className="text-brand-ink text-[10px] font-bold tracking-[0.15em] uppercase">
                          {post.category}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6 md:p-8">
                      <h3 className="font-display group-hover:text-brand-gold-deep text-[22px] leading-tight font-bold transition-colors duration-500 md:text-[26px]">
                        {post.title}
                      </h3>
                      <p className="text-brand-muted mt-4 flex-1 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="border-brand-ink/10 text-brand-ink/60 group-hover:text-brand-ink mt-8 mt-auto flex items-center justify-between border-t pt-6 text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-500">
                        <span>Read article</span>
                        <div className="bg-brand-surface group-hover:bg-brand-ink flex h-8 w-8 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-45 group-hover:text-white">
                          <ArrowUpRight className="size-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
