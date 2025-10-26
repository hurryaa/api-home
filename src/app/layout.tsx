import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Innovation Orbit",
  description: "A modern React single page experience showcasing floating hero, bento layouts, and animated feature steps.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.className)}>
        {children}
      </body>
    </html>
  );
}
