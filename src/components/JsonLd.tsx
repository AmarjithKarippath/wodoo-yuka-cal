import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}#organization`,
        name: site.name,
        url: site.url,
        description: site.description,
        logo: `${site.url}/apple-icon`,
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        publisher: { "@id": `${site.url}#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "SoftwareApplication",
        name: site.name,
        operatingSystem: "iOS, Android",
        applicationCategory: "HealthApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        description: site.description,
      },
      {
        "@type": "WebPage",
        "@id": `${site.url}/#webpage`,
        url: site.url,
        name: `${site.name} - ${site.tagline}`,
        isPartOf: { "@id": `${site.url}#website` },
        about: { "@id": `${site.url}#organization` },
        description: site.description,
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
