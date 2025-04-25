import React, {useEffect, useRef, useState} from "react";

const SkillsBox = ({skills, title}) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {threshold: 0.5} // Trigger when 50% of the element is in view
    );

    if (skillsBarRef.current) {
      observer.observe(skillsBarRef.current);
    }

    return () => {
      if (skillsBarRef.current) {
        observer.unobserve(skillsBarRef.current);
      }
    };
  }, []);

  return (
    <div className="skills_content">
      <h3 className="skills_title">{title}</h3>
      <div className="skills_box">
        {skills.map((item, index) => {
          return (
            <div key={index} className="skills_group">
              <div className="skills_data">
                <i className="bx bxs-badge-check"></i>
                <div>
                  <h3 className="skills_name">{item.skill}</h3>
                  {/* ===========SkillBar================= */}
                  <div className="skills-bar" ref={skillsBarRef}>
                    <div
                      className="skills-bar-percent"
                      style={{
                        width: isVisible ? `${item.percent}%` : "0%",
                        backgroundColor:
                          item.percent > 50 ? "" : "var(--theme-yellow-color)",
                        transition: "width 0.5s ease-in-out",
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

export default SkillsBox;
