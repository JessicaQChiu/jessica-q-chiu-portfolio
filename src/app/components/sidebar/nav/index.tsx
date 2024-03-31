"use client"; // For the useState hook
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Nav = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="flex flex-col">
        <div>
          <div className="flex p-2">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={400}
                height={400}
              />
            </Link>
          </div>
          <div className="flex flex-col">
            <ul className="text-white">
              <li className="flex w-full justify-center items-center border-l border-white">
                <Link href="/about">
                  <p className="">ABOUT</p>
                </Link>
              </li>
              <li className="flex w-full justify-center items-center border-l border-white">
                <Link href="/portfolio">
                  <p>PORTFOLIO</p>
                </Link>
              </li>
              <li className="flex w-full justify-center items-center border-l border-white">
                <Link href="/contact">
                  <p>CONTACT</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
