import Image from "next/image";
import React from "react";
import githubLogo from "../assets/github.svg";
import speedLogo from "../assets/speed.svg";

const Card = ({
  id,
  description,
  title,
  technologies,
  github,
  live,
  speed,
  activeTechnologies,
}) => {
  //add aos appearing
  let delay = id * 200;
  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-duration="400"
        data-aos-delay={delay}
        className="card bg-white/5 rounded-lg shadow-lg cursor-pointer mb-14 flex h-96 flex-col relative w-64"
        id={id}
      >
        <div className="bg-[#162937] flex flex-col rounded-md  inset-[2px]  absolute z-[2] ">
          <h3 className="text-center rounded-b-md mb-2 font-nunitoXLight bg-[#1F2E3B] px-4 py-1 w-fit mx-auto mt-0">
            {title}
          </h3>
          <div className="p-3 flex flex-col h-full justify-between">
            <div className="min-h-[40%]">
              <p className="font-nunitoRegular">Description</p>
              <p className="font-nunitoXLight">{description}</p>
            </div>
            <div className="mt-5">
              <p className="font-nunitoRegular mb-1">Technologies</p>
              <div className="flex  flex-wrap gap-1">
                {technologies.map((tech, id) => (
                  <div
                    key={`title_${id}`}
                    className={
                      activeTechnologies.indexOf(tech.name) === -1
                        ? "font-nunitoRegular flex items-center bg-[#213340] py-[1px] px-3 rounded-full border-[1px] border-[#384854]"
                        : "font-nunitoRegular flex items-center bg-[#6b7881] py-[1px] px-3 rounded-full border-[1px] border-[#384854]"
                    }
                  >
                    <span className="mr-2">{tech.name}</span>
                    <div className="">
                      <Image
                        className="w-auto h-4"
                        src={tech.src}
                        alt="figma"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex  justify-around absolute bottom-[-50px] z-[2] items-center w-64 h-9 shadow-lg mt-3 hover:bg-[#6e89a813] transition-all duration-75 border-[1px] border-white/20 cursor-default  bg-[#1629372d] rounded-lg">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Image className="w-auto h-6" src={githubLogo} alt="figma" />
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="font-nunitoRegular text-sm bg-[#213340] py-[1px] px-5 rounded-full border-[1px]  border-[#384854] "
          >
            Visit site
          </a>
          <a href={speed} target="_blank" rel="noopener noreferrer">
            <Image className="w-7 h-auto" src={speedLogo} alt="figma" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
