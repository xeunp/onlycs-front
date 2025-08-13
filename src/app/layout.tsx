import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Onlycs - Premium CS:GO & CS2 Skins",
  description: "Discover the best CS:GO and CS2 weapon skins, knives, and gloves. Trade, buy, and sell with confidence on the premier Counter-Strike marketplace.",
  keywords: "Onlycs, CS:GO, CS2, Counter-Strike, skins, weapons, knives, gloves, marketplace, trading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen text-white`}
        style={{
          backgroundColor: '#06070b',
          minHeight: '100vh'
        }}
      >
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#06070b' }}>
          <Header />
          <main className="flex-1 flex items-center justify-center" style={{ backgroundColor: '#06070b' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
