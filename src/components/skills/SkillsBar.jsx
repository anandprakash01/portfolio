import React, {useEffect, useRef, useState} from "react";

const SkillsBar = ({item}) => {
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
    <div className="skills-bar" ref={skillsBarRef}>
      <div
        className="skills-bar-percent"
        style={{
          width: isVisible ? `${item.percent}%` : "0%",
          backgroundColor: item.percent > 50 ? "" : "var(--theme-yellow-color)",
          transition: "width 0.5s ease-in-out",
        }}
      ></div>
    </div>
  );
};

export default SkillsBar;
