import Image from "next/image";
import Link from "next/link";
import React from "react";
import inkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import CVLogo from "../assets/CVLogo.svg";

const Navbar = ({ isBorder }) => {
  return (
    <nav
      className={
        isBorder
          ? "fixed flex justify-center md:justify-between w-full py-3 px-8  border-b-[1px] backdrop-blur-md border-[#27465a52] text-md"
          : "fixed justify-center flex md:justify-between w-full py-3 px-8   backdrop-blur-md  text-md"
      }
    >
      <div className="flex gap-8  text-[#F2F2F2] font-extralight">
        <Link data-aos="fade-down" data-aos-duration="300" href={"#about"}>
          <p className="opacity-80 hover:opacity-100">About</p>
        </Link>
        <Link
          data-aos="fade-down"
          data-aos-duration="300"
          data-aos-delay="200"
          className=" opacity-80 hover:opacity-100"
          href={"#portfolio"}
        >
          <p className="opacity-80 hover:opacity-100">Portfolio</p>
        </Link>
        <Link
          data-aos="fade-down"
          data-aos-duration="300"
          data-aos-delay="400"
          className="opacity-80 hover:opacity-100"
          href={"#contact"}
        >
          {" "}
          <p className="opacity-80 hover:opacity-100">Contact</p>
        </Link>
      </div>
      <div className="hidden gap-10 md:flex">
        <Link
          href={"#about"}
          data-aos="fade-down"
          data-aos-duration="300"
          data-aos-delay="400"
        >
          <Image
            className="opacity-60 hover:opacity-100"
            src={inkedin}
            alt="linkedin"
          />
        </Link>
        <Link
          href={"#portfolio"}
          data-aos="fade-down"
          data-aos-duration="300"
          data-aos-delay="200"
        >
          <Image
            className="opacity-80 hover:opacity-100"
            src={github}
            alt="linkedin"
          />
        </Link>
        <a
          data-aos="fade-down"
          data-aos-duration="300"
          href="/assets/CV/HonvedoAdam_Frontend_CV.pdf"
          download="Adam_Honvedo_CV_Frontend"
        >
          <Image
            className="opacity-95 hover:opacity-100"
            src={CVLogo}
            alt="linkedin"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
