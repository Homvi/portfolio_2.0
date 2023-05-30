"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";

const Landing = () => {
  let name = "ADAM HONVEDO";
  let title = "frontend developer";
  const arrayOfLettersOfName = name.split("");
  const arrayOfLettersOfTitle = title.split("");

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  
  return (
    <section className="min-h-screen bg-gradient-to-br font-nunitoXLight from-[#071927]  to-[#181818] flex flex-col justify-center items-center">
      <motion.div
        className="flex justify-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="text-3xl md:text-5xl xl:text-6xl w-[95%]  flex justify-around  text-[#27465A] mb-5 md:mb-16 ">
          {arrayOfLettersOfName.map((letter, id) => {
            return <span key={id}>{letter}</span>;
          })}
        </div>
      </motion.div>
      <motion.div
        className="flex justify-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 2 }}
      >
        <div className="w-[70%] text-xl md:text-3xl xl:text-4xl text-[#515151] md:w-[50%] flex justify-around">
          {arrayOfLettersOfTitle.map((letter, id) => {
            return <span key={id}>{letter}</span>;
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Landing;
