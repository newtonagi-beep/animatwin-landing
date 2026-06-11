import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problems from "@/components/Problems";
import Steps from "@/components/Steps";
import FeatureCards from "@/components/FeatureCards";
import HealthMapShowcase from "@/components/HealthMapShowcase";
import VetSection from "@/components/VetSection";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import PricingCards from "@/components/PricingCards";
import FAQ from "@/components/FAQ";
import BigCTA from "@/components/BigCTA";
import { Eyebrow } from "@/components/Buttons";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Problems />
      <Steps />
      <FeatureCards />
      <HealthMapShowcase />
      <VetSection />
      <Stats />
      <Testimonials />
      <section className="py-24 md:py-32">
        <div className="container-j">
          <Reveal>
            <Eyebrow>Cennik</Eyebrow>
            <h2 className="mb-12 max-w-2xl text-4xl font-extrabold md:text-6xl">
              Zacznij za 0 zł. Rozwijaj, kiedy chcesz.
            </h2>
          </Reveal>
          <PricingCards />
        </div>
      </section>
      <FAQ />
      <BigCTA />
    </>
  );
}
