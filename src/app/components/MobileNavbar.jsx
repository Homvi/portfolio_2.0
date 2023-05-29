import React from "react";
import inkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import CVLogo from "../assets/CVLogo.svg";
import Image from "next/image";

const MobileNavbar = () => {
  return (
    <nav className="fixed bottom-0 xl:hidden flex justify-center  w-full py-2 px-8  border-t-[1px] backdrop-blur-md border-[#27465a52]">
      <div className="flex justify-around w-full ">
        <a href="https://www.linkedin.com/in/adamhonvedo/" target="_blank">
          <Image
            className="opacity-60 hover:opacity-100"
            src={inkedin}
            alt="linkedin"
            height={30}
          />
        </a>
        <a href="https://github.com/Homvi" target="_blank">
          <Image
            className="opacity-80 hover:opacity-100"
            src={github}
            alt="github"
            height={30}
          />
        </a>
        <a
          href="/assets/CV/HonvedoAdam_Frontend_CV.pdf"
          download="Adam_Honvedo_CV_Frontend"
        >
          <Image
            className="opacity-95 hover:opacity-100"
            src={CVLogo}
            alt="CV"
            height={30}
          />
        </a>
      </div>
    </nav>
  );
};

export default MobileNavbar;
