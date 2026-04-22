import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simplify",
  description: "Smart solutions for small businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
