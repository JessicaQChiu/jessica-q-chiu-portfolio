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
        <div className="flex flex-col mb-6 px-4 py-2 bg-white border-2 border-black rounded-lg shadow-[5px_5px_0px_0px_#fed7aa]">
          <p>
            Hey there! I&apos;m Jess, a Vancouver-based developer and
            illustrator.
          </p>
        </div>
        <div className="flex flex-col px-4 py-2 bg-blue-200 border-2 border-black rounded-lg shadow-[5px_5px_0px_0px_#fed7aa]">
          <ul className="text-black">
            <li className="flex w-full justify-center items-center bg-white border-2 border-black rounded-lg">
              <Link href="/about">
                <p>ABOUT</p>
              </Link>
            </li>
            <li className="flex w-full justify-center items-center bg-white border-2 border-black rounded-lg my-1">
              <Link href="/portfolio">
                <p>PORTFOLIO</p>
              </Link>
            </li>
            <li className="flex w-full justify-center items-center bg-white border-2 border-black rounded-lg">
              <Link href="/contact">
                <p>CONTACT</p>
              </Link>
            </li>
          </ul>
          <div className="flex flex-row justify-between pt-2">
            <div>
            <Link href="/">
                <Image
                  src="/images/star.png"
                  alt="Logo"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <div className="flex flex-row">
              <Link href="/">
                <Image
                  src="/images/star.png"
                  alt="Logo"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/star.png"
                  alt="Logo"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/star.png"
                  alt="Logo"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
