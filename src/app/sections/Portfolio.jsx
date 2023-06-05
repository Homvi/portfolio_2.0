"use client";
import React from "react";
import { useEffect } from "react";
import Card from "../components/Card";
import figma from "../assets/tech-logo/figma.png";
import react from "../assets/tech-logo/react.svg";
import git from "../assets/tech-logo/git.png";
import node from "../assets/tech-logo/node.svg";
import tailwind from "../assets/tech-logo/tailwind.png";
import javascript from "../assets/tech-logo/javascript.svg";
import css from "../assets/tech-logo/css.svg";
import html from "../assets/tech-logo/html.svg";
import next from "../assets/tech-logo/next.svg";

const Portfolio = () => {
  const projects = [
    {
      title: "Goldkert transfer",
      description:
        "HTML5UP based website. Made for the Goldkertbau Kft. The site shares and gathers information.",
      technologies: [
        {
          name: "Html",
          src: html,
        },
        {
          name: "Css",
          src: css,
        },
        {
          name: "Javascript",
          src: javascript,
        },
      ],
    },
    {
      title: "Wedding site",
      description:
        "Custom website made for share information about the wedding of the client.",
      technologies: [
        {
          name: "Javascript",
          src: javascript,
        },
        {
          name: "Git",
          src: git,
        },
        {
          name: "React",
          src: react,
        },
        {
          name: "Next.js",
          src: next,
        },
        {
          name: "Tailwind.css",
          src: tailwind,
        },
        {
          name: "Figma",
          src: figma,
        },
      ],
    },
    {
      title: "Luxcode",
      description: "Hobby project made for my future business.",
      technologies: [
        {
          name: "Javascript",
          src: javascript,
        },
        {
          name: "Figma",
          src: figma,
        },
        {
          name: "Git",
          src: git,
        },
        {
          name: "React",
          src: react,
        },
        {
          name: "Tailwind.css",
          src: tailwind,
        },
      ],
    },
  ];

  useEffect(() => {
    document.getElementById("cards").onmousemove = (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }, []);

  return (
    <section
      id="portfolio"
      className="relative z-10 text-[#F2F2F2]  min-h-screen p-5 md:p-10 "
    >
      <h2 className="mt-10 text-4xl tracking-[20px] font-nunitoXLight text-center sm:text-left">
        Portfolio
      </h2>
      <div className="cards-container flex min-h-screen  mt-5 p-0">
        <div id="cards" className="flex flex-wrap gap-3 max-w-7xl ">
          {projects.map((project, id) => (
            <Card
              key={id}
              id={`card_${id}`}
              description={project.description}
              title={project.title}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
