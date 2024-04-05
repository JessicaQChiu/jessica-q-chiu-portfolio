"use client";
import React from "react";
import Button from "../components/button";

const About = () => {
  return (
    <div className="p-2">
      <h1>ABOUT ME</h1>
      <p>
        Developer. Web Designer. Illustrator. Looking to grow, collaborate, and
        build with you.
        <br />
        <br />
        If you&apos;re reading this it means I&apos;ve taken a peek at what you
        do or you have an opening and I&apos;d love for us to work together.
        Here&apos;s a glimpse into who I am and why we may be a match.
      </p>
      <br />
      <Button>
        <a href="Jessica Chiu - Resume.pdf" target="_blank" rel="noreferrer">
          Open My Resume (PDF) ↗
        </a>
      </Button>
      <br />
      <hr />
      <h2>Who am I?</h2>
      <p className="ml-6 mb-4">
        Self-taught developer with a focus on front-end development and digital
        accessibility. New Zealand IT/business graduate with professional
        experience working as an analyst in the financial technology industry.
        Freelance artist.
        <br />
        <br />
        With a background in art, business, finance, and IT, I can bring a
        diverse and creative insight to development projects. I strive to craft
        inclusive and innovative digital spaces and experiences.
        <br />
        <br />
        The COVID-19 lockdown helped me recognise the importance of being online
        - studying, working, and connecting with others. This also highlighted
        the issues of digital accessibility which inspired me to begin learning
        web development. I quickly came to realise how programming embodies the
        things I love and enjoy which encouraged me to pursue it as a career.
        <br />
        <br />
        When I&apos;m offline, you can find me reading with a cup of tea,
        painting, or playing board games.
      </p>
      <hr />
      <h2>What are my skills?</h2>
      <h3 className="ml-6">- Front-end Development</h3>
      <p className="ml-12 mb-4">
        HTML, CSS, JavaScript. Tailwind CSS, Bootstrap, SASS. TypeScript. React,
        JSX, Next.js.
      </p>
      <h3 className="ml-6">- Development - Other</h3>
      <p className="ml-12 mb-4">Git, Github. Figma, Trello. Agile, Scrum.</p>
      <h3 className="ml-6">- Design + Art</h3>
      <p className="ml-12 mb-4">
        UX/UI Design - Wireframes, prototypes, usability testing. Graphic
        design. Traditional art.
      </p>
      <h3 className="ml-6">- Other</h3>
      <p className="ml-12 mb-4">
        Developing process documentation. Validation, formatting, and management
        of client data. Risk and Compliance analysis. Internal audits. Microsoft
        Excel + Google Sheets. Customer support.
      </p>
      <hr />
      <h2>What is my history?</h2>
      <h3 className="ml-6">- 2022-2024 | Freelancer + Upskilling</h3>
      <p className="ml-12 mb-4">
        Studying software development. Working as a freelance designer and
        artist on the side.
      </p>
      <h3 className="ml-6">- 2020-2022 | Operations/Finance Analyst, FNZ</h3>
      <p className="ml-12 mb-4">
        Financial management for a start-up investment platform later acquired
        by a global wealth company. Included verification, reconcilation, trade
        settlements, risk and compliance analysis, interal audits, documentation
        and record management, providing training, and liasing with 3rd parties
        - brokers, custodians, and clients.
      </p>
      <h3 className="ml-6">
        - 2018-2020 | Customer Support Specialist, Trade Me
      </h3>
      <p className="ml-12 mb-4">
        Worked within the site functionality and trade support teams. Site usage
        and conflict resolution support.
      </p>
      <h3 className="ml-6">- 2016-2020 | Victoria University of Wellington</h3>
      <p className="ml-12 mb-4">
        Bachelor&apos;s degree in Information Systems and Management with a
        specialisation in IT solutions.
      </p>
      <hr />
      <h2>End Note</h2>
      <p className="ml-6">
        It&apos;s difficult to say how sincere I am to enter this industry and
        grow as a developer over a few lines, but I hope that this gives you a
        glimpse. Please get in touch about freelance and permanent developer
        positions or other exciting collaboration opportunities!
        <br />
        <br />
        Thank you for your consideration!
      </p>
    </div>
  );
};

export default About;
