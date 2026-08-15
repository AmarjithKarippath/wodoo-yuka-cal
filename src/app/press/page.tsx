import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Press",
  description: "Press resources and media mentions for Wakka, the independent product scanner.",
  alternates: { canonical: "/press" },
};

export default function PressPage() {
  return (
    <InnerPage kicker="Press" title="Wakka in the press">
      <p>
        Wakka helps people decode food and cosmetic labels in a single scan. Journalists covering
        nutrition, consumer tech, or public health can reach the team via the contact page.
      </p>
      <p>
        Featured coverage includes TODAY, The Wall Street Journal, The New York Times, and Fox
        News.
      </p>
    </InnerPage>
  );
}
