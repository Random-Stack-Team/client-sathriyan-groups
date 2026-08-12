import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

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
  "Which division you want to reach",
  "Where the project is, and which market it targets",
  "When you need to get started, or how urgent it is",
  "Who we should follow up with",
];

const contactChannels = [
  {
    title: "Address",
    value: "12, Bheema Nagar, Trichy - 620008",
    label: "Visit",
    icon: MapPin,
  },
  {
    title: "Mobile",
    value: "+91 98765 43210",
    label: "Call",
    icon: Phone,
  },
  {
    title: "Email",
    value: "info@sathriyangroup.com",
    label: "Write",
    icon: Mail,
  },
];

export function ContactPage() {
  return (
    <main className="bg-brand-surface text-brand-ink min-h-screen">
      <section className="bg-brand-ink-soft relative overflow-hidden text-white">
        <Image
          src="/assets/home/hero.jpg"
          alt="Sathriyan Group corporate environment"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-42"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,28,48,0.96)_0%,rgba(11,28,48,0.84)_52%,rgba(11,28,48,0.42)_100%)]" />

        <div className="relative z-10 mx-auto grid max-w-[var(--container-max)] items-center px-5 pt-28 pb-12 sm:px-6 md:px-0 md:pt-40 md:pb-20">
          <Reveal
            className="grid gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-center"
            y={36}
          >
            <div>
              <p className="text-brand-gold text-xs font-bold tracking-[0.24em] uppercase">
                Contact Sathriyan Group
              </p>
              <h1 className="font-display mt-6 max-w-[840px] text-[40px] leading-[1.06] font-bold sm:text-[42px] md:text-[76px] md:leading-[1.03]">
                Let&apos;s start a conversation.
              </h1>
            </div>
            <p className="border-y border-white/14 py-6 text-base leading-8 text-white/72 md:text-lg lg:border-y-0 lg:border-l lg:py-3 lg:pl-8">
              Got a project in mind? Want to work with a specific division? Or
              just have a question about the group? We are here.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pt-12 sm:px-6 md:px-0 md:pt-20">
        <div className="mx-auto max-w-[var(--container-max)]">
          <Reveal>
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-brand-gold-deep text-xs font-bold tracking-[0.22em] uppercase">
                  Contact Directory
                </p>
                <h2 className="font-display mt-4 max-w-[620px] text-[34px] leading-tight font-bold md:text-[48px]">
                  Find the right way to reach us.
                </h2>
              </div>
              <p className="text-brand-muted max-w-[430px] text-sm leading-7">
                Dummy details are added for layout preview and can be replaced
                with official contact information later.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
              {contactChannels.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group shadow-brand-soft hover:bg-brand-ink-soft hover:shadow-brand min-h-[170px] bg-white p-5 ring-1 ring-black/5 transition duration-700 hover:-translate-y-1 md:min-h-[190px] md:p-6"
                  >
                    <div className="flex min-h-[150px] flex-col justify-between">
                      <div className="flex items-start gap-4">
                        <span className="bg-brand-surface text-brand-gold-deep group-hover:text-brand-gold grid size-11 shrink-0 place-items-center rounded-full ring-1 ring-black/8 transition duration-700 group-hover:bg-white/10 group-hover:ring-white/12">
                          <Icon className="size-5" strokeWidth={1.8} />
                        </span>
                        <div className="pt-0.5">
                          <p className="text-brand-muted text-xs font-bold tracking-[0.2em] uppercase transition duration-700 group-hover:text-white/48">
                            {item.title}
                          </p>
                          <p className="text-brand-muted-light mt-1 text-xs font-bold tracking-[0.18em] uppercase transition duration-700 group-hover:text-white/38">
                            {item.label}
                          </p>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-display text-brand-ink max-w-[310px] text-[21px] leading-tight font-bold transition duration-700 group-hover:text-white md:text-[24px]">
                          {item.value}
                        </h3>
                        <div className="mt-5 flex items-center gap-3 border-t border-black/8 pt-4 transition duration-700 group-hover:border-white/12">
                          <span className="text-brand-ink group-hover:text-brand-gold text-sm font-bold transition duration-700">
                            Sathriyan Group
                          </span>
                          <ArrowUpRight className="text-brand-gold-deep size-4 transition duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 md:px-0 md:py-28">
        <div className="mx-auto grid max-w-[var(--container-max)] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-brand-gold-deep text-xs font-bold tracking-[0.2em] uppercase">
                Enquiry Desk
              </p>
              <h2 className="font-display mt-4 max-w-[480px] text-[34px] leading-tight font-bold md:text-[52px]">
                Send your enquiry to the right team.
              </h2>
              <p className="text-brand-muted mt-6 max-w-[480px] text-base leading-8">
                Tell us which division you want to reach, what the project is
                about, and how soon you need to get started. That helps us route
                things to the right team.
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

          <Reveal delay={0.08}>
            <div className="shadow-brand-soft overflow-hidden rounded-[24px] bg-white ring-1 ring-black/5">
              <div className="bg-brand-ink-soft px-6 py-6 text-white md:px-8 lg:px-10">
                <p className="text-brand-gold text-xs font-bold tracking-[0.18em] uppercase">
                  Enquiry Form
                </p>
                <div className="mt-4 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
                  <h3 className="font-display max-w-[520px] text-[30px] leading-tight font-bold md:text-[42px]">
                    Tell us what you need. We will take it from here.
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-8 lg:p-10">
                <div className="grid gap-x-8 gap-y-7 md:grid-cols-2">
                  <Field index="01" label="Full name" placeholder="Your name" />
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
                    rows={6}
                    placeholder="Tell us what you would like to discuss"
                    className="text-brand-ink placeholder:text-brand-muted-light focus:border-brand-gold-deep resize-none border-0 border-b border-black/14 bg-transparent px-0 py-3 text-base leading-8 transition duration-500 outline-none"
                  />
                </label>

                <div className="mt-9 flex flex-col gap-5 border-t border-black/8 pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-brand-muted max-w-[440px] text-sm leading-7">
                    The form will be connected to the team once the final
                    recipient details are in place.
                  </p>
                  <button
                    type="button"
                    className="group border-brand-ink bg-brand-ink ease-brand hover:text-brand-ink inline-flex h-12 items-center justify-center gap-4 rounded-full border px-5 text-sm font-bold text-white transition duration-700 hover:bg-white"
                  >
                    <span>Send enquiry</span>
                    <ArrowUpRight className="size-4 transition duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
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
      <CustomSelect name={name} options={options} placeholder={placeholder} />
    </label>
  );
}
