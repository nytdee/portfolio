import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deepanshu Pandey — Growth, Revenue & Operations",
  description:
    "Portfolio of Deepanshu Pandey — a cross-functional operator working across paid acquisition, brand positioning, B2B revenue, CRM and reporting: finding where a process breaks, building a clearer way to run it, and measuring what changes.",
  keywords: [
    "growth",
    "revenue",
    "operations",
    "paid acquisition",
    "CRM",
    "lead management",
    "reporting",
    "portfolio",
    "Deepanshu Pandey",
    "account manager",
    "digital marketing",
  ],
  authors: [{ name: "Deepanshu Pandey" }],
  openGraph: {
    title: "Deepanshu Pandey — Growth, Revenue & Operations",
    description:
      "I turn messy business problems into better growth systems — across paid acquisition, CRM, reporting and B2B revenue.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="grain-overlay">{children}</body>
    </html>
  );
}
