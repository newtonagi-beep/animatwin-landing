import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PricingCards from "@/components/PricingCards";
import FAQ from "@/components/FAQ";
import BigCTA from "@/components/BigCTA";
import ComparisonTable from "@/components/ComparisonTable";

export const metadata: Metadata = {
  title: "Cennik — AnimaTwin",
  description: "Free 0 zł, Standard 19 zł/mies., Premium 39 zł/mies. Porównaj plany AnimaTwin."
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Cennik"
        title="Prosty cennik. Zero ukrytych opłat."
        sub="Zacznij bezpłatnie i przejdź wyżej, gdy Twój pies (albo stado) będzie tego potrzebować."
      />
      <section className="pb-24">
        <div className="container-j">
          <PricingCards />

          <ComparisonTable />
        </div>
      </section>
      <FAQ />
      <BigCTA />
    </>
  );
}
