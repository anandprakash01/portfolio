import React from "react";

import "./skills.css";
import SkillsBox from "./SkillsBox";

const Skills = () => {
  const frontEnd = [
    {skill: "React", level: "Intermediate", percent: 85},
    {skill: "JavaScript", level: "Intermediate", percent: 80},
    {skill: "Redux", level: "Intermediate", percent: 75},
    {skill: "HTML", level: "Intermediate", percent: 90},
    {skill: "CSS", level: "Intermediate", percent: 85},
    {skill: "Bootstrap", level: "Intermediate", percent: 80},
    {skill: "Tailwind CSS", level: "Intermediate", percent: 80},
    {skill: "Material UI", level: "Intermediate", percent: 80},
    {skill: "Firebase", level: "Intermediate", percent: 70},
  ];

  const backEnd = [
    {skill: "Node js", level: "Intermediate", percent: 85},
    {skill: "express js", level: "Intermediate", percent: 80},
    {skill: "RESTful API", level: "Intermediate", percent: 75},
    {skill: "Mongo DB", level: "Intermediate", percent: 75},
    {skill: "Socket IO", level: "Intermediate", percent: 82},
  ];
  const programming = [
    {skill: "Java", level: "Intermediate", percent: 75},
    {skill: "DSA", level: "Intermediate", percent: 70},
    {skill: "OOPs", level: "Intermediate", percent: 80},
    {skill: "GitHub", level: "Intermediate", percent: 65},
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My Technical level</span>
      <div className="skills_container container grid">
        <SkillsBox skills={frontEnd} title={"Frontend"} />
        <SkillsBox skills={backEnd} title={"Backend"} />
        <SkillsBox skills={programming} title={"Programming Skills"} />
      </div>
    </section>
  );
};

export default Skills;
