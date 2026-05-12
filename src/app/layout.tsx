import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Nunito } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Restauracja | Kuchnia Włoska",
  description:
    "Kuchnia włoska — prosta, autentyczna, bogata w kulinarnych doznaniach.",
  keywords: "restauracja, kuchnia włoska, pizza, pasta, risotto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${cormorant.variable} ${inter.variable} ${nunito.variable}`}>
      <body className="bg-[#1a1209] text-[#f5f0e8] antialiased">{children}</body>
    </html>
  );
}
