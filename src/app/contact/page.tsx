import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Wakka team for press, product questions, or partnership inquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <InnerPage kicker="Contact us" title="We’d love to hear from you">
      <p>
        Questions about the app, scores, or your account? Email us at{" "}
        <a className="text-wakka-green font-semibold" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        .
      </p>
      <p>For press requests, visit the press page. We typically reply within two business days.</p>
    </InnerPage>
  );
}
