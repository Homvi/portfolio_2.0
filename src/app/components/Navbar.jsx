import Image from "next/image";
import Link from "next/link";
import React from "react";
import inkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import CVLogo from "../../assets/CVLogo.svg";

const Navbar = () => {
  return (
    <nav className="fixed flex justify-between w-full py-3 px-8  border-b-[1px] backdrop-blur-md border-[#27465a91] text-md">
      <div className="flex gap-8  text-[#F2F2F2] font-extralight">
        <Link className="opacity-80 hover:opacity-100" href={"#about"}>
          About
        </Link>
        <Link className=" opacity-80 hover:opacity-100" href={"#portfolio"}>
          Portfolio
        </Link>
        <Link className="opacity-80 hover:opacity-100" href={"#contact"}>
          Contact
        </Link>
      </div>
      <div className="flex gap-10">
        <Link href={"#about"}>
          <Image
            className="opacity-60 hover:opacity-100"
            src={inkedin}
            alt="linkedin"
          />
        </Link>
        <Link href={"#portfolio"}>
          <Image
            className="opacity-80 hover:opacity-100"
            src={github}
            alt="linkedin"
          />
        </Link>
        <Link href={"#contact"}>
          <Image
            className="opacity-95 hover:opacity-100"
            src={CVLogo}
            alt="linkedin"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
