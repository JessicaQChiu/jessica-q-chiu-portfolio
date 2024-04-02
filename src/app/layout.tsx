import type { Metadata } from "next";
import React from "react";
import Head from "next/head";
import SidebarNav from "./components/sidebar";
import Titlebar from "./components/titlebar";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jessica Q Chiu - Portfolio",
  description: "Porfolio website of Jessica Q Chiu",
  metadataBase: new URL('https://jqc-portfolio.vercel.app/'),
  robots: 'follow, index',
  openGraph: {
    title: 'Jessica Q Chiu - Portfolio',
    description: 'Porfolio website of Jessica Q Chiu',
    url: 'https://jqc-portfolio.vercel.app/',
    siteName: 'Jessica Q Chiu Portfolio',
    images: [
      {
        url: '../public/images/computer-icon.png',
        width: 200,
        height: 160,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable}`}>
      <Head>
        <title>{"Jessica Q Chiu Portfolio"}</title>
      </Head>
      <body>
        <div className="flex justify-center pt-16">
          <SidebarNav />
          <div className="flex flex-col md:ml-6 lg:ml-20 mb-12">
            <div className="max-w-2xl md:max-w-md lg:max-w-xl m-8 md:m-0 bg-white border-2 border-black shadow-[8px_8px_0px_0px_#fed7aa]">
              <Titlebar />
              <div className="px-2 pb-4">{children}</div>
            </div>
            <p className="mt-4 text-end text-sm">Built with ♡ in 2024 by Jessica Q Chiu</p>
          </div>
        </div>
      </body>
    </html>
  );
}
