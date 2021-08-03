import React from "react";

const FooterIcon = ({ icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="relative group py-2 px-2 text-lg flex flex-row items-center justify-center mx-1.5">
        {icon}
        <div className="absolute z-8 group w-full h-full top-0 border border-black transform rotate-45 transition duration-150 ease-in group-hover:bg-black"></div>
      </div>
    </a>
  );
};

export default FooterIcon;
