"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileNavbar from "./components/MobileNavbar";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import profile from "./assets/img/profile.png";

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
      <Head>
        <meta name="theme-color" content="#071927" />
        <meta name="author" content="Adakin" />
      </Head>
      <Navbar isBorder={isBorderOnNav} />
      <MobileNavbar />
      {/* landing section */}
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
      <section
        id="about"
        className="relative z-10 text-[#F2F2F2] flex flex-col md:justify-center h-screen p-5 md:p-10 "
      >
        <div className="md:w-[60%] text-md min-h-[60%] flex flex-col items-start justify-center sm:text-lg">
          <h3 className="text-xl sm:text-2xl">Hi, I&apos;m Adam!</h3>
          <p className="py-10">
            Frontend development isn&apos;t just my profession — it&apos;s my
            playground. <br /> I thrive in turning creative concepts into live,
            user-friendly applications.
          </p>
          <p>Ready to rock the digital world with my code?</p>
        </div>
        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px]">
          <Image height={1524} width={1524} src={profile} alt="adam" />
        </div>
      </section>
      {/* intro section */}
    </>
  );
}
