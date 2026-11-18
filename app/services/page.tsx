import type { Metadata } from "next";
import Chrome from "@/components/Chrome";
import Reveal from "@/components/Reveal";
import {
  PageHead,
  PainBlock,
  ServicesGrid,
  Footer,
} from "@/components/Sections";

export const metadata: Metadata = {
  title: "Services — Azi Nalda",
  description:
    "Inbox, calendar, workflow systems, automation and SOPs, executive support and operations audits for founders and small teams.",
};

export default function ServicesPage() {
  return (
    <>
      <Reveal />
      <Chrome>
        <div className="wrap">
          <PageHead
            eyebrow="02 · Services"
            title="What I take off your plate."
            lede="Structured support, built around what is actually breaking — not a menu of tasks billed by the hour."
          />
          <div style={{ marginTop: 24 }}>
            <PainBlock />
          </div>
          <ServicesGrid />
          <Footer />
        </div>
      </Chrome>
    </>
  );
}
