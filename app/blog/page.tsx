import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Header } from "@/components/site/header";
import { blogPosts, navItems } from "@/lib";

export const metadata: Metadata = {
  title: "Journal | Sathriyan Group",
  description:
    "Company updates, project notes, and industry stories from Sathriyan Group of Companies.",
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <main className="min-h-screen bg-brand-surface text-brand-ink selection:bg-brand-gold/30">
      <Header navItems={navItems} />

      {/* Featured Post Hero */}
      <section className="bg-brand-ink px-6 pt-40 pb-20 text-white md:px-12 md:pt-48 md:pb-28 lg:px-20 relative overflow-hidden">
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <Reveal className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6">
            <div>
              <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase">
                Sathriyan Journal
              </p>
              <h1 className="font-display mt-4 text-4xl leading-[1.1] font-bold md:text-6xl lg:text-[72px] hover:text-brand-gold transition-colors duration-500">
                Stories behind <br className="hidden md:block"/> the work.
              </h1>
            </div>
            <p className="max-w-[380px] text-base leading-relaxed text-white/60">
              Notes from the Sathriyan ecosystem: project thinking, company direction, and ideas that shape how each division works.
            </p>
          </Reveal>

          {featuredPost && (
            <Reveal delay={0.1}>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-center"
              >
                <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-brand-ink-soft rounded-sm">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover transition duration-[1500ms] ease-brand group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-brand-ink/20 transition duration-700 group-hover:bg-transparent" />
                </div>
                <div className="flex flex-col py-4 lg:py-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-brand-gold text-[10px] font-bold tracking-[0.2em] uppercase bg-brand-gold/10 px-3 py-1.5 rounded-full">
                      Featured
                    </span>
                    <span className="text-white/50 text-xs font-bold tracking-[0.1em] uppercase">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="font-display text-[32px] leading-[1.15] font-bold md:text-[44px] lg:text-[52px] group-hover:text-brand-gold transition-colors duration-500">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/60 mt-6 text-base md:text-lg leading-relaxed max-w-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="mt-10 inline-flex items-center gap-3 text-sm font-bold tracking-[0.15em] uppercase text-brand-gold transition duration-500 group-hover:text-white">
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
      <section className="bg-brand-surface px-6 py-24 md:px-12 md:py-32 lg:px-20 relative z-10 -mt-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-ink/10 pb-6">
            <h3 className="font-display text-[28px] md:text-[36px] font-bold">
              Latest Notes
            </h3>
            <div className="flex gap-4">
              {/* Static filters just for premium look */}
              {["All", "Construction", "Real Estate", "Events"].map((filter, i) => (
                <button key={filter} className={`text-xs font-bold tracking-[0.1em] uppercase transition-colors hover:text-brand-ink ${i === 0 ? "text-brand-ink border-b-2 border-brand-ink pb-1" : "text-brand-muted pb-1 border-b-2 border-transparent"}`}>
                  {filter}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Standard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {regularPosts.map((post, index) => {
              return (
                <Reveal 
                  key={post.slug} 
                  delay={index * 0.1}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col h-full bg-white border border-brand-ink/10 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-brand-ink/5 hover:-translate-y-1"
                  >
                    <div className="relative w-full overflow-hidden bg-brand-ink-soft aspect-[4/3] md:aspect-[4/5]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-[1500ms] ease-brand group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-brand-ink/10 transition duration-700 group-hover:bg-transparent" />
                      
                      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10 bg-white/95 backdrop-blur-sm px-3 py-1.5 shadow-sm">
                        <p className="text-brand-ink text-[10px] font-bold tracking-[0.15em] uppercase">
                          {post.category}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col flex-1 p-6 md:p-8">
                      <h3 className="font-display font-bold leading-tight group-hover:text-brand-gold-deep transition-colors duration-500 text-[22px] md:text-[26px]">
                        {post.title}
                      </h3>
                      <p className="text-brand-muted mt-4 text-sm leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                      <div className="mt-8 pt-6 border-t border-brand-ink/10 flex items-center justify-between text-xs font-bold tracking-[0.15em] uppercase text-brand-ink/60 group-hover:text-brand-ink transition-colors duration-500 mt-auto">
                        <span>Read article</span>
                        <div className="w-8 h-8 rounded-full bg-brand-surface flex items-center justify-center transition-all duration-500 group-hover:bg-brand-ink group-hover:text-white group-hover:rotate-45 group-hover:scale-110">
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
