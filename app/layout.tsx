import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://mehndi-navy.vercel.app";
const title = "Mehndi | Muhammad Zeeshan Azhar Malik";
const description = "Friday, 6th November 2026 at 7:00 PM onwards. West Canal Road, Farooqabad, Mansoorabad.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Mehndi Invitation",
    title,
    description,
    images: [{ url: "/opengraph-image", width: 1200, height: 1200, alt: "Mehndi invitation for Muhammad Zeeshan Azhar Malik" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}