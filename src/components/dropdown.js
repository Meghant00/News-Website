import React from "react";

const Dropdown = ({ dropdownName, link }) => {
  return (
    <li className="py-2 border-b border-black w-full px-4 last:border-0">
      <a
        href={link}
        className="uppercase hover:text-title transition duration-100 ease-linear text-sm"
      >
        {dropdownName}
      </a>
    </li>
  );
};

export default Dropdown;
