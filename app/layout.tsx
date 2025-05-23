import type { Metadata } from "next";
import "./globals.css";
// import Navbar from "@/components/navbar";
// import { OverlayProvider } from "@/components/overlay-provider";
import localFont from 'next/font/local'
// import Navbar2 from "@/components/navbar2";


const basis33 = localFont({
  src: '../font/basis33.ttf',
  display : 'swap',
  variable: '--font-basis33',
})


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
        className={` ${basis33.variable} antialiased bg-gray-300`}
      >
        {/* <Navbar /> */}
        {/* <Navbar2 /> */}
        {/* <OverlayProvider>{children}</OverlayProvider> */}
        {children}
      </body>
    </html>
  );
}
