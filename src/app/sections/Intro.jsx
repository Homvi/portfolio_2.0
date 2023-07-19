"use client"

import React, { useContext } from "react";
import Image from "next/image";
import profile from "../assets/img/profile.webp";
import { LanguageContext } from "../LanguageContext";

const Intro = ({ languageData }) => {
  const [language, setLanguage] = useContext(LanguageContext);

  return (
    <section
      id="about"
      className="relative z-10 text-[#F2F2F2] flex flex-col md:justify-center h-screen p-5 md:p-10 "
    >
      <div className="md:w-[60%] text-md min-h-[60%] flex flex-col items-start justify-center sm:text-lg">
        <h3
          data-aos="fade-right"
          data-aos-duration="300"
          data-aos-delay="200"
          className="text-xl sm:text-2xl"
        >
          {languageData[language].intro.heading}
        </h3>
        <p
          data-aos="fade-right"
          data-aos-duration="300"
          data-aos-delay="400"
          className="py-5 md:py-10"
        >
          {languageData[language].intro.description}
        </p>
        <p data-aos="fade-right" data-aos-duration="300" data-aos-delay="600">
          {languageData[language].intro.callToAction}
        </p>
      </div>
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[210px] md:w-[400px]  xl:w-[600px]">
        <Image height={1524} width={1524} src={profile} alt="adam" />
      </div>
    </section>
  );
};

export default Intro;
