import Image from "next/image";
import React from "react";
import githubLogo from "../assets/github.svg";
import speedLogo from "../assets/speed.svg";
import liveLogo from "../assets/live.svg";

const MobileCard = ({
  id,
  description,
  title,
  technologies,
  github,
  live,
  speed,
  activeTechnologies,
}) => {
  return (
    <div className="w-full bg-[#ffffff0c]  rounded-lg backdrop-blur-md custom-white-border">
      <div className="bg-[#1F2E3B] absolute  w-fit px-3 py-[2px] text-sm font-nunitoLight rounded-tl-lg rounded-br-lg">
        {title}
      </div>
      <div className="content  flex">
        <div className="p-3 mt-5">
          <p className="mb-2 font-nunitoXLight">{description}</p>
          <div className="flex flex-wrap gap-1">
            {technologies.map((tech, id) => (
              <div
                key={`title_${id}`}
                className={
                  activeTechnologies.indexOf(tech.name) === -1
                    ? "font-nunitoRegular flex items-center bg-[#213340] text-sm py-[1px] px-[7px] rounded-full border-[1px] border-[#384854]"
                    : "font-nunitoRegular flex items-center bg-[#6b7881] text-sm py-[1px] px-[7px] rounded-full border-[1px] border-[#384854]"
                }
              >
                <span className="mr-2">{tech.name}</span>
                <div className="">
                  <Image className="w-auto h-4" src={tech.src} alt="figma" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col p-2  justify-around items-center w-16 bg-[#1F2E3B]">
          <a
            href={speed}
            target="_blank"
            className="w-5 animate-bounce"
            rel="noopener noreferrer"
          >
            <Image className="w-auto h-6" src={speedLogo} alt="figma" />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Image className="w-auto h-6" src={githubLogo} alt="figma" />
          </a>
          <a href={live} target="_blank" rel="noopener noreferrer">
            <Image
              className="w-auto h-6 opacity-80"
              src={liveLogo}
              alt="figma"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
