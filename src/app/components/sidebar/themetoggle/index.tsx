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
        <div className="w-14">
          <Image
            src="/images/moon-icon.png"
            alt="Moon icon"
            width={25}
            height={25}
            className="mx-auto pt-1"
          />
        </div>
      ) : (
        <div className="w-14">
          <Image
            src="/images/sun-icon.png"
            alt="Sun"
            width={25}
            height={25}
            className="mx-auto pt-1"
          />
        </div>
      )}
      <p className="m-auto px-1">MODE</p>
    </button>
  );
};

export default ThemeToggle;
