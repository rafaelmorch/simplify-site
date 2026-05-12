import "./globals.css";
import type { Metadata } from "next";
import { Gemunu_Libre } from "next/font/google";
import { LanguageProvider } from "../components/LanguageProvider";

const gemunu = Gemunu_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-gemunu",
});

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
    <html lang="pt" className={gemunu.variable}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
