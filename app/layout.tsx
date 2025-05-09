import type { Metadata } from "next";
import { Geist_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { OverlayProvider } from "@/components/overlay-provider";

const press_start_2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  weight: "400",
  preload: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${press_start_2P.variable} ${geistMono.variable} antialiased bg-gray-300`}
      >
        <Navbar />
        <OverlayProvider>{children}</OverlayProvider>
      </body>
    </html>
  );
}
