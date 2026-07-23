const sectors = [
  "Boldmark Agency",
  "Construction",
  "Nexgen Events",
  "Landmark Realty",
  "InterWorld Link",
  "NextWave Advisor's",
  "Foods & Hospitality",
];

export function SectorsSection() {
  return (
    <section className="px-6 py-24 md:px-0 md:py-32">
      <div className="mx-auto max-w-[1000px] text-center">
        <h2 className="font-display text-4xl leading-tight font-bold text-[#0b1c30] md:text-6xl">
          Our Sectors
        </h2>

        <p className="mt-4 text-xl font-medium text-[#0b1c30] md:text-2xl">
          Where we create value
        </p>

        <p className="mx-auto mt-6 max-w-[700px] text-base leading-relaxed text-[#0b1c30]/70 md:text-lg">
          Each division is a specialist in its field, yet stronger because of
          the ecosystem we have built together.
        </p>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 md:mt-24 md:grid-cols-3">
          {sectors.map((sector) => (
            <div
              key={sector}
              className="flex min-h-[120px] items-center justify-center rounded-xl border border-[#0b1c30]/15 px-6 text-center transition-colors duration-300 hover:bg-[#0b1c30] hover:text-white"
            >
              <span className="text-lg font-semibold md:text-xl">
                {sector}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}