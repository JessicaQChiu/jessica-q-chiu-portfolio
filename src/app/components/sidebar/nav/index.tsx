"use client"; // For the useState hook
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themetoggle";

const Nav = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="max-md:hidden flex flex-col w-60 max-w-60">
        <div className="sticky top-8">
          <div className="flex justify-center mb-8">
            <Link href="/">
              <Image
                src="/images/computer-icon-white-edge.png"
                alt="Logo"
                width={200}
                height={160}
                priority={true}
              />  
              <h1 className="text-center text-xl tracking-wide underline underline-offset-8 decoration-dotted dark:text-white">
                JESSICA.Q.CHIU
              </h1>
            </Link>
          </div>
          <div className="flex flex-col mb-6 px-4 py-2 bg-white dark:bg-zinc-900 border-2 border-black dark:border-teal-600 shadow-[5px_5px_0px_0px_#fed7aa] dark:shadow-[5px_5px_0px_0px_#a8a29e]">
            <p className="dark:text-white">
              Hey there! I&apos;m Jess. A developer and illustrator based in
              Vancouver, Canada.
            </p>
          </div>
          <div className="flex flex-col bg-white border-2 border-black dark:border-teal-600 shadow-[5px_5px_0px_0px_#fed7aa] dark:shadow-[5px_5px_0px_0px_#a8a29e]">
            <div className="flex w-full px-4 bg-blue-200 dark:bg-teal-800 border-b-2 border-black dark:border-teal-800">
              <h1 className="text-base no-underline dark:text-white">Navigation</h1>
            </div>
            <nav aria-label="Site">
              <ul className="px-4 py-2 text-black dark:bg-stone-200">
                <li className="flex items-center border-2 border-white dark:border-stone-200 hover:border-dotted hover:border-black dark:hover:border-black active:text-white active:bg-teal-800">
                  <Link href="/" className="flex row w-full">
                    <Image
                      src="/images/folder-icon.png"
                      alt="Logo"
                      width={25}
                      height={25}
                      className="ml-2"
                    />
                    <p className="pl-1">Home</p>
                  </Link>
                </li>
                <li className="flex ml-6 w-42 items-center border-l-2 border-dotted border-black hover:border-hidden active:text-white active:bg-teal-800">
                  <Link
                    href="/about"
                    className="flex row w-full border-2 border-white dark:border-stone-200 hover:border-dotted hover:border-black dark:hover:border-black hover:pl-0.5 active:text-white active:bg-teal-800">
                    <Image
                      src="/images/info-icon.png"
                      alt="information icon"
                      width={35}
                      height={25}
                    />
                    <p className="pl-1">About Me</p>
                  </Link>
                </li>
                <li className="flex ml-6 w-42 items-center border-l-2 border-dotted border-black hover:border-hidden active:text-white active:bg-teal-800">
                  <Link
                    href="/portfolio"
                    className="flex row w-full border-2 border-white dark:border-stone-200 hover:border-dotted hover:border-black dark:hover:border-black hover:pl-0.5 active:text-white active:bg-teal-800">
                    <Image
                      src="/images/save-icon.png"
                      alt="save icon for portfolio works"
                      width={35}
                      height={25}
                    />
                    <p className="pl-1">Portfolio</p>
                  </Link>
                </li>
                <li className="flex ml-6 w-42 items-center border-l-2 border-dotted border-black hover:border-hidden active:text-white active:bg-teal-800">
                  <Link
                    href="/contact"
                    className="flex row w-full border-2 border-white dark:border-stone-200 hover:border-dotted hover:border-black dark:hover:border-black hover:pl-0.5 active:text-white active:bg-teal-800"
                  >
                    <Image
                      src="/images/mail-icon.png"
                      alt="envelope icon"
                      width={35}
                      height={25}
                    />
                    <p className="pl-1">Contact Me</p>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col mt-6 p-1 dark:text-white bg-white dark:bg-teal-800 border-2 border-black dark:border-teal-600 shadow-[5px_5px_0px_0px_#fed7aa] dark:shadow-[5px_5px_0px_0px_#a8a29e]">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col px-1 border-2 border-white dark:border-teal-800 hover:border-dotted hover:border-black dark:hover:border-white">
                <ThemeToggle />
              </div>
              <div className="flex flex-row">
                <button
                  onClick={() => window.location.reload()}
                  type="button"
                  className="flex flex-col px-1 border-2 border-white dark:border-teal-800 hover:border-dotted hover:border-black dark:hover:border-white"
                >
                  <Image
                    src="/images/reload-icon.png"
                    alt="Refresh arrow icon"
                    width={25}
                    height={25}
                    className="dark:hidden mx-auto pt-1"
                  />
                  <Image
                    src="/images/reload-icon-dark.png"
                    alt="Refresh arrow icon"
                    width={25}
                    height={25}
                    className="hidden dark:flex mx-auto pt-1"
                  />
                  <p className="text-sm m-auto">Reload</p>
                </button>
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  type="button"
                  className="flex flex-col px-1 w-12 border-2 border-white dark:border-teal-800 hover:border-dotted hover:border-black dark:hover:border-white"
                >
                  <Image
                    src="/images/arrow-up-icon1.png"
                    alt="Arrow pointing up icon"
                    width={25}
                    height={25}
                    className="dark:hidden mx-auto pt-1"
                  />
                  <Image
                    src="/images/arrow-up-icon-dark1.png"
                    alt="Arrow pointing up icon"
                    width={25}
                    height={25}
                    className="hidden dark:flex mx-auto pt-1"
                  />
                  <p className="text-sm m-auto">Top</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
