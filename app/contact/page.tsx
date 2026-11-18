import type { Metadata } from "next";
import Chrome from "@/components/Chrome";
import Reveal from "@/components/Reveal";
import { PageHead, ContactBody, Footer } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Contact — Azi Nalda",
  description:
    "Book a discovery call or send an email. Manila based, working overlap with US hours.",
};

export default function ContactPage() {
  return (
    <>
      <Reveal />
      <Chrome>
        <div className="wrap">
          <PageHead
            eyebrow="05 · Contact"
            title="Let's talk about the week you dread."
            lede="Thirty minutes, no pitch. Tell me what keeps slipping and I'll tell you honestly whether I'm the right person to run it."
          />
          <ContactBody />
          <Footer />
        </div>
      </Chrome>
    </>
  );
}
