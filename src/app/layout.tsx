import type { Metadata, Viewport } from "next";
import { Allura, Montserrat, Pacifico, Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const allura = Allura({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

const pacifico = Pacifico({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: "400",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: `${site.name} - ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Wodoo",
    "food scanner",
    "cosmetic scanner",
    "barcode scanner",
    "healthy eating",
    "ingredient checker",
    "nutrition app",
  ],
  authors: [{ name: "Wodoo", url: site.url }],
  creator: "Wodoo",
  publisher: "Wodoo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon/32", sizes: "32x32", type: "image/png" },
      { url: "/icon/192", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} - ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - ${site.tagline}`,
    description: site.description,
    images: ["/twitter-image"],
  },
  alternates: {
    canonical: "/",
  },
  category: "health",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${allura.variable} ${pacifico.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-wakka-ink">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
