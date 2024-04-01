"use client"; // For the useState hook
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="max-md:hidden flex flex-col h-screen w-60">
        <div className="flex justify-center mb-12">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={200}
              height={200}
              priority={true}
            />
          </Link>
        </div>
        <div className="flex flex-col mb-6 px-4 py-2 bg-white border-2 border-black shadow-[5px_5px_0px_0px_#fed7aa]">
          <p>
            Hey there! I&apos;m Jess, a Vancouver-based developer and
            illustrator.
          </p>
        </div>
        <div className="flex flex-col bg-white border-2 border-black shadow-[5px_5px_0px_0px_#fed7aa]">
          <div className="flex w-full px-4 py-2 bg-blue-200 border-b-2 border-black">
            <p>Navigation</p>
          </div>
          <ul className="px-4 py-2 text-black">
            <li className="flex items-center border-2 border-white hover:border-dotted hover:border-black active:text-white active:bg-blue-950">
              <Link href="/" className="flex row w-full">
                <Image
                  src="/images/star.png"
                  alt="Logo"
                  width={25}
                  height={25}
                />
                <p>Home.exe</p>
              </Link>
            </li>
            <li className="flex ml-6 w-42 items-center bg-white border-l-2 border-dotted border-black hover:border-hidden active:text-white active:bg-blue-950">
              <Link
                href="/about"
                className="flex row w-full border-2 border-white hover:border-dotted hover:border-black hover:pl-0.5"
              >
                <Image
                  src="/images/starline.png"
                  alt="Logo"
                  width={35}
                  height={25}
                />
                <p>About</p>
              </Link>
            </li>
            <li className="flex ml-6 w-42 items-center bg-white border-l-2 border-dotted border-black hover:border-hidden active:text-white active:bg-blue-950">
              <Link
                href="/portfolio"
                className="flex row w-full border-2 border-white hover:border-dotted hover:border-black hover:pl-0.5"
              >
                <Image
                  src="/images/starline.png"
                  alt="Logo"
                  width={35}
                  height={25}
                />
                <p>Portfolio</p>
              </Link>
            </li>
            <li className="flex ml-6 w-42 items-center bg-white border-l-2 border-dotted border-black hover:border-hidden active:text-white active:bg-blue-950">
              <Link
                href="/contact"
                className="flex row w-full border-2 border-white hover:border-dotted hover:border-black hover:pl-0.5"
              >
                <Image
                  src="/images/starline.png"
                  alt="Logo"
                  width={35}
                  height={25}
                />
                <p>Contact</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col mt-6 p-2 bg-white border-2 border-black shadow-[5px_5px_0px_0px_#fed7aa]">
          <div className="flex flex-row justify-between">
            <div>
              <Link href="/" className="flex flex-col px-1 border-2 border-white hover:border-dotted hover:border-black">
                <Image
                  src="/images/star.png"
                  alt="Logo"
                  width={30}
                  height={30}
                  style={{margin: "0 auto"}}
                />
                <p className="text-sm text-center">Dark<br/>Mode</p>
              </Link>
            </div>
            <div className="flex flex-row">
              <Link href="/" className="flex flex-col px-1 border-2 border-white hover:border-dotted hover:border-black">
                <Image
                  src="/images/star.png"
                  alt="Logo"
                  width={30}
                  height={30}
                  style={{margin: "0 auto"}}
                />
                <p className="text-sm text-center">Reload</p>
              </Link>
              <Link href="/" className="flex flex-col px-1 w-12 border-2 border-white hover:border-dotted hover:border-black">
                <Image
                  src="/images/star.png"
                  alt="Logo"
                  width={30}
                  height={30}
                  style={{margin: "0 auto"}}
                />
                <p className="text-sm text-center">Top</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
