"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "aos/dist/aos.css";
import MobileNavbar from "./components/MobileNavbar";
import Head from "next/head";

import Landing from "./sections/Landing";
import Intro from "./sections/Intro";
import Contact from "./sections/Contact";

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

  return (
    <>
      <Head>
        <meta name="theme-color" content="#071927" />
        <meta name="author" content="Adakin" />
      </Head>
      <Navbar isBorder={isBorderOnNav} />
      <MobileNavbar />
      <Landing />
      <Intro />
      <Contact />
    </>
  );
}
