import { ArrowLeft, ArrowUpRight, Clock, Share2, Link2, Mail } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/motion/reveal";
import { blogPosts } from "@/lib";

function ShareButtons() {
  return (
    <div className="flex gap-4">
      <button className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-ink/10 text-brand-ink transition-colors duration-300 hover:border-brand-ink hover:bg-brand-ink hover:text-white">
        <Share2 className="size-4" />
      </button>
      <button className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-ink/10 text-brand-ink transition-colors duration-300 hover:border-brand-ink hover:bg-brand-ink hover:text-white">
        <Link2 className="size-4" />
      </button>
      <button className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-ink/10 text-brand-ink transition-colors duration-300 hover:border-brand-ink hover:bg-brand-ink hover:text-white">
        <Mail className="size-4" />
      </button>
    </div>
  );
}

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Sathriyan Group`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  const relatedPosts = blogPosts.filter((item) => item.slug !== slug).slice(0, 3);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-brand-surface text-brand-ink selection:bg-brand-gold/30">

      <article>
        {/* Classic Editorial Hero (Typography Focus) */}
        <section className="px-6 pt-40 pb-20 md:px-12 md:pt-48 md:pb-28 lg:px-20 bg-white">
          <div className="mx-auto max-w-[var(--container-max)] text-center flex flex-col items-center">
            <Reveal>
              <Link
                href="/blog"
                className="group mb-12 inline-flex items-center gap-3 text-sm font-bold tracking-[0.15em] text-brand-muted uppercase transition-colors hover:text-brand-ink"
              >
                <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to journal
              </Link>
            </Reveal>
            
            <Reveal delay={0.1}>
              <div className="flex items-center gap-4 mb-8 justify-center">
                <span className="text-brand-gold-deep text-xs font-bold tracking-[0.2em] uppercase">
                  {post.category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-ink/20" />
                <span className="text-brand-muted text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-2">
                  <Clock className="size-3.5" />
                  {post.readTime}
                </span>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <h1 className="font-display text-4xl leading-[1.05] font-bold text-brand-ink md:text-6xl lg:text-[72px]">
                {post.title}
              </h1>
            </Reveal>
          </div>
        </section>

        {/* Framed Featured Image */}
        <section className="px-6 pb-12 md:px-12 md:pb-20 lg:px-20 bg-white">
          <div className="mx-auto max-w-[var(--container-max)]">
            <Reveal delay={0.3}>
              <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden bg-brand-ink-soft rounded-sm">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 100vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Structured Content Layout */}
        <section className="bg-white px-6 py-12 md:px-12 md:py-20 lg:px-20">
          <div className="mx-auto max-w-[var(--container-max)]">
            <div className="grid gap-16 lg:grid-cols-[200px_1fr] lg:gap-24">
              
              {/* Sticky Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-32 flex flex-col gap-10">
                  <Reveal>
                    <div className="pb-6 border-b border-brand-ink/10">
                      <p className="text-[10px] font-bold tracking-[0.2em] text-brand-gold uppercase mb-3">Written by</p>
                      <p className="text-base font-bold text-brand-ink">Sathriyan Team</p>
                      <p className="text-sm text-brand-muted mt-1">{post.date}</p>
                    </div>
                  </Reveal>

                  <Reveal delay={0.1}>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-brand-gold uppercase mb-5">Share</p>
                      <ShareButtons />
                    </div>
                  </Reveal>
                </div>
              </aside>

              {/* Main Reading Content */}
              <div className="max-w-[720px]">
                <Reveal>
                  <p className="text-xl md:text-2xl leading-relaxed text-brand-ink font-medium mb-12 border-l-4 border-brand-gold pl-6">
                    {post.excerpt}
                  </p>
                </Reveal>

                <Reveal delay={0.1} className="space-y-8 text-brand-muted text-lg leading-[1.8] md:text-xl md:leading-[1.9]">
                  <p className="first-letter:float-left first-letter:text-[80px] first-letter:leading-[0.8] first-letter:pr-3 first-letter:font-display first-letter:font-bold first-letter:text-brand-ink first-line:tracking-wide first-line:text-brand-ink">
                    Sathriyan Group is built around focused companies that serve
                    different markets while operating with one shared standard. That structure gives each division room to specialize without
                    losing the trust and consistency of the group identity. 
                  </p>
                  <p>
                    Every project begins with clarity: the audience, the problem, the
                    timeline, and the outcome. Whether the work belongs to construction, real estate, events,
                    branding, advisory, trade, or hospitality, the expectation
                    stays the same. The work should be useful, well communicated,
                    and built to last beyond the first interaction.
                  </p>
                  
                  <div className="my-14 py-8 border-y border-brand-ink/10">
                    <p className="font-display text-2xl md:text-3xl font-bold text-brand-ink text-center leading-snug">
                      &ldquo;The work should be useful, well communicated, and built to last beyond the first interaction.&rdquo;
                    </p>
                  </div>
                  
                  <p>
                    The journal will later publish real project stories, company
                    updates, and leadership notes through Payload CMS. For now,
                    this page gives the team a polished article template to build
                    from. We ensure that every piece of content that hits the web represents the high bar set by the Sathriyan standard.
                  </p>
                </Reveal>

                {/* Mobile Sidebar Content - Appears at bottom on mobile */}
                <Reveal delay={0.2} className="lg:hidden mt-16 pt-10 border-t border-brand-ink/10">
                  <div className="flex flex-col gap-8">
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-brand-gold uppercase mb-3">Written by</p>
                      <p className="text-base font-bold text-brand-ink">Sathriyan Team</p>
                      <p className="text-sm text-brand-muted mt-1">{post.date}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-brand-gold uppercase mb-5">Share</p>
                      <ShareButtons />
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.3}>
                  <Link
                    href="/contact"
                    className="group mt-16 inline-flex items-center gap-4 text-sm font-bold tracking-[0.15em] uppercase text-brand-ink transition-colors hover:text-brand-gold-deep border-b border-brand-ink pb-2"
                  >
                    Discuss a project
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              </div>
              
            </div>
          </div>
        </section>

        {/* Related Posts Section */}
        <section className="border-t border-brand-ink/10 bg-brand-surface px-6 py-20 md:px-12 md:py-28 lg:px-20 relative overflow-hidden">
          {/* Abstract bg element */}
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="mx-auto max-w-[var(--container-max)] relative z-10">
            <div className="mb-14 flex items-end justify-between gap-6 border-b border-brand-ink/10 pb-6">
              <div>
                <p className="text-brand-gold-deep text-xs font-bold tracking-[0.2em] uppercase">
                  Keep reading
                </p>
                <h2 className="font-display mt-4 text-[32px] leading-tight font-bold md:text-[48px]">
                  More from the journal.
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden text-xs font-bold tracking-[0.15em] uppercase border-b border-brand-ink/30 pb-1 transition-colors hover:border-brand-gold hover:text-brand-gold md:inline-flex"
              >
                View all posts
              </Link>
            </div>

            <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
              {relatedPosts.map((related, index) => (
                <Reveal key={related.slug} delay={index * 0.1}>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="group flex flex-col h-full bg-white border border-brand-ink/10 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-brand-ink/5 hover:-translate-y-1"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-ink-soft">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition duration-[1500ms] ease-brand group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-brand-ink/10 transition duration-700 group-hover:bg-transparent" />
                      
                      <div className="absolute top-4 left-4 md:top-5 md:left-5 z-10 bg-white/95 backdrop-blur-sm px-3 py-1.5 shadow-sm">
                        <p className="text-brand-ink text-[10px] font-bold tracking-[0.15em] uppercase">
                          {related.category}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col flex-1 p-6 md:p-8">
                      <h3 className="font-display font-bold leading-tight text-[22px] md:text-[24px] group-hover:text-brand-gold-deep transition-colors duration-500">
                        {related.title}
                      </h3>
                      <div className="mt-8 pt-6 border-t border-brand-ink/10 flex items-center justify-between text-xs font-bold tracking-[0.15em] uppercase text-brand-ink/60 group-hover:text-brand-ink transition-colors duration-500 mt-auto">
                        <span>Read next</span>
                        <div className="w-8 h-8 rounded-full bg-brand-surface flex items-center justify-center transition-all duration-500 group-hover:bg-brand-ink group-hover:text-white group-hover:rotate-45 group-hover:scale-110">
                          <ArrowUpRight className="size-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
