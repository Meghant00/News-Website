import React from "react";

const PageHeading = ({ heading }) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <img src="/images/patern-2.png" alt="patern-2" />
      <h2 className="uppercase text-2xl md:text-5xl py-4">{heading}</h2>
      <img src="/images/patern-2.png" alt="patern-2" />
    </div>
  );
};

export default PageHeading;
