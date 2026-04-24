import "./globals.css";
import type { Metadata } from "next";
import { LanguageProvider } from "../components/LanguageProvider";

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
    <html lang="pt">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
