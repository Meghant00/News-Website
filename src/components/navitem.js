import React from "react";

const NavItem = ({ name, link }) => {
  return (
    <div>
      <a
        href={link}
        className="uppercase hover:text-title transition duration-100 ease-linear"
      >
        {name}
      </a>
    </div>
  );
};

export default NavItem;
