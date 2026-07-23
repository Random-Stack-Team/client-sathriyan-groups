const stats = [
  { value: "—", label: "Experience" },
  { value: "—", label: "Projects" },
  { value: "—", label: "Trusted Clients" },
  { value: "—", label: "Design" },
];

export function AboutStats() {
  return (
    <section className="px-6 py-20 md:px-0 md:py-32">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-5xl font-bold text-[#0b1c30] md:text-7xl">
              {stat.value}
            </p>

            <p className="mt-3 text-sm font-medium text-[#0b1c30]/70 md:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}