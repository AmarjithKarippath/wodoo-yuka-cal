import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Social impact",
  description: "95% of Wakka users say they now eat healthier. Learn how independent scoring drives change.",
  alternates: { canonical: "/social-impact" },
};

export default function SocialImpactPage() {
  return (
    <InnerPage kicker="Impact" title="Thanks to Wakka, people eat healthier">
      <p>
        95% of all users say they are now eating healthier. Transparent scores help shoppers swap
        poor products for better ones — and send a clear signal to manufacturers.
      </p>
      <p>
        Wakka’s goal is simple: help consumers make better choices by providing independent
        information about the products they buy every day.
      </p>
    </InnerPage>
  );
}
