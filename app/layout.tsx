import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Areeba & Hamza | Mehndi Night",
  description: "You are invited to celebrate our Mehndi Night.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}