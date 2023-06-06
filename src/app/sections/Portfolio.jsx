"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../components/Card";
import MobileCard from "../components/MobileCard";
import { projects } from "../../projectsData.js";
import { technologies as tech } from "../../technologies.js";
import Image from "next/image";

const Portfolio = () => {
  const [technologiesState, setTechnologiesState] = useState([]);
  const [activeTechnologies, setActiveTechnologies] = useState([]);

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
    setTechnologiesState(getTechnologiesWithStatus(tech));
  }, []);

  useEffect(() => {
    setActiveTechnologies(getActiveTechnologies(technologiesState))
  }, [technologiesState]);

  const getTechnologiesWithStatus = (technologiesObject) => {
    let technologiesWithActiveStatus = [];
    let technologiesArray = Object.values(technologiesObject);
    for (let i = 0; i < technologiesArray.length; i++) {
      const technologie = technologiesArray[i];
      let techWithActiveSataus = {
        name: technologie.name,
        src: technologie.src,
        active: false,
      };
      technologiesWithActiveStatus.push(techWithActiveSataus);
    }
    return technologiesWithActiveStatus;
  };

  const setTechnologieActive = (tech, techArray) => {
    let newTechArray = [];
    let copyOfThechState = [...techArray];
    for (let i = 0; i < copyOfThechState.length; i++) {
      if (copyOfThechState[i].name === tech.name) {
        newTechArray.push({
          name: tech.name,
          src: tech.src,
          active: !tech.active,
        });
      } else {
        newTechArray.push(copyOfThechState[i]);
      }
    }
    setTechnologiesState(newTechArray);
  };

  const getActiveTechnologies = (technologiesArray) => {
    let activeTechnologies = [];
    technologiesArray.forEach((tech) => {
      if (tech.active) {
        activeTechnologies.push(tech.name);
      }
    });
    return activeTechnologies;
  };

  return (
    <section
      id="portfolio"
      className="relative z-10 text-[#F2F2F2]  min-h-screen p-5 md:p-10 "
    >
      <h2 className="mt-12 md:mt-10 text-4xl tracking-[20px] font-nunitoXLight text-center md:text-left">
        Portfolio
      </h2>

      <div className="flex  flex-wrap gap-1 my-5">
        {technologiesState.map((tech, id) => (
          <div
            key={`title_${id}`}
            onClick={(e) => setTechnologieActive(tech, technologiesState)}
            className={
              tech.active
                ? "font-nunitoRegular cursor-pointer flex items-center bg-[#6b7881] py-[1px] px-3 rounded-full border-[1px] border-[#384854]"
                : "font-nunitoRegular cursor-pointer flex items-center bg-[#213340] py-[1px] px-3 rounded-full border-[1px] border-[#384854]"
            }
          >
            <span className="mr-2">{tech.name}</span>
            <div className="">
              <Image className="w-auto h-4" src={tech.src} alt="figma" />
            </div>
          </div>
        ))}
      </div>
{/* cards desktop */}
      <div className="cards-container hidden md:flex min-h-screen  mt-5 p-0">
        <div id="cards" className="flex flex-wrap gap-3">
          {projects.map((project, id) => (
            <Card
              activeTechnologies={activeTechnologies}
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
