import React, { useContext, useState } from "react";
import inkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import CVLogo from "../assets/CVLogo.svg";
import Image from "next/image";
import languageLogoEn from "../assets/lang-logo/en.png";
import languageLogoEs from "../assets/lang-logo/es.png";
import languageLogoHu from "../assets/lang-logo/hu.png";
import { LanguageContext } from "../LanguageContext";

const MobileNavbar = () => {
  const [language, setLanguage] = useContext(LanguageContext);
  const [languageOpen, setLanguageOpen] = useState(false);

  let languageObject = {
    EN: {
      src: languageLogoEn,
    },
    ES: {
      src: languageLogoEs,
    },
    HU: {
      src: languageLogoHu,
    },
  };
  return (
    <nav className="fixed z-20 bottom-0 xl:hidden flex justify-center  w-full py-2 px-8  border-t-[1px] backdrop-blur-md border-[#ffffff22]">
      <div className="flex justify-around w-full ">
        <a href="https://www.linkedin.com/in/adamhonvedo/" target="_blank">
          <Image
            priority
            className="opacity-80 h-[30px] w-auto"
            src={inkedin}
            alt="linkedin"
            height={30}
          />
        </a>
        <a href="https://github.com/Homvi" target="_blank">
          <Image
            priority
            className="opacity-100  h-[30px]"
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
            priority
            className="opacity-80 h-[30px] animate-bounce"
            src={CVLogo}
            alt="CV"
            height={30}
          />
        </a>
        {!languageOpen && (
          <Image
            priority
            className="opacity-50 hover:opacity-100 w-7 h-7 cursor-pointer"
            src={languageObject[language].src}
            onClick={(e) => {
              setLanguageOpen(!languageOpen);
            }}
            alt="english"
          />
        )}
        {languageOpen && (
          <div className="flex gap-3">
            <Image
              priority
              className="opacity-50  hover:opacity-100 w-7 h-7 cursor-pointer"
              src={languageLogoEn}
              onClick={(e) => {
                setLanguage("EN");
                setLanguageOpen(false);
              }}
              alt="english"
            />

            <Image
              priority
              onClick={(e) => {
                setLanguage("ES");
                setLanguageOpen(false);
              }}
              className="opacity-50 hover:opacity-100 w-7 h-7 cursor-pointer"
              src={languageLogoEs}
              alt="espanol"
            />
            <Image
              priority
              onClick={(e) => {
                setLanguage("HU");
                setLanguageOpen(false);
              }}
              className="opacity-50 hover:opacity-100 w-7 h-7 cursor-pointer"
              src={languageLogoHu}
              alt="magyar"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default MobileNavbar;
