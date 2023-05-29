import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed flex justify-between w-full p-3  border-b-[1px] border-[#27465A] text-md">
      <div className="flex gap-8 px-3 text-[#F2F2F2] font-extralight">
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
      <div className="flex gap-5">
        <Link href={"#about"}>About</Link>
        <Link href={"#portfolio"}>Portfolio</Link>
        <Link href={"#contact"}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
