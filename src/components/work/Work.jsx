import React, {useEffect, useState} from "react";

import {projectData} from "./Data";
import {projectNav} from "./Data";
import "./work.css";

const Work = () => {
  const [item, setItem] = useState({name: "all"});

  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // if (item.name == "all") {
    //   setProjects(projectData);
    // } else {
    //   const newProjects = projectData.filter(project => {
    //     return project.category.toLowerCase() === item.name;
    //   });
    //   setProjects(newProjects);
    // }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({name: e.target.textContent.toLowerCase()});
    setActive(index);
  };

  return (
    <section className="work section" id="projects">
      <h2 className="section_title">Projects</h2>
      <span className="section_subtitle">Most resent works</span>

      <div>
        {/* <div className="work_filters">
        {projectNav.map((item, index) => {
          return (
            <span
              onClick={e => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work_item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div> */}

        <div className="work_container container grid">
          {projectData.map((item, index) => {
            return (
              <div className="work_card" key={index}>
                <div className="work_img">
                  <img src={item.image} alt="" className="work_img-pic" />
                  <div className="work_img-hover-content">
                    <a
                      href={item.link || item.github}
                      className="work_button"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.link ? "View Project" : "View Repository"}
                      <i className="bx bx-right-arrow-alt work_button-icon"></i>
                    </a>
                  </div>
                </div>

                <h3 className="work_title">{item.title}</h3>

                <div className="work_details">
                  <div className="work_description">{item.description}</div>
                  <div>
                    {item.link && (
                      <a
                        href={item.link}
                        className="work_button"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live demo{" "}
                        <i className="bx bx-right-arrow-alt work_button-icon"></i>
                      </a>
                    )}
                    <a
                      href={item.github}
                      className="work_button"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github Repository
                      <i className="bx bx-right-arrow-alt work_button-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
