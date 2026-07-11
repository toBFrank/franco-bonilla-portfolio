import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Franco's Portfolio",
  description: "Personal portfolio website",
  icons: {
    icon: `${BASE_PATH}/icons/franco_icon_closeup.png`
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable}`}>
      <body className="layout-body">
      <Navbar />
        <main className="layout-main">
          {children}
        </main>
      </body>
    </html>
  );
}