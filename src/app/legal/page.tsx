import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Legal notice",
  description: "Legal notice and privacy information for the Wakka website and mobile application.",
  alternates: { canonical: "/legal" },
};

export default function LegalPage() {
  return (
    <InnerPage kicker="Legal notice" title="Legal notice">
      <p>
        This website is operated by Wakka. Product scores are informational and do not constitute
        medical advice. Always consult a qualified professional for dietary or dermatological
        concerns.
      </p>
      <p>
        Wakka does not sell user data. Contact{" "}
        <a className="text-wakka-green font-semibold" href={`mailto:${site.email}`}>
          {site.email}
        </a>{" "}
        for privacy requests.
      </p>
    </InnerPage>
  );
}
