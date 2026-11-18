import Chrome from "@/components/Chrome";
import Reveal from "@/components/Reveal";
import Bento from "@/components/Bento";
import { Footer } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Reveal />
      <Chrome>
        <Bento />
        <Footer />
      </Chrome>
    </>
  );
}
