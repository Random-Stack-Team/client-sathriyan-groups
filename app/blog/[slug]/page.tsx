import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Share2,
  Link2,
  Mail,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/motion/reveal";
import { blogPosts } from "@/lib";

function ShareButtons() {
  return (
    <div className="flex gap-4">
      <button className="border-brand-ink/10 text-brand-ink hover:border-brand-ink hover:bg-brand-ink flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 hover:text-white">
        <Share2 className="size-4" />
      </button>
      <button className="border-brand-ink/10 text-brand-ink hover:border-brand-ink hover:bg-brand-ink flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 hover:text-white">
        <Link2 className="size-4" />
      </button>
      <button className="border-brand-ink/10 text-brand-ink hover:border-brand-ink hover:bg-brand-ink flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 hover:text-white">
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
  const relatedPosts = blogPosts
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-brand-surface text-brand-ink selection:bg-brand-gold/30 min-h-screen">
      <article>
        {/* Classic Editorial Hero (Typography Focus) */}
        <section className="bg-white px-5 pt-28 pb-14 sm:px-6 md:px-12 md:pt-48 md:pb-28 lg:px-20">
          <div className="mx-auto flex max-w-[var(--container-max)] flex-col items-center text-center">
            <Reveal>
              <Link
                href="/blog"
                className="group text-brand-muted hover:text-brand-ink mb-8 inline-flex items-center gap-3 text-xs font-bold tracking-[0.15em] uppercase transition-colors md:mb-12 md:text-sm"
              >
                <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to journal
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mb-8 flex items-center justify-center gap-4">
                <span className="text-brand-gold-deep text-xs font-bold tracking-[0.2em] uppercase">
                  {post.category}
                </span>
                <span className="bg-brand-ink/20 h-1.5 w-1.5 rounded-full" />
                <span className="text-brand-muted flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase">
                  <Clock className="size-3.5" />
                  {post.readTime}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h1 className="font-display text-brand-ink text-[38px] leading-[1.06] font-bold sm:text-4xl md:text-6xl lg:text-[72px]">
                {post.title}
              </h1>
            </Reveal>
          </div>
        </section>

        {/* Framed Featured Image */}
        <section className="bg-white px-5 pb-10 sm:px-6 md:px-12 md:pb-20 lg:px-20">
          <div className="mx-auto max-w-[var(--container-max)]">
            <Reveal delay={0.3}>
              <div className="bg-brand-ink-soft relative aspect-[4/3] w-full overflow-hidden rounded-sm md:aspect-[16/9] lg:aspect-[21/9]">
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
        <section className="bg-white px-5 py-10 sm:px-6 md:px-12 md:py-20 lg:px-20">
          <div className="mx-auto max-w-[var(--container-max)]">
            <div className="grid gap-16 lg:grid-cols-[200px_1fr] lg:gap-24">
              {/* Sticky Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-32 flex flex-col gap-10">
                  <Reveal>
                    <div className="border-brand-ink/10 border-b pb-6">
                      <p className="text-brand-gold mb-3 text-[10px] font-bold tracking-[0.2em] uppercase">
                        Written by
                      </p>
                      <p className="text-brand-ink text-base font-bold">
                        Sathriyan Team
                      </p>
                      <p className="text-brand-muted mt-1 text-sm">
                        {post.date}
                      </p>
                    </div>
                  </Reveal>

                  <Reveal delay={0.1}>
                    <div>
                      <p className="text-brand-gold mb-5 text-[10px] font-bold tracking-[0.2em] uppercase">
                        Share
                      </p>
                      <ShareButtons />
                    </div>
                  </Reveal>
                </div>
              </aside>

              {/* Main Reading Content */}
              <div className="max-w-[720px]">
                <Reveal>
                  <p className="border-brand-gold text-brand-ink mb-10 border-l-4 pl-5 text-lg leading-relaxed font-medium md:mb-12 md:pl-6 md:text-2xl">
                    {post.excerpt}
                  </p>
                </Reveal>

                <Reveal
                  delay={0.1}
                  className="text-brand-muted space-y-7 text-base leading-[1.8] md:space-y-8 md:text-xl md:leading-[1.9]"
                >
                  <p className="first-letter:font-display first-letter:text-brand-ink first-line:text-brand-ink first-letter:float-left first-letter:pr-3 first-letter:text-[64px] first-letter:leading-[0.8] first-letter:font-bold first-line:tracking-wide md:first-letter:text-[80px]">
                    Sathriyan Group is built around focused companies that serve
                    different markets while operating with one shared standard.
                    That structure gives each division room to specialize
                    without losing the trust and consistency of the group
                    identity.
                  </p>
                  <p>
                    Every project begins with clarity: the audience, the
                    problem, the timeline, and the outcome. Whether the work
                    belongs to construction, real estate, events, branding,
                    advisory, trade, or hospitality, the expectation stays the
                    same. The work should be useful, well communicated, and
                    built to last beyond the first interaction.
                  </p>

                  <div className="border-brand-ink/10 my-14 border-y py-8">
                    <p className="font-display text-brand-ink text-center text-2xl leading-snug font-bold md:text-3xl">
                      &ldquo;The work should be useful, well communicated, and
                      built to last beyond the first interaction.&rdquo;
                    </p>
                  </div>

                  <p>
                    The journal will later publish real project stories, company
                    updates, and leadership notes through Payload CMS. For now,
                    this page gives the team a polished article template to
                    build from. We ensure that every piece of content that hits
                    the web represents the high bar set by the Sathriyan
                    standard.
                  </p>
                </Reveal>

                {/* Mobile Sidebar Content - Appears at bottom on mobile */}
                <Reveal
                  delay={0.2}
                  className="border-brand-ink/10 mt-16 border-t pt-10 lg:hidden"
                >
                  <div className="flex flex-col gap-8">
                    <div>
                      <p className="text-brand-gold mb-3 text-[10px] font-bold tracking-[0.2em] uppercase">
                        Written by
                      </p>
                      <p className="text-brand-ink text-base font-bold">
                        Sathriyan Team
                      </p>
                      <p className="text-brand-muted mt-1 text-sm">
                        {post.date}
                      </p>
                    </div>
                    <div>
                      <p className="text-brand-gold mb-5 text-[10px] font-bold tracking-[0.2em] uppercase">
                        Share
                      </p>
                      <ShareButtons />
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.3}>
                  <Link
                    href="/contact"
                    className="group text-brand-ink hover:text-brand-gold-deep border-brand-ink mt-16 inline-flex items-center gap-4 border-b pb-2 text-sm font-bold tracking-[0.15em] uppercase transition-colors"
                  >
                    Discuss a project
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts Section */}
        <section className="border-brand-ink/10 bg-brand-surface relative overflow-hidden border-t px-6 py-20 md:px-12 md:py-28 lg:px-20">
          {/* Abstract bg element */}
          <div className="bg-brand-gold/5 pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 rounded-full blur-3xl" />

          <div className="relative z-10 mx-auto max-w-[var(--container-max)]">
            <div className="border-brand-ink/10 mb-14 flex items-end justify-between gap-6 border-b pb-6">
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
                className="border-brand-ink/30 hover:border-brand-gold hover:text-brand-gold hidden border-b pb-1 text-xs font-bold tracking-[0.15em] uppercase transition-colors md:inline-flex"
              >
                View all posts
              </Link>
            </div>

            <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
              {relatedPosts.map((related, index) => (
                <Reveal key={related.slug} delay={index * 0.1}>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="group border-brand-ink/10 hover:shadow-brand-ink/5 flex h-full flex-col overflow-hidden rounded-sm border bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="bg-brand-ink-soft relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="ease-brand object-cover transition duration-[1500ms] group-hover:scale-105"
                      />
                      <div className="bg-brand-ink/10 absolute inset-0 transition duration-700 group-hover:bg-transparent" />

                      <div className="absolute top-4 left-4 z-10 bg-white/95 px-3 py-1.5 shadow-sm backdrop-blur-sm md:top-5 md:left-5">
                        <p className="text-brand-ink text-[10px] font-bold tracking-[0.15em] uppercase">
                          {related.category}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6 md:p-8">
                      <h3 className="font-display group-hover:text-brand-gold-deep text-[22px] leading-tight font-bold transition-colors duration-500 md:text-[24px]">
                        {related.title}
                      </h3>
                      <div className="border-brand-ink/10 text-brand-ink/60 group-hover:text-brand-ink mt-8 mt-auto flex items-center justify-between border-t pt-6 text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-500">
                        <span>Read next</span>
                        <div className="bg-brand-surface group-hover:bg-brand-ink flex h-8 w-8 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-45 group-hover:text-white">
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
