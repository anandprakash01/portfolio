import React from "react";

const ProgrammingSkills = () => {
  const skillset = [
    {skill: "Java", level: "Intermideate", percent: 75},
    {skill: "DSA", level: "Intermideate", percent: 70},
    {skill: "OOPs", level: "Intermideate", percent: 80},
    {skill: "GitHub", level: "Intermideate", percent: 65},
  ];

  return (
    <div className="skills_content">
      <h3 className="skills_title">Programming Skills</h3>

      <div className="skills_box">
        {skillset.map((item, index) => {
          return (
            <div className="skills_group" key={index}>
              <div className="skills_data">
                <i className="bx bxs-badge-check"></i>
                <div>
                  <h3 className="skills_name">{item.skill}</h3>

                  {/* <span className="skills_level">{item.level}</span> */}
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

export default ProgrammingSkills;
