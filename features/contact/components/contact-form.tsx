import { ArrowUpRight } from "lucide-react";

import { CustomSelect } from "@/components/form/custom-select";
import { Reveal } from "@/components/motion/reveal";
import { companyDivisions } from "@/lib";

const inquiryTypes = [
  "General enquiry",
  "Business collaboration",
  "Project discussion",
  "Media or events",
];

const enquiryChecklist = [
  "Preferred division or business area",
  "Project location or market, if relevant",
  "Expected timeline or urgency",
  "Best contact person for follow-up",
];

export function ContactForm() {
  return (
    <section className="px-6 py-18 md:px-0 md:py-28">
      <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
        {/* Enquiry Desk */}
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="text-brand-gold-deep text-xs font-bold tracking-[0.2em] uppercase">
              Enquiry Desk
            </p>

            <h2 className="font-display mt-4 max-w-[480px] text-[34px] leading-tight font-bold md:text-[52px]">
              Route your enquiry to the right division.
            </h2>

            <p className="text-brand-muted mt-6 max-w-[480px] text-base leading-8">
              Share the division, purpose, and project context. The team can
              route the enquiry from there.
            </p>

            <div className="mt-10 border-y border-black/8 py-6">
              <p className="text-brand-muted text-xs font-bold tracking-[0.18em] uppercase">
                Helpful context
              </p>

              <div className="mt-5 grid gap-4">
                {enquiryChecklist.map((item, index) => (
                  <div
                    key={item}
                    className="grid grid-cols-[42px_1fr] gap-4 border-b border-black/8 pb-4"
                  >
                    <span className="font-display text-brand-muted-light text-2xl leading-none font-bold">
                      0{index + 1}
                    </span>

                    <p className="text-brand-muted text-sm leading-6">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Form */}
<Reveal delay={0.08}>
  {/* Outer layered frame */}
  <div className="rounded-[32px] border border-brand-ink/10 bg-brand-surface-soft p-2 md:p-3">
    {/* Main card */}
    <div className="relative overflow-hidden rounded-[26px] border border-brand-ink/10 bg-white shadow-[0_20px_60px_rgba(11,28,48,0.08)]">

      {/* Decorative concentric layers */}
      <div className="pointer-events-none absolute -top-32 -right-32 size-[420px] rounded-full border border-brand-ink/[0.05]" />

      <div className="pointer-events-none absolute -top-20 -right-20 size-[280px] rounded-full border border-brand-ink/[0.05]" />

      {/* Soft light overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,28,48,0.04),transparent_40%)]" />

      {/* Form header */}
      <div className="bg-brand-ink-soft relative z-10 px-6 py-6 text-white md:px-8 lg:px-10">
        <p className="text-brand-gold text-xs font-bold tracking-[0.18em] uppercase">
          Enquiry Form
        </p>

        <h3 className="font-display mt-4 max-w-[520px] text-[30px] leading-tight font-bold md:text-[42px]">
          Tell us where the conversation should begin.
        </h3>
      </div>

      {/* Form body */}
      <div className="relative z-10 p-6 md:p-8 lg:p-10">
        <div className="grid gap-x-8 gap-y-7 md:grid-cols-2">
          <Field
            index="01"
            label="Full name"
            placeholder="Your name"
          />

          <Field
            index="02"
            label="Email address"
            placeholder="name@example.com"
          />

          <Field
            index="03"
            label="Phone number"
            placeholder="Optional"
          />

          <SelectField
            index="04"
            label="Enquiry type"
            name="enquiryType"
            options={inquiryTypes}
            placeholder="Select enquiry type"
          />
        </div>

        <div className="mt-8">
          <SelectField
            index="05"
            label="Division"
            name="division"
            options={companyDivisions.map((division) => division.name)}
            placeholder="Choose a division"
          />
        </div>

        <label className="mt-8 grid gap-3 border-t border-black/8 pt-7">
          <span className="grid gap-1 md:grid-cols-[56px_1fr] md:items-baseline">
            <span className="font-display text-brand-muted-light text-2xl leading-none font-bold">
              06
            </span>

            <span className="text-brand-muted text-xs font-bold tracking-[0.16em] uppercase">
              Message
            </span>
          </span>

          <textarea
            rows={3}
            placeholder="Tell us what you would like to discuss"
            className="text-brand-ink placeholder:text-brand-muted-light focus:border-brand-gold-deep resize-none border-0 border-b border-black/14 bg-transparent px-0 py-3 text-base leading-8 transition duration-500 outline-none"
          />
        </label>

        <div className="mt-9 flex flex-col gap-5 border-t border-black/8 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-brand-muted max-w-[440px] text-sm leading-7">
            This form is ready for backend submission once the official
            recipient workflow is connected.
          </p>

          <button
  type="button"
  className="group inline-flex items-center gap-3 rounded-full bg-brand-ink px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:gap-5 hover:bg-brand-ink-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-ink"
>
  <span>Send enquiry</span>

  <span className="grid size-7 place-items-center rounded-full bg-white text-brand-ink transition-transform duration-300 group-hover:rotate-45">
    <ArrowUpRight className="size-4" />
  </span>
</button>
        </div>
      </div>
    </div>
  </div>
</Reveal>
      </div>
    </section>
  );
}

function Field({
  index,
  label,
  placeholder,
}: {
  index: string;
  label: string;
  placeholder: string;
}) {
  return (
    <label className="grid gap-3">
      <span className="grid gap-1 md:grid-cols-[56px_1fr] md:items-baseline">
        <span className="font-display text-brand-muted-light text-2xl leading-none font-bold">
          {index}
        </span>

        <span className="text-brand-muted text-xs font-bold tracking-[0.16em] uppercase">
          {label}
        </span>
      </span>

      <input
        placeholder={placeholder}
        className="text-brand-ink placeholder:text-brand-muted-light focus:border-brand-gold-deep h-12 border-0 border-b border-black/14 bg-transparent px-0 text-base font-semibold transition duration-500 outline-none"
      />
    </label>
  );
}

function SelectField({
  index,
  label,
  name,
  options,
  placeholder,
}: {
  index: string;
  label: string;
  name: string;
  options: string[];
  placeholder: string;
}) {
  return (
    <label className="grid gap-3">
      <span className="grid gap-1 md:grid-cols-[56px_1fr] md:items-baseline">
        <span className="font-display text-brand-muted-light text-2xl leading-none font-bold">
          {index}
        </span>

        <span className="text-brand-muted text-xs font-bold tracking-[0.16em] uppercase">
          {label}
        </span>
      </span>

      <CustomSelect
        name={name}
        options={options}
        placeholder={placeholder}
      />
    </label>
  );
}