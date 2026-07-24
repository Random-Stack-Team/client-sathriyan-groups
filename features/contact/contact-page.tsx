import { ContactDetails } from "./components/contact-details";
import { ContactForm } from "./components/contact-form";
import { ContactHero } from "./components/contact-hero";
import { ContactMap } from "./components/contact-map";
import { ContactImageCard } from "./components/contact-image-card";

export function ContactPage() {
  return (
    <main className="bg-brand-surface text-brand-ink min-h-screen">
      <ContactHero />

      <ContactDetails />

      <ContactForm />

      {/* Map + Image Card */}
      <section className="px-6 pb-24 md:px-0 md:pb-32">
        <div className="mx-auto grid max-w-[1240px] items-start gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <ContactMap />

          <ContactImageCard />
        </div>
      </section>
    </main>
  );
}