import { ArrowUpRight, MapPin } from "lucide-react";

export function ContactMap() {
  return (
    <div className="relative h-[380px] overflow-hidden rounded-[28px] bg-[#e9e6df]">
      {/* Map-style background */}
      <iframe
  src="https://www.google.com/maps?q=12%2C%20Bheema%20Nagar%2C%20Trichy%2C%20620008&output=embed"
  className="h-full w-full border-0"
  loading="lazy"
  title="Sathriyan Group Headquarters"
/>

      {/* Decorative map lines */}
      <div
        aria-hidden="true"
        className="absolute top-[18%] -left-10 h-px w-[130%] rotate-[-18deg] bg-[#0b1c30]/10"
      />

      <div
        aria-hidden="true"
        className="absolute top-[55%] -left-10 h-px w-[130%] rotate-[12deg] bg-[#0b1c30]/10"
      />

      <div
        aria-hidden="true"
        className="absolute top-0 left-[35%] h-[120%] w-px rotate-[25deg] bg-[#0b1c30]/10"
      />

      {/* Location marker */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Pulse ring */}
          <div className="absolute -inset-5 animate-ping rounded-full bg-[#0b1c30]/10" />

          {/* Marker */}
          <div className="relative grid size-14 place-items-center rounded-full bg-[#0b1c30] text-white shadow-xl">
            <MapPin className="size-6 fill-white" />
          </div>
        </div>
      </div>

      {/* Location details */}
      <div className="absolute right-5 bottom-5 left-5 rounded-2xl bg-white/90 p-5 shadow-lg backdrop-blur-md md:right-6 md:bottom-6 md:left-6">
        <p className="text-xs font-semibold tracking-[0.15em] text-[#0b1c30]/45 uppercase">
          Headquarters
        </p>

        <div className="mt-3 flex items-end justify-between gap-4">
          <p className="text-base leading-relaxed font-medium text-[#0b1c30]">
            12, Bheema Nagar,
            <br />
            Trichy, 620008
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=12%20Bheema%20Nagar%2C%20Trichy%2C%20620008"
            target="_blank"
            rel="noreferrer"
            aria-label="Open headquarters location in Google Maps"
            className="grid size-10 shrink-0 place-items-center rounded-full bg-[#0b1c30] text-white transition-transform duration-300 hover:scale-105"
          >
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </div>
  );
}