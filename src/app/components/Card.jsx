import React from "react";

const Card = ({ id, description, title, technologies }) => {
  console.log(technologies);
  return (
    <div
      className="card bg-white/5 rounded-lg cursor-pointer flex h-96 flex-col relative w-60 "
      id={id}
    >
      <div className="bg-[#162937] flex flex-col rounded-md  inset-[2px]  absolute z-[2] ">
        <h3 className="text-center rounded-b-md mb-2 font-nunitoRegular bg-[#1F2E3B] px-4 py-1 w-fit mx-auto mt-0">
          {title}
        </h3>
        <div className="p-3 flex flex-col h-full justify-start">
          <div className="h-[60%]">
            <p className="font-nunitoBold">Description</p>
            <p className="font-nunitoLight">{description}</p>
          </div>
          <div className="mt-5">
            <p className="font-nunitoBold mb-1">Technologies</p>
            <div className="flex  flex-wrap gap-1">
              {technologies.map((tech, id) => (
                <div
                  key={`title_${id}`}
                  className="font-nunitoRegular bg-[#213340] py-1 px-3 rounded-full border-[1px] border-[#384854]"
                >
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
