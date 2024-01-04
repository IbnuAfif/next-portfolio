import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected ? "text-white border-primary-500" : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button className={`${buttonStyles} rounded-full border-2 px-3 py-1 text-base cursor-pointer`} onClick={() => onClick(name)}>
      {name}
    </button>
  );
};

export default ProjectTag;
