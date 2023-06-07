// Importing technology logos from the respective files
import figma from "./app/assets/tech-logo/figma.png";
import react from "./app/assets/tech-logo/react.svg";
import git from "./app/assets/tech-logo/git.png";
import node from "./app/assets/tech-logo/node.svg";
import tailwind from "./app/assets/tech-logo/tailwind.png";
import javascript from "./app/assets/tech-logo/javascript.svg";
import css from "./app/assets/tech-logo/css.svg";
import html from "./app/assets/tech-logo/html.svg";
import next from "./app/assets/tech-logo/next.svg";

// Creating an object where each technology is associated with its name and the imported logo
export const technologies = {
  figma: {
    name: "Figma",
    src: figma,
  },
  react: {
    name: "React",
    src: react,
  },
  git: {
    name: "Git",
    src: git,
  },
  node: {
    name: "Node",
    src: node,
  },
  tailwind: {
    name: "Tailwind",
    src: tailwind,
  },
  javascript: {
    name: "Javascript",
    src: javascript,
  },
  css: {
    name: "Css",
    src: css,
  },
  html: {
    name: "Html",
    src: html,
  },
  next: {
    name: "Next.js",
    src: next,
  },
};
