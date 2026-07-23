import { ContactIntro } from "./components/contact-intro";
import { ContactDetails } from "./components/contact-details";
import { ContactSection } from "./components/contact-section";

export function ContactPage() {
  return (
    <>
      <ContactIntro />

      <ContactDetails />

      <ContactSection />
    </>
  );
}