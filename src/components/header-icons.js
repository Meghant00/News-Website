import React from "react";

const HeaderIcons = ({ icon, link }) => {
  return (
    <a
      href={link}
      className="rounded-full border border-black group px-1 py-1 mx-1 group"
    >
      {icon}
    </a>
  );
};

export default HeaderIcons;
