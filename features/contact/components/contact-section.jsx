import { ContactForm } from "./contact-form";
import { ContactMap } from "./contact-map";

export function ContactSection() {
  return (
    <section className="px-6 pb-24 md:px-0 md:pb-32">
      <div className="mx-auto grid max-w-[1100px] items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />

        <ContactMap />
      </div>
    </section>
  );
}