import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Independence",
  description:
    "Wakka is 100% independent: no brand influence, no ads, and a responsible funding model.",
  alternates: { canonical: "/independence" },
};

export default function IndependencePage() {
  return (
    <InnerPage kicker="Independence" title="Our core value is independence">
      <p>
        Wakka’s mission is to help consumers make better choices for their health. In doing so, it
        aims to drive manufacturers to offer better products.
      </p>
      <h2 className="title-2 !text-[28px] !text-wakka-ink pt-4">No ads</h2>
      <p>
        Wakka is a completely ad-free app. Brands cannot pay Wakka to advertise their products.
      </p>
      <h2 className="title-2 !text-[28px] !text-wakka-ink pt-4">No influence from brands</h2>
      <p>
        Scores and recommendations are obtained independently, with absolutely no influence from
        outside brands or manufacturers.
      </p>
      <h2 className="title-2 !text-[28px] !text-wakka-ink pt-4">Responsible financing</h2>
      <p>
        Revenues come from users, never from brands. The Premium version of the app is our main
        source of revenue, which allows the project to remain financially independent.
      </p>
      <p>Wakka does not sell any user data. All personal data is kept strictly confidential.</p>
    </InnerPage>
  );
}
