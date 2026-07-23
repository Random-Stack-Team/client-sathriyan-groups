export function ContactIntro() {
  return (
    <>
      {/* Contact Hero */}
      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#0b1c30] px-6 py-24 text-center text-white md:min-h-[480px] md:px-0">
        {/* Decorative texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        {/* Decorative layers */}
        <div className="pointer-events-none absolute -top-32 -right-32 size-[420px] rounded-full border border-white/[0.04]" />

        <div className="pointer-events-none absolute -top-20 -right-20 size-[280px] rounded-full border border-white/[0.04]" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-[850px]">
          <p className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
            Get In Touch
          </p>

          <h1 className="font-display mt-6 text-5xl leading-[0.95] font-bold tracking-tight md:text-7xl">
            Let&apos;s build what&apos;s next,
            <br />
            together.
          </h1>

          {/* Animated Divider */}
          <div className="mx-auto mt-8 h-px w-32 bg-white/30 md:w-48" />

          <p className="mx-auto mt-8 max-w-[650px] text-base leading-relaxed text-white/70 md:text-lg">
            Whether it&apos;s a new project, a partnership, or a question about
            our verticals, our team is ready to talk.
          </p>
        </div>
      </section>

      
            
    
    </>
  );
}