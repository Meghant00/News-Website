import React from "react";

const SubHeading = ({ name, isMainContent }) => {
  let textClassName = "text-2xl uppercase tracking-wider px-1";
  let lineClassName = "w-full h-0.5 bg-black";
  if (isMainContent) {
    textClassName = "uppercase tracking-wider px-1";
    lineClassName = "w-1/2 h-0.5 bg-black";
  }
  return (
    <ul className="list-disc list-inside flex flex-row items-center justify-start w-full">
      <li className={textClassName}>{name}</li>
      <div className={lineClassName}></div>
    </ul>
  );
};
SubHeading.defaultProps = {
  isMainContent: false,
};
export default SubHeading;
