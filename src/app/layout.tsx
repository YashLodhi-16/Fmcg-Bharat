// all imports
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/tsx/Navbar";
import Footer from "@/components/tsx/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { title } from "@/lib/utilities/variables";
config.autoAddCss = false;

// meta data for the website
export const metadata: Metadata = {
  title,
  description:
    "FMCG Bharat is your premier online marketplace for fast-moving consumer goods. Discover a wide range of groceries, personal care items, and household essentials, all delivered to your doorstep at competitive prices. Shop smart, save time!",
  creator: "Yash Lodhi",
  keywords: ["fmcg bharat", "fast moving consumer goods", "online shopping"],
  authors: [{ name: "Yash Lodhi", url: "https://github.com/YashLodhi-16/" }],

  applicationName: title,
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
    date: false,
  },
  openGraph: {
    countryName: "India",
    emails: process.env?.EMAIL,
    phoneNumbers: "9899625881",
    alternateLocale: "en_IN",
    determiner: "the",
    ttl: 86400,
    title,
    description:
      "FMCG Bharat is your premier online marketplace for fast-moving consumer goods. Discover a wide range of groceries, personal care items, and household essentials, all delivered to your doorstep at competitive prices. Shop smart, save time!",
    url: process.env?.NEXT_PUBLIC_PRO_API,
    siteName: title,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: process.env.NEXT_PUBLIC_MAIN_ICON || "",
        width: 800,
        height: 800,
        alt: "FMCG Bharat - Fast Moving Consumer Goods",
      },
    ],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_PRO_API,
  },
};

// export default layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="capitalize bg-gray-50">
        {/* navbar and footer  */}
        {/* are the most important component for every page so i add them to layout directly.
         */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
