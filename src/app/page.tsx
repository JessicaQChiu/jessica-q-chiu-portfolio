"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const Home = () => {
  return (
    <div className="p-2">
      <h1>HOME PAGE</h1>
      <div className="flex mt-2">
        <Image src="/images/landing-img.png" alt="Text that says Jessica Q Chiu - developer and illustrator and an image of a home, baba yaga's hut" width={675} height={750} />
      </div>
    </div>
  );
};

export default Home;
