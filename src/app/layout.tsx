import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ED Mini Soccer Bandung",
  description: "Mini Soccer Terbaik di Bandung Selatan. Booking lapangan sintetis berkualitas sekarang.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={cn(
          inter.variable,
          outfit.variable,
          "antialiased font-sans bg-zinc-50 text-zinc-900"
        )}
      >
        {children}
      </body>
    </html>
  );
}
