import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://mehndi-navy.vercel.app";

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