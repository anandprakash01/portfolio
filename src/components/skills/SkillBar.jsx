import React from "react";

const SkillBar = ({percent}) => {
  return (
    <div className="w-full h-4 rounded overflow-hidden flex mb-3">
      <div className="bg-red-900 h-full" style={{width: `${percent}%`}}></div>
    </div>
  );
};

export default SkillBar;
