"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileNavbar from "./components/MobileNavbar";
import Head from "next/head";
import Image from "next/image";
import profile from "./assets/img/profile.png";
import Landing from "./sections/Landing"

export default function Home() {
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
      <Landing />
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
            Hi, I&apos;m Adam!
          </h3>
          <p
            data-aos="fade-right"
            data-aos-duration="300"
            data-aos-delay="400"
            className="py-5 md:py-10"
          >
            Frontend development isn&apos;t just my profession — it&apos;s my
            playground. <br /> I thrive in turning creative concepts into live,
            user-friendly applications.
          </p>
          <p data-aos="fade-right" data-aos-duration="300" data-aos-delay="600">
            Ready to rock the digital world with my code?
          </p>
        </div>
        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[210px] md:w-[400px]  xl:w-[600px]">
          <Image height={1524} width={1524} src={profile} alt="adam" />
        </div>
      </section>

      {/* intro section */}
    </>
  );
}
