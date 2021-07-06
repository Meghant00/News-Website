import React from "react";

const NavItem = ({ name, link }) => {
  return (
    <a
      href={link}
      className="uppercase hover:text-title transition duration-100 ease-linear"
    >
      {name}
    </a>
  );
};

export default NavItem;
