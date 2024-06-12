import React from "react";

const Frontend = () => {
  const skillTech = [
    {skill: "React", level: "Intermidiate"},
    {skill: "JavaScript", level: "Intermidiate"},
    {skill: "HTML", level: "Intermidiate"},
    {skill: "CSS", level: "Intermidiate"},
    {skill: "Bootstrap", level: "Intermidiate"},
    {skill: "Tailwind CSS", level: "Intermidiate"},
    {skill: "Material UI", level: "Intermidiate"},
    {skill: "Firebase", level: "Intermideate"},
  ];

  return (
    <div className="skills_content">
      <h3 className="skills_title">Frontend</h3>

      <div className="skills_box">
        {skillTech.map((item, index) => {
          return (
            <div className="skills_group">
              <div className="skills_data" key={index}>
                <i className="bx bxs-badge-check"></i>
                <div>
                  <h3 className="skills_name">{item.skill}</h3>
                  <span className="skills_level">{item.level}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Frontend;
