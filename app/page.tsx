import Chrome from "@/components/Chrome";
import Reveal from "@/components/Reveal";
import Hero from "@/components/Hero";
import {
  ExploreRail,
  ProjectsSection,
  ServicesSection,
  TestimonialsSection,
  AboutSection,
  ContactSection,
  Footer,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Chrome />
      <Reveal />
      <main id="main" className="shell">
        <div className="panel">
          <Hero />
          <ExploreRail />
          <ProjectsSection />
          <ServicesSection />
          <TestimonialsSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </>
  );
}
