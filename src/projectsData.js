// Importing the technologies object from the technologies.js file
import { technologies } from "./technologies";

// Exporting an array of project objects. Each object represents a project, with its respective information
export const projects = [
  {
    projectName:"luxcode",
    title: "Luxcode",
    github: "https://github.com/Homvi/luxcode",
    live: "https://luxcode.dev/",
    speed:
      "https://pagespeed.web.dev/analysis/https-luxcode-dev/qkgacrtoyi?form_factor=desktop",
    description: " A modern and intuitive website built with React, Next.js, and Node, showcasing my versatile frontend development skills.",
    technologies: [
      technologies.react,
      technologies.next,
      technologies.javascript,
      technologies.node,
      technologies.figma,
      technologies.git,
      technologies.tailwind,
    ],
  },
  {
    projectName:"goldkert",
    title: "Goldkert transfer",
    github: "https://github.com/Homvi/GoldkertTransfer",
    live: "https://goldkerttransfer.com/",
    speed:
      "https://pagespeed.web.dev/analysis?url=https://goldkerttransfer.com/&form_factor=desktop",
    description:
      "Employing HTML, JavaScript, and SCSS/CSS, I developed and deployed Goldkertbau Kft's user-friendly website, featuring an HTML5UP-inspired design.",
    technologies: [
      technologies.html,
      technologies.css,
      technologies.javascript,
      technologies.git,
    ],
  },
  {
    projectName:"akman",
    title: "Akman Solutions",
    github: "https://github.com/Homvi/akmanSolutions",
    live: "https://akmansolutions.com/",
    speed:
      "https://pagespeed.web.dev/analysis?url=https://akmansolutions.com/&form_factor=desktop",
    description:
      "As a frontend developer, I crafted Akman Solutions' site using HTML, JavaScript, and SCSS/CSS, inspired by HTML5UP designs. The site offers company info and a 'Get in Touch' form.",
    technologies: [
      technologies.html,
      technologies.css,
      technologies.javascript,
      technologies.git,
    ],
  },
];
