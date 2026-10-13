import { Marcellus, Manrope } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const isGitHubPages = process.env.GITHUB_PAGES === "true";

export const metadata = {
  metadataBase: new URL(
    isGitHubPages
      ? "https://mikebet87.github.io/usercare-properties"
      : "https://www.usercareproperties.com"
  ),
  title: "UserCare Properties | Fine Addresses in Kenya & Dubai",
  description:
    "UserCare Properties is a boutique real estate advisory helping families and investors secure homes and high-yield assets across Kenya and Dubai — from the Joska Palms gated community to off-plan masterpieces.",
  keywords: [
    "Dubai real estate",
    "Kenya property",
    "off-plan Dubai",
    "property investment advisory",
    "Joska Palms",
    "luxury homes Nairobi",
    "DAMAC",
  ],
  openGraph: {
    title: "UserCare Properties | Fine Addresses in Dubai & Kenya",
    description:
      "Boutique real estate advisory for luxury homes and high-yield investments across Dubai and Kenya.",
    url: "https://www.usercareproperties.com",
    siteName: "UserCare Properties",
    images: [
      {
        url: "/images/hero-dubai.jpg",
        width: 1200,
        height: 630,
        alt: "Dubai skyline at dusk",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UserCare Properties",
    description:
      "Fine addresses in Dubai & Kenya — boutique real estate advisory.",
    images: ["/images/hero-dubai.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${marcellus.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
