import React from "react";
import SkillsBar from "./SkillsBar";

const Backend = () => {
  const skillTech = [
    {skill: "Node js", level: "Intermidiate", percent: 85},
    {skill: "express js", level: "Intermidiate", percent: 80},
    {skill: "RESTful API", level: "Intermidiate", percent: 75},
    {skill: "Mongo DB", level: "Intermidiate", percent: 75},
    {skill: "Socket IO", level: "Intermidiate", percent: 82},
  ];

  return (
    <div className="skills_content">
      <h3 className="skills_title">Backend</h3>

      <div className="skills_box">
        {skillTech.map((item, index) => {
          return (
            <div key={index} className="skills_group">
              <div className="skills_data">
                <i className="bx bxs-badge-check"></i>
                <div>
                  <h3 className="skills_name">{item.skill}</h3>
                  <SkillsBar item={item} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Backend;
