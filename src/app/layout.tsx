import type { Metadata } from "next";
import React from "react";
import Head from "next/head";
import Sidebar from "./components/sidebar";
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
            <Sidebar />
            <div className="flex flex-col">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
