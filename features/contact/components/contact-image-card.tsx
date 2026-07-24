import Image from "next/image";

export function ContactImageCard() {
  return (
    <div className="relative h-[380px] overflow-hidden rounded-brand">
      <Image
        src="/assets/contact/contact_editorial.jpg"
        alt="Sathriyan Group"
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />

      <div className="absolute inset-0 bg-brand-ink-soft/65" />

      <div className="relative z-10 flex h-full flex-col justify-end p-7 md:p-8 lg:p-10">
        <p className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase">
          Sathriyan Group
        </p>

        <h2 className="font-display mt-4 max-w-[420px] text-4xl leading-[1.05] font-bold text-white md:text-5xl">
          Every conversation starts with an idea.
        </h2>

        <p className="mt-5 max-w-[380px] text-sm leading-7 text-white/65">
          Tell us where you want to begin. We&apos;ll take the conversation
          forward from there.
        </p>
      </div>
    </div>
  );
}