"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileNavbar from "./components/MobileNavbar";

export default function Home() {
  let name = "ADAM HONVEDO";
  let title = "frontend developer";
  const arrayOfLettersOfName = name.split("");
  const arrayOfLettersOfTitle = title.split("");
  const [isBorderOnNav, setIsBorderOnNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      if (window.pageYOffset) {
        setIsBorderOnNav(true);
      } else {
        setIsBorderOnNav(false);
      }
    });
  }, []);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Navbar isBorder={isBorderOnNav} />
      <MobileNavbar />
      {/* landing section */}
      <section className="min-h-screen bg-gradient-to-br font-extralight from-[#071927]  to-[#181818] flex flex-col justify-center items-center">
        <div className="text-4xl xl:text-6xl w-[95%]  flex justify-around  text-[#27465A] mb-5 md:mb-16 ">
          {arrayOfLettersOfName.map((letter, id) => {
            return <span key={id}>{letter}</span>;
          })}
        </div>
        <div className="w-[70%] text-2xl xl:text-4xl text-[#515151] md:w-[50%] flex justify-around">
          {arrayOfLettersOfTitle.map((letter, id) => {
            return <span key={id}>{letter}</span>;
          })}
        </div>
      </section>
      <section
        id="about"
        className="min-h-screen bg-gradient-to-br font-extralight from-[#071927]  to-[#181818] flex flex-col justify-center items-center"
      >
        <div className="mlgd:text-9xl  w-full flex justify-around  text-[#27465A]  mb-16 ">
          {arrayOfLettersOfName.map((letter, id) => {
            return <span key={id}>{letter}</span>;
          })}
        </div>
        <div className="  xl:text-5xl text-[#515151] w-[70%] md:[50%] flex justify-around">
          {arrayOfLettersOfTitle.map((letter, id) => {
            return <span key={id}>{letter}</span>;
          })}
        </div>
      </section>
      {/* intro section */}
    </>
  );
}
