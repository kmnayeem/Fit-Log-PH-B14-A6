import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Oswald,
  Inter,
} from "next/font/google";

import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description: "Train hard, log honest.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-[#0A0A0A] text-white">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}