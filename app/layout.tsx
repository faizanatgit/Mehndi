import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mehndi",
  description: "You are invited to celebrate the Mehndi Night of Muhammad Zeeshan Azhar Malik.",
  openGraph: { title: "Mehndi Night | Muhammad Zeeshan Azhar Malik", description: "Friday, 6th November 2026 · West Canal Road, Farooqabad, Mansoorabad" },
  twitter: { card: "summary_large_image", title: "Mehndi Night | Muhammad Zeeshan Azhar Malik" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}