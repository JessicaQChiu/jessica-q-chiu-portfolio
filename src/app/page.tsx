import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="p-2">
      <h1>Welcome Home</h1>
      <div className="flex">
        <Image src="/images/landing-image.png" alt="Smiley face icon" width={600} height={700} />
      </div>
    </div>
  );
};

export default Home;
