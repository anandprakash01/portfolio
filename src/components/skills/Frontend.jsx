import React from "react";

const Frontend = () => {
  const skillTech = [
    {skill: "React", level: "Intermidiate", percent: 85},
    {skill: "JavaScript", level: "Intermidiate", percent: 80},
    {skill: "Redux", level: "Intermidiate", percent: 75},
    {skill: "HTML", level: "Intermidiate", percent: 90},
    {skill: "CSS", level: "Intermidiate", percent: 85},
    {skill: "Bootstrap", level: "Intermidiate", percent: 80},
    {skill: "Tailwind CSS", level: "Intermidiate", percent: 80},
    {skill: "Material UI", level: "Intermidiate", percent: 80},
    {skill: "Firebase", level: "Intermideate", percent: 70},
  ];

  return (
    <div className="skills_content">
      <h3 className="skills_title">Frontend</h3>

      <div className="skills_box">
        {skillTech.map((item, index) => {
          return (
            <div key={index} className="skills_group">
              <div className="skills_data">
                <i className="bx bxs-badge-check"></i>
                <div>
                  <h3 className="skills_name">{item.skill}</h3>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-percent"
                      style={{
                        width: `${item.percent}%`,
                        "background-color": `${
                          item.percent > 50 ? "" : "var(--theme-yellow-color)"
                        }`,
                      }}
                    ></div>
                  </div>
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
