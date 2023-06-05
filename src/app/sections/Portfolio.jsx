"use client";
import React from "react";
import { useEffect } from "react";
import Card from "../components/Card";

const Portfolio = () => {
  const projects = [
    {
      title: "Goldkert transfer",
      description:
        "HTML5UP based website. Made for the Goldkertbau Kft. The site shares and gathers information.",
      technologies: [
        {
          name: "Javascript",
          src: "",
        },
        {
          name: "Htlm",
          src: "",
        },
        {
          name: "Css",
          src: "",
        },
        {
          name: "React",
          src: "",
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
          src: "",
        },
        {
          name: "Htlm",
          src: "",
        },
        {
          name: "Css",
          src: "",
        },
        {
          name: "React",
          src: "",
        },
      ],
    },
    {
      title: "Luxcode",
      description: "Hobby project made for my future business.",
      technologies: [
        {
          name: "Javascript",
          src: "",
        },
        {
          name: "Htlm",
          src: "",
        },
        {
          name: "Css",
          src: "",
        },
        {
          name: "React",
          src: "",
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
