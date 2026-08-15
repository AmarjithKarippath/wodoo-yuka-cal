import { Hero } from "@/components/Hero";
import { IndependenceSection } from "@/components/IndependenceSection";
import { QualitySection } from "@/components/QualitySection";
import { Recommendations } from "@/components/Recommendations";

export default function Home() {
  return (
    <>
      <Hero />
      <IndependenceSection />
      <QualitySection />
      <Recommendations />
    </>
  );
}
