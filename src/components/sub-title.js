import React from "react";

const SubTitle = ({ title }) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <img src="/images/patern-1.png" alt="pattern" />
      <h3 className="text-3xl text-center font-semibold tracking-wider">
        {title}
      </h3>
      <img src="/images/patern-1.png" alt="pattern" />
    </div>
  );
};

export default SubTitle;
