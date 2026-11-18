import type { Metadata } from "next";
import Chrome from "@/components/Chrome";
import Reveal from "@/components/Reveal";
import { PageHead, Footer } from "@/components/Sections";
import ProjectGallery from "@/components/ProjectGallery";

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
            eyebrow="Projects"
            title="Systems you can open and walk through."
            lede="Everything here shipped. Open a card to walk through the work at full size."
          />
          <ProjectGallery />
          <Footer />
        </div>
      </Chrome>
    </>
  );
}
