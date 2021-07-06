import React from "react";

const SubHeading = ({ name }) => {
  return (
    <ul className="list-disc list-inside relative">
      <li className="text-2xl uppercase tracking-wider">{name}</li>
      <div className="absolute right-0 top-1/2 w-60 h-0.5 bg-black px-2"></div>
    </ul>
  );
};

export default SubHeading;
