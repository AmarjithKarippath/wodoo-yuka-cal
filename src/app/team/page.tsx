import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the independent team behind Wakka, the app that helps you choose healthier products.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <InnerPage kicker="Team" title="A committed team">
      <p>
        Behind Wakka, there is a small team of enthusiastic people who want to help others make
        better choices for their health — and push manufacturers to offer better products.
      </p>
      <p>
        We are nutritionists, engineers, designers, and scientists working together with one
        mission: transparent, independent product information for everyone.
      </p>
    </InnerPage>
  );
}
