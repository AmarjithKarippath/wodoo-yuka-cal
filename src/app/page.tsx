import { Community } from "@/components/Community";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { IndependenceSection } from "@/components/IndependenceSection";
import { Press } from "@/components/Press";
import { QualitySection } from "@/components/QualitySection";
import { Recommendations } from "@/components/Recommendations";

export default function Home() {
  return (
    <>
      <Hero />
      <IndependenceSection />
      <QualitySection />
      <Recommendations />
      <Community />
      <Press />
      <Impact />
    </>
  );
}
