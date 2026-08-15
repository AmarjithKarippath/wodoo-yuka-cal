import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";
import { PrimaryButton } from "@/components/PrimaryButton";

export const metadata: Metadata = {
  title: "Premium",
  description:
    "Wakka Premium adds search, offline mode, and custom alerts — and keeps the project independent.",
  alternates: { canonical: "/premium" },
};

export default function PremiumPage() {
  return (
    <InnerPage kicker="Premium version" title="Support independence with Wakka Premium">
      <p>
        The Premium version is very important to Wakka as it allows us to ensure the project’s
        financial independence. It starts at $10/year and unlocks extra tools for everyday
        shopping.
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Search for any product without having to scan it.</li>
        <li>Scan your items even when your phone has no signal.</li>
        <li>Set alerts for palm oil, gluten, lactose, vegetarian diets, and more.</li>
      </ul>
      <PrimaryButton href="/contact" className="mt-4">
        Get Premium
      </PrimaryButton>
    </InnerPage>
  );
}
