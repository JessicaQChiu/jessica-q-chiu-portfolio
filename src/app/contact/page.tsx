import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="p-2">
      <h1>CONTACT ME</h1>
      <p>
        Let&apos;s chat! Always happy to connect to share ideas or see if
        there&apos;s something we can work on together. Hope to hear from you
        soon.
      </p>
      <hr />
      <div className="flex flex-row">
        <Image src="/images/smiley-icon.png" alt="Smiley face icon" width={45} height={45} />
        <h2>Connect with me</h2>
      </div>
      <ul className="dark:text-white">
        <li className="flex ml-6 w-42 items-center border-l-2 border-dotted border-black dark:border-white hover:border-hidden active:text-white active:bg-teal-800">
          <Link
            href="mailto:jessica.q.chiu@gmail.com"
            className="flex row w-full border-2 border-white dark:border-zinc-900 hover:border-dotted hover:border-black dark:hover:border-white hover:pl-0.5"
          >
            <Image
              src="/images/mail-icon.png"
              alt="envelope icon"
              width={35}
              height={25}
            />
            Email: Jessica.Q.Chiu@gmail.com
          </Link>
        </li>
        <li className="flex ml-6 w-42 items-center border-l-2 border-dotted border-black dark:border-white hover:border-hidden active:text-white active:bg-teal-800">
          <Link
            href="https://github.com/JessicaQChiu"
            className="flex row w-full border-2 border-white dark:border-zinc-900 hover:border-dotted hover:border-black dark:hover:border-white hover:pl-0.5"
          >
            <Image
              src="/images/github-icon.png"
              alt="Logo"
              width={35}
              height={25}
            />
            Github: JessicaQChiu
          </Link>
        </li>
        <li className="flex ml-6 w-42 items-center border-l-2 border-dotted border-black dark:border-white hover:border-hidden active:text-white active:bg-teal-800">
          <Link
            href="https://twitter.com/JessicaQChiu"
            className="flex row w-full border-2 border-white dark:border-zinc-900 hover:border-dotted hover:border-black dark:hover:border-white hover:pl-0.5"
          >
            <Image
              src="/images/xtwitter-icon.png"
              alt="Logo"
              width={35}
              height={25}
            />
            X/Twitter: JessicaQChiu
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
