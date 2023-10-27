import React from "react";
import colorSharp from "../assets/img/color-sharp.png";
// import { technologies } from "../Constants";

import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import javascript from "../assets/tech/javascript.png";
import reactjs from "../assets/tech/reactjs.png";
import typescript from "../assets/tech/typescript.png";
import tailwind from "../assets/tech/tailwind.png";
import redux from "../assets/tech/redux.png";
import nodejs from "../assets/tech/nodejs.png";
import mongodb from "../assets/tech/mongodb.png";
import git from "../assets/tech/git.png";
import github from "../assets/github.png";

export const Skills = () => {
  const skills = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Github",
      icon: github,
    },
  ];
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>What Skills I Know</h2>
              <div className="skill-cards">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <div className="circle">
                      <img src={skill.icon} alt={skill.name} />
                    </div>
                    <h1>{skill.name}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
