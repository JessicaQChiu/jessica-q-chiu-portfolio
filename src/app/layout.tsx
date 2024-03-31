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
    <html lang="en" className={`spaceMono.className`}>
      <Head>
          <title>{"Jessica Q Chiu Portfolio"}</title>
        </Head>
      <body>
        <div className="min-h-screen">
          <div className="flex">
            <Sidebar />
            <div className="flex flex-col flex-grow w-screen md:w-full min-h-screen">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
