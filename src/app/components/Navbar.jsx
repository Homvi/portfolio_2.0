"use client";

import Image from "next/image";
import React from "react";
import inkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import CVLogo from "../assets/CVLogo.svg";
import languageLogoEn from "../assets/lang-logo/en.png";
import languageLogoEs from "../assets/lang-logo/es.png";
import languageLogoHu from "../assets/lang-logo/hu.png";

const Navbar = ({ isBorder }) => {
  return (
    <nav
      className={
        isBorder
          ? "fixed flex z-20 justify-center xl:justify-between w-full py-3 px-8 font-nunitoXLight  border-b-[1px] backdrop-blur-md border-[#ffffff12] text-md shadow-custom"
          : "fixed z-20 justify-center flex xl:justify-between w-full py-3 px-8 font-nunitoXLight  backdrop-blur-md  text-md"
      }
    >
      <div className="flex gap-8 items-center text-[#F2F2F2] font-extralight">
        <a href="#about" data-aos="fade-down" data-aos-duration="300">
          <p className="opacity-80 hover:opacity-100">About</p>
        </a>
        <a
          data-aos="fade-down"
          data-aos-duration="300"
          data-aos-delay="200"
          className="opacity-80 hover:opacity-100"
          href={"#portfolio"}
        >
          <p className="opacity-80 hover:opacity-100">Portfolio</p>
        </a>
        <a
          data-aos="fade-down"
          data-aos-duration="300"
          data-aos-delay="400"
          className="opacity-80 hover:opacity-100"
          href={"#contact"}
        >
          {" "}
          <p className="opacity-80 hover:opacity-100">Contact</p>
        </a>
      </div>
      <div className="hidden gap-10 xl:flex">
        <a
          href="https://www.linkedin.com/in/adamhonvedo/"
          target="_blank"
          data-aos="fade-down"
          data-aos-duration="300"
          data-aos-delay="400"
        >
          <Image
            priority
            className="opacity-60 hover:opacity-100 h-[30px] w-auto"
            src={inkedin}
            alt="linkedin"
            width={30}
          />
        </a>
        <a
          href="https://github.com/Homvi"
          target="_blank"
          data-aos="fade-down"
          data-aos-duration="300"
          data-aos-delay="200"
        >
          <Image
            priority
            className="opacity-80 hover:opacity-100"
            src={github}
            alt="github"
          />
        </a>
        <a
          data-aos="fade-down"
          data-aos-duration="300"
          href="/assets/CV/HonvedoAdam_Frontend_CV.pdf"
          download="Adam_Honvedo_CV_Frontend"
        >
          <Image
            priority
            className="opacity-95 hover:opacity-100"
            src={CVLogo}
            alt="cv"
          />
        </a>
        <div data-aos="fade-down" data-aos-duration="200" className=" flex">
          <Image
            priority
            className="opacity-50 hover:opacity-100 w-7 h-7 cursor-pointer"
            src={languageLogoEn}
            alt="english"
          />
          <Image
            priority
            className="opacity-50 hidden hover:opacity-100 mx-3  w-7 h-7 cursor-pointer"
            src={languageLogoEs}
            alt="espanol"
          />
          <Image
            priority
            className="opacity-50 hidden hover:opacity-100  w-7 h-7 cursor-pointer"
            src={languageLogoHu}
            alt="magyar"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
