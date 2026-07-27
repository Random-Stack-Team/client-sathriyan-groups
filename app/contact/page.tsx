import type { Metadata } from "next";
import { ContactPage } from "@/features/contact/contact-page";

export const metadata: Metadata = {
  title: "Contact — Sathriyan Group",
  description:
    "Reach Sathriyan Group for business enquiries, division-specific discussions, partnerships, and project conversations.",
};

export default function Contact() {
  return <ContactPage />;
}
