import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GPTW API--汇集全球主流AI大模型，用AI驱动生产力",
  description: "chatgpt-5,claude code,midjourney api,chatgpt订阅,chatgpt镜像,claude api,ai绘画,gemini api",
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
