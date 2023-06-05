import Image from "next/image";
import React from "react";

const Card = ({ id, description, title, technologies }) => {
  //add aos appearing
  return (
    <>
    <div
      className="card bg-white/5 rounded-lg cursor-pointer flex h-96 flex-col relative w-64"
      id={id}
    >
      <div className="bg-[#162937] flex flex-col rounded-md  inset-[2px]  absolute z-[2] ">
        <h3 className="text-center rounded-b-md mb-2 font-nunitoRegular bg-[#1F2E3B] px-4 py-1 w-fit mx-auto mt-0">
          {title}
        </h3>
        <div className="p-3 flex flex-col h-full justify-start">
          <div className="h-[40%]">
            <p className="font-nunitoBold">Description</p>
            <p className="font-nunitoLight">{description}</p>
          </div>
          <div className="mt-5">
            <p className="font-nunitoBold mb-1">Technologies</p>
            <div className="flex  flex-wrap gap-1">
              {technologies.map((tech, id) => (
                <div
                  key={`title_${id}`}
                  className="font-nunitoRegular flex items-center bg-[#213340] py-[1px] px-3 rounded-full border-[1px] border-[#384854]"
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
      </div>
    </div>
    </>
  );
};

export default Card;
