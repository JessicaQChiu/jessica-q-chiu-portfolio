"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => (theme == "light" ? setTheme("dark") : setTheme("light"))}
    >
      {theme === "light" ? (
        <>
          <Image
            src="/images/moon-icon.png"
            alt="Moon icon"
            width={25}
            height={25}
            className="mx-auto pt-1"
          />
          <p className="text-sm m-auto px-1">
            Dark
            <br />
            Mode
          </p>
        </>
      ) : (
        <>
          <Image
            src="/images/sun1.png"
            alt="Sun"
            width={25}
            height={25}
            className="mx-auto pt-1"
          />
          <p className="text-sm m-auto px-1">
            Light
            <br />
            Mode
          </p>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
