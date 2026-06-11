import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Archivo({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-display"
});
const body = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "AnimaTwin — Cyfrowy strażnik zdrowia Twojego psa",
  description:
    "Pet Digital Twin & AI Guardian. Pełna historia medyczna, Health Map 3D, Food Finder, 7 248 klinik weterynaryjnych. Jedna aplikacja.",
  openGraph: {
    title: "AnimaTwin — Pet Digital Twin & AI Guardian",
    description: "Wirtualna kopia zdrowia Twojego zwierzaka, która ewoluuje razem z nim.",
    url: "https://animatwin.com",
    siteName: "AnimaTwin",
    locale: "pl_PL",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${display.variable} ${body.variable}`}>
      <body>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
