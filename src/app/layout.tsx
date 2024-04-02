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
        <div className="h-screen">
          <div className="flex justify-center pt-20">
            <SidebarNav />
            <div className="flex flex-col md:ml-6 lg:ml-20">
              <div className="max-w-2xl md:max-w-md lg:max-w-lg bg-white border-2 border-black shadow-[8px_8px_0px_0px_#fed7aa]">
                <Titlebar />
                <div className="px-2"> 
                {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
