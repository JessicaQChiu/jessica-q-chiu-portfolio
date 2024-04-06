import React from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themetoggle";

const Navmobile = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <nav className="md:hidden flex flex-row flex-wrap fixed top-0 left-0 right-0 h-[120px] xs:h-[75px] my-auto bg-blue-200 dark:bg-zinc-900 border-b-2 border-black dark:border-stone-400 dark:text-white">
      <Link href="/" className="flex flex-col justify-center px-4">
        <Image
          src="/images/folder-icon.png"
          alt="Logo"
          width={25}
          height={25}
          priority={true}
          className="mx-auto pt-1"
        />
        HOME
      </Link>
      <Link href="/about" className="flex flex-col justify-center px-4">
        <Image
          src="/images/info-icon-sq.png"
          alt="Logo"
          width={25}
          height={25}
          priority={true}
          className="mx-auto pt-1"
        />
        ABOUT
      </Link>
      <Link href="/portfolio" className="flex flex-col justify-center px-4">
        <Image
          src="/images/save-icon-sq.png"
          alt="Logo"
          width={25}
          height={25}
          priority={true}
          className="mx-auto pt-1"
        />
        WORK
      </Link>
      <Link href="/contact" className="flex flex-col justify-center">
        <Image
          src="/images/mail-icon-sq.png"
          alt="Logo"
          width={25}
          height={25}
          priority={true}
          className="mx-auto pt-1"
        />
        CONTACT
      </Link>
      <div className="flex xs:fixed xs:top-2.5 xs:right-4 w-12">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navmobile;
