import type React from "react";
// <CHANGE> Updated metadata for gym management website
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Get_Mygym - Modern Gym Management Software",
  description:
    "Powerful gym management software with member management, attendance tracking, auto-renewal, advanced analytics, and more. Join 500+ gyms.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo1.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo1.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo1.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo-apple.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
