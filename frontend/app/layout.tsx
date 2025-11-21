import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Get Mygym - Modern Gym Management Software",
  description:
    "Powerful gym management software with member management, attendance tracking, auto-renewal, advanced analytics, and more. Join 500+ gyms across India.",
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
      <body className={`${geist.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" ? <Analytics /> : null}
      </body>
    </html>
  );
}
