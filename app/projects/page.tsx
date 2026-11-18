import type { Metadata } from "next";
import Chrome from "@/components/Chrome";
import Reveal from "@/components/Reveal";
import { PageHead, ProjectsGrid, Footer } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Four operations systems built, shipped and handed over: meeting automation, workflow management, inbox and calendar systems.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <Reveal />
      <Chrome>
        <div className="wrap">
          <PageHead
            eyebrow="01 · Projects"
            title="Work that shipped."
            lede="Four builds, written up honestly — the problem, what I actually did, and what changed. Open a card to walk the whole thing."
          />
          <ProjectsGrid />
          <Footer />
        </div>
      </Chrome>
    </>
  );
}
