import type { Metadata } from "next";
import Chrome from "@/components/Chrome";
import Reveal from "@/components/Reveal";
import { PageHead, TestimonialsGrid, Footer } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Testimonials — Azi Nalda",
  description:
    "What the founders and teams I've supported say about working together.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Reveal />
      <Chrome>
        <div className="wrap">
          <PageHead
            eyebrow="03 · Testimonials"
            title="The people who kept me on."
            lede="Both from EXP Solutions, where I supported the founders and the wider team across concurrent projects."
          />
          <TestimonialsGrid />
          <Footer />
        </div>
      </Chrome>
    </>
  );
}
