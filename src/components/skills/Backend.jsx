import React from "react";

const Backend = () => {
  const skillTech = [
    {skill: "Node js", level: "Intermidiate"},
    {skill: "express js", level: "Intermidiate"},
    {skill: "RESTful API", level: "Intermidiate"},
    {skill: "Mongo DB", level: "Intermidiate"},
  ];

  return (
    <div className="skills_content">
      <h3 className="skills_title">Backend</h3>

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

export default Backend;
