import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jai Bhavani Tent House | Luxury Wedding Setup, VIP Stage & Live Sound in Kalaburagi",
  description:
    "Jai Bhavani Tent House based in Navanihal, Kamalapur, Kalaburagi (Gulbarga), Karnataka. We offer VIP tent arrangements, wedding stage decorations, live sound systems, and Jayanthi events setup.",
  keywords: [
    "Jai Bhavani Tent House",
    "Tent House Navanihal",
    "Wedding Decoration Kalaburagi",
    "VIP Tent Setup Kamalapur",
    "Sound System & LED Wall Rental Gulbarga",
    "Stage Decoration Karnataka",
    "LED Wall Rental Kalaburagi",
    "Jayanthi Event Setup",
    "Dr. B. R. Ambedkar Jayanti Stage",
    "Chhatrapati Shivaji Maharaj Jayanti Setup",
  ],
  authors: [{ name: "Jai Bhavani Tent House" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable} darkScroll`}>
      <body className="font-sans antialiased text-white bg-neutral-950 overflow-x-hidden selection:bg-amber-500 selection:text-neutral-950">
        {children}
      </body>
    </html>
  );
}

