"use client";

import { LanguageProvider } from "./LanguageContext";
import { useEffect, useState } from "react";
import Head from "next/head";
// Importing components from local project files
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
// Import the CSS for the "aos" (Animate on Scroll) library
import "aos/dist/aos.css";
// Importing section components from local project files
import Landing from "./sections/Landing";
import Intro from "./sections/Intro";
import Contact from "./sections/Contact";
import Portfolio from "./sections/Portfolio";
import {data} from "../languages";

export default function Home() {
  // Using the useState hook to create a state variable for managing the border of the Navbar
  const [isBorderOnNav, setIsBorderOnNav] = useState(false);

  // Using the useEffect hook to add an event listener to the scroll event when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      // If the page has been scrolled (window.pageYOffset is non-zero), set isBorderOnNav to true
      if (window.pageYOffset) {
        setIsBorderOnNav(true);
      } else {
        // Otherwise, set it to false
        setIsBorderOnNav(false);
      }
    });
  }, []); // Empty dependency array means this effect will only run once, on mount

  return (
    <>
      <Head>
        <meta name="theme-color" content="#071927" />
        <meta name="author" content="Adakin" />
      </Head>
      <LanguageProvider>
        <Navbar isBorder={isBorderOnNav} languageData={data}/>
        <MobileNavbar languageData={data} />
        <Landing languageData={data} />
        <Intro languageData={data} />
        <Portfolio languageData={data} />
        <Contact languageData={data} />
      </LanguageProvider>
    </>
  );
}
