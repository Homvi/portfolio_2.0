import Image from "next/image";
import React from "react";

const MobileCard = ({
  id,
  description,
  title,
  technologies,
  github,
  live,
  speed,
}) => {
  return (
    <div  className="w-full bg-[#ffffff0c] rounded-lg backdrop-blur-md custom-white-border">
      <div className="bg-[#1F2E3B] w-fit px-3 py-[2px] text-sm font-nunitoLight rounded-tl-lg rounded-br-lg">{title}</div>
      <div className="content p-3">
        <p className="mb-2 font-nunitoXLight" >{description}</p>
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech, id) => (
            <div
              key={`title_${id}`}
              className="font-nunitoRegular flex items-center bg-[#213340] text-sm py-[1px] px-[7px] rounded-full border-[1px] border-[#384854]"
            >
              <span className="mr-2">{tech.name}</span>
              <div className="">
                <Image className="w-auto h-4" src={tech.src} alt="figma" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
