import type { Metadata } from "next";
import Chrome from "@/components/Chrome";
import Reveal from "@/components/Reveal";
import { PageHead, AboutBody, Footer } from "@/components/Sections";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Executive Assistant and Operations Specialist based in Manila. Audit what's breaking, build the system that fixes it, make sure it runs without you watching.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Reveal />
      <Chrome>
        <div className="wrap">
          <PageHead
            eyebrow="04 · About"
            title={site.about.title}
            lede={site.role}
          />
          <AboutBody />
          <Footer />
        </div>
      </Chrome>
    </>
  );
}
