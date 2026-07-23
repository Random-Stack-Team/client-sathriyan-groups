"use client";

import { ArrowUpRight } from "lucide-react";

export function ContactForm() {
  return (
    <section className="px-6 pb-24 md:px-0 md:pb-32">
      <div className="mx-auto max-w-[1100px]">
        {/* Outer layered frame */}
        <div className="rounded-[32px] border border-[#0b1c30]/10 bg-[#f7fbff] p-2 md:p-3">
          {/* Main card */}
          <div className="relative overflow-hidden rounded-[26px] border border-[#0b1c30]/10 bg-white shadow-[0_20px_60px_rgba(11,28,48,0.08)]">
            {/* Decorative concentric layers */}
            <div className="pointer-events-none absolute -top-32 -right-32 size-[420px] rounded-full border border-[#0b1c30]/[0.05]" />

            <div className="pointer-events-none absolute -top-20 -right-20 size-[280px] rounded-full border border-[#0b1c30]/[0.05]" />

            {/* Soft light overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,28,48,0.04),transparent_40%)]" />

            {/* Content */}
            <div className="relative z-10 p-8 md:p-12">
              {/* Section heading */}
              <div className="max-w-[600px]">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#0b1c30]/50 uppercase">
                  Start the Conversation
                </p>

                <h2 className="font-display mt-5 text-4xl leading-[1.05] font-bold text-[#0b1c30] md:text-5xl">
                  Tell us what you&apos;re building.
                </h2>

                <p className="mt-5 max-w-[520px] text-base leading-relaxed text-[#0b1c30]/65">
                  Share a few details about your project and our team will get
                  back to you.
                </p>
              </div>

              {/* Form */}
              <form className="mt-10 space-y-6">
                {/* Name + Phone */}
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="full-name"
                      className="text-xs font-semibold tracking-[0.15em] text-[#0b1c30]/50 uppercase"
                    >
                      Full Name
                    </label>

                    <input
                      id="full-name"
                      name="fullName"
                      type="text"
                      placeholder="Your name"
                      required
                      className="mt-3 w-full border-b border-[#0b1c30]/20 bg-transparent px-0 py-3 text-base text-[#0b1c30] outline-none transition-colors placeholder:text-[#0b1c30]/35 focus:border-[#0b1c30]/70"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-xs font-semibold tracking-[0.15em] text-[#0b1c30]/50 uppercase"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      required
                      className="mt-3 w-full border-b border-[#0b1c30]/20 bg-transparent px-0 py-3 text-base text-[#0b1c30] outline-none transition-colors placeholder:text-[#0b1c30]/35 focus:border-[#0b1c30]/70"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold tracking-[0.15em] text-[#0b1c30]/50 uppercase"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="mt-3 w-full border-b border-[#0b1c30]/20 bg-transparent px-0 py-3 text-base text-[#0b1c30] outline-none transition-colors placeholder:text-[#0b1c30]/35 focus:border-[#0b1c30]/70"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="text-xs font-semibold tracking-[0.15em] text-[#0b1c30]/50 uppercase"
                  >
                    Service Interested In
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    required
                    className="mt-3 w-full cursor-pointer border-b border-[#0b1c30]/20 bg-white px-0 py-3 text-base text-[#0b1c30] outline-none transition-colors focus:border-[#0b1c30]/70"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="construction">Construction</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="branding">Branding</option>
                    <option value="events">Events</option>
                    <option value="consultancy">Consultancy</option>
                    <option value="international-trade">
                      International Trade
                    </option>
                    <option value="food-hospitality">
                      Food & Hospitality
                    </option>
                  </select>
                </div>

                {/* Requirement */}
                <div>
                  <label
                    htmlFor="requirement"
                    className="text-xs font-semibold tracking-[0.15em] text-[#0b1c30]/50 uppercase"
                  >
                    Your Requirement
                  </label>

                  <textarea
                    id="requirement"
                    name="requirement"
                    rows={3}
                    placeholder="Tell us a little about your project..."
                    required
                    className="mt-3 w-full resize-none border-b border-[#0b1c30]/20 bg-transparent px-0 py-3 text-base text-[#0b1c30] outline-none transition-colors placeholder:text-[#0b1c30]/35 focus:border-[#0b1c30]/70"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#0b1c30] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:gap-5 hover:bg-[#102a43] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b1c30]"
                >
                  Send Message

                  <span className="grid size-7 place-items-center rounded-full bg-white text-[#0b1c30] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="size-4" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}