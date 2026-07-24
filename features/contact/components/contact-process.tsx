import { ArrowUpRight } from "lucide-react";

export function ContactProcess() {
  return (
    <div className="flex min-h-[380px] flex-col justify-between py-4 lg:py-2">
      {/* Heading */}
      <div>
        <p className="text-brand-gold-deep text-xs font-bold tracking-[0.2em] uppercase">
          Let&apos;s connect
        </p>

        <h2 className="font-display mt-6 max-w-[560px] text-5xl leading-[0.95] font-bold md:text-7xl">
          Have a project
          <br />
          in mind?
        </h2>
      </div>

      {/* Bottom content */}
      <div className="flex items-end justify-between gap-6 border-t border-brand-ink/10 pt-6">
        <p className="text-brand-muted max-w-[360px] text-base leading-7">
          Whether you are exploring a new project, partnership, or opportunity,
          every meaningful conversation starts somewhere.
        </p>

        <span className="grid size-14 shrink-0 place-items-center rounded-full bg-brand-ink text-white transition-transform duration-500 hover:rotate-45">
          <ArrowUpRight className="size-5" />
        </span>
      </div>
    </div>
  );
}