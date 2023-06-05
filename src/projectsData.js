import figma from "./app/assets/tech-logo/figma.png";
import react from "./app/assets/tech-logo/react.svg";
import git from "./app/assets/tech-logo/git.png";
import node from "./app/assets/tech-logo/node.svg";
import tailwind from "./app/assets/tech-logo/tailwind.png";
import javascript from "./app/assets/tech-logo/javascript.svg";
import css from "./app/assets/tech-logo/css.svg";
import html from "./app/assets/tech-logo/html.svg";
import next from "./app/assets/tech-logo/next.svg";

export const projects = [
  {
    title: "Luxcode",
    github: "https://github.com/Homvi/luxcode",
    live: "https://luxcode.dev/",
    speed:
      "https://pagespeed.web.dev/analysis/https-luxcode-dev/qkgacrtoyi?form_factor=desktop",
    description: "Hobby project made for my future business.",
    technologies: [
      {
        name: "React",
        src: react,
      },
      {
        name: "Next.js",
        src: next,
      },
      {
        name: "Javascript",
        src: javascript,
      },
      {
        name: "Node.js",
        src: node,
      },
      {
        name: "Figma",
        src: figma,
      },
      {
        name: "Git",
        src: git,
      },
      {
        name: "Tailwind.css",
        src: tailwind,
      },
    ],
  },
  {
    title: "Goldkert transfer",
    github: "https://github.com/Homvi/GoldkertTransfer",
    live: "https://goldkerttransfer.com/",
    speed:
      "https://pagespeed.web.dev/analysis?url=https://goldkerttransfer.com/&form_factor=desktop",
    description:
      "HTML5UP based website. Made for the Goldkertbau Kft. The site shares and gathers information.",
    technologies: [
      {
        name: "Html",
        src: html,
      },
      {
        name: "Css",
        src: css,
      },
      {
        name: "Javascript",
        src: javascript,
      },
      {
        name: "Git",
        src: git,
      },
    ],
  },
  {
    title: "Akman Solutions",
    github: "https://github.com/Homvi/akmanSolutions",
    live: "https://akmansolutions.com/",
    speed:
      "https://pagespeed.web.dev/analysis?url=https://akmansolutions.com/&form_factor=desktop",
    description:
      "Custom website made for share information about the wedding of the client.",
    technologies: [
      {
        name: "Javascript",
        src: javascript,
      },
      {
        name: "Html",
        src: html,
      },
      {
        name: "Css",
        src: css,
      },
      {
        name: "Git",
        src: git,
      },
    ],
  },
];
