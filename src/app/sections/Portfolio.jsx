"use client";
import React from "react";
import { useEffect } from "react";
import Card from "../components/Card";
import MobileCard from "../components/MobileCard";
import { projects } from "../../projectsData.js";

const Portfolio = () => {
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
      <h2 className="mt-12 md:mt-10 text-4xl tracking-[20px] font-nunitoXLight text-center md:text-left">
        Portfolio
      </h2>

      <div className="cards-container hidden md:flex min-h-screen  mt-5 p-0">
        <div id="cards" className="flex flex-wrap gap-3">
          {projects.map((project, id) => (
            <Card
              key={id}
              id={id}
              description={project.description}
              title={project.title}
              technologies={project.technologies}
              github={project.github}
              live={project.live}
              speed={project.speed}
            />
          ))}
        </div>
      </div>
      <div className="cards-container  md:hidden min-h-screen  mt-5 p-0">
        <div id="cardsMobile" className="flex flex-col gap-3">
          {projects.map((project, id) => (
            <MobileCard
              key={id}
              id={`card_mobile_${id}`}
              description={project.description}
              title={project.title}
              technologies={project.technologies}
              github={project.github}
              live={project.live}
              speed={project.speed}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
