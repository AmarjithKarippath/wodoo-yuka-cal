import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";
import { PrimaryButton } from "@/components/PrimaryButton";

export const metadata: Metadata = {
  title: "Application",
  description:
    "Scan the labels of your food and cosmetic products. Wakka analyzes each item and recommends healthier alternatives.",
  alternates: { canonical: "/app" },
};

export default function AppPage() {
  return (
    <InnerPage kicker="Application" title="Scan the labels of your food and cosmetic products">
      <p>
        Wakka analyzes food items, providing a detailed data sheet for each product to explain how
        it was evaluated. Scan a barcode and instantly see a color-coded score from excellent to
        poor.
      </p>
      <p>
        Wakka also analyzes hygiene and cosmetic products. You get a detailed data sheet for each
        product to help you understand its score, including endocrine disruptors, irritants, and
        allergens.
      </p>
      <p>
        When you scan a product that scores poorly, Wakka offers independent recommendations for
        similar items that are better for your health.
      </p>
      <h2 className="title-2 !text-[28px] !text-wakka-ink pt-4">A comprehensive database</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>4 million food products</li>
        <li>2 million cosmetic products</li>
        <li>1,200 new products every day</li>
      </ul>
      <PrimaryButton href="/premium" className="mt-4">
        Discover Premium
      </PrimaryButton>
    </InnerPage>
  );
}
