import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/button";

const Portfolio = () => {
  return (
    <div className="p-2">
      <h1>PORTFOLIO</h1>
      <p>A collection of my work.</p>
      <hr />
      <div className="flex flex-col">
        <h2>Website - Blue Days Podcast</h2>
        <Image
          src="/images/blue-days-preview.png"
          alt="Text that says Jessica Q Chiu - developer and illustrator and an image of a home, baba yaga's hut"
          width={675}
          height={750}
        />
        <p className="py-4">
          Mental health podcast landing page. Built using HTML, CSS, Javascript, Bootstrap, and JQuery.
        </p>
        <div className="flex row mb-4">
          <Link href="https://blue-days.vercel.app/">
            <Button>Live Demo</Button>
          </Link>
          <Link href="https://github.com/JessicaQChiu/podcast-website">
            <Button>Source Code</Button>
          </Link>
        </div>
      </div>
      <hr />
      <div className="flex flex-col">
        <h2>Game - Ladybug Jumper</h2>
        <Image
          src="/images/ladybug-jump-preview.png"
          alt="Text that says Jessica Q Chiu - developer and illustrator and an image of a home, baba yaga's hut"
          width={675}
          height={750}
        />
        <p className="py-4">2D platformer game. Built using HTML, CSS, and Javascript.</p>
        <div className="flex row mb-4">
          <Link href="https://jessicaqchiu.github.io/ladybug-jumper-game/">
            <Button>Live Demo</Button>
          </Link>
          <Link href="https://github.com/JessicaQChiu/ladybug-jumper-game">
            <Button>Source Code</Button>
          </Link>
        </div>
      </div>
      <hr />
      <div className="flex flex-col">
        <h2>Website - Portfolio (this one!)</h2>
        <Image
          src="/images/landing-image.png"
          alt="Text that says Jessica Q Chiu - developer and illustrator and an image of a home, baba yaga's hut"
          width={450}
          height={500}
          className="m-auto"
        />
        <p className="py-4">
          Portfolio website. Built using React, Next.js, Tailwind CSS, and TypeScript.
        </p>
        <div className="flex row mb-4">
        <Link href="https://jessicaqchiu.vercel.app/"><Button>Live Demo</Button></Link>
        <Link href="https://github.com/JessicaQChiu/jessica-q-chiu-portfolio"><Button>Source Code</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
