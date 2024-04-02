"use client";
import React from "react";
import Button from "../components/button";

const About = () => {
  return (
    <div className="p-2">
      <h1>ABOUT ME</h1>
      <p>
        Developer. Web Designer. Illustrator. Looking to grow, collaborate, and
        build with you!
        <br />
        <br />
        If you&apos;re reading this it means I&apos;ve taken a peek at what you
        do or you have an opening and I&apos;d love for us to work together.
        Let&apos;s learn more me and why I may be a good fit for you.
      </p>
      <br />
      <Button onClick={() => window.open("Jessica Chiu - Resume.pdf")}>
        Download My Resume (PDF)
      </Button>
      <br />
      <hr />
      <h2>Who am I?</h2>
      <p className="ml-6">
        Self-taught developer with a focus on front-end development. New Zealand
        IT/business graduate with professional experience working as an analyst
        in the financial technology industry. Freelance artist.
        <br />
        <br />
        During the NZ COVID-19 lockdown, I recognised the importance of being
        online - studying, working, and connecting with others. However, this
        also highlighted the issues of digital accessibility which inspired me
        to take the leap and begin learning web development. I quickly came to
        realise how programming embodies the things I love and enjoy.
      </p>
      <hr />
      <h2>What are my skills?</h2>
      <h3 className="ml-6">- Front-end Development</h3>
        <p className="ml-12">
          HTML, CSS, JavaScript.
          <br />
          Bootstrap, Tailwind CSS. React, JSX, Next.js.
        </p>
      <h3 className="ml-6">- Development Other</h3>
        <p className="ml-12">Git, Github. Figma, Trello. Agile, Scrum</p>
      <h3 className="ml-6">- Design</h3>
      <p className="ml-12">
        UX/UI Design - Wireframes, prototypes, usability testing.
        <br />
        Graphic design, traditional art, cel painting.
      </p>
      <hr />
      <h2>What is my history?</h2>
      <h3 className="ml-6">2022-2024 <br /> - Freelancer + upskilling</h3>
      <p className="ml-12">Studying software development. Working as a freelance designer and artist.</p>
      <h3 className="ml-6">2020-2022 <br /> - Operations/Finance Analyst</h3>
      <p className="ml-12">Being an operations/finance analyst in a startup environment allowed me
        to build many transferrable skills such as learning new procedures,
        compliance with standards/practices, writing documentation, taking
        initiative with improvements, and more.</p>
      <h3 className="ml-6">2016-2020 <br />- Victoria University of Wellington</h3>
      <p className="ml-12">Bachelor&apos;s degree in Information Systems and Management with a
        specialisation in IT solutions.</p>
      <hr />
      <h2>End Note</h2>
      <p className="ml-6">
        It&apos;s difficult to summarise my sincerity to enter this industry and
        how earnest I am to be growing as a developer, but it is easy for me to
        say that I would love a chance to work together with you.
        <br />
        <br />
        Thank you for your consideration!
      </p>
    </div>
  );
};

export default About;
