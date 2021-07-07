import React from "react";
import Dropdown from "./dropdown";

const NavItem = ({ name, link, dropdown, dropdownItems }) => {
  return (
    <div className="group relative">
      <div className="flex flex-row justify-start items-center group py-2">
        {dropdown ? (
          <div className="w-1 h-1 group transform group-hover:scale-y-150 transition duration-100 ease-linear bg-black"></div>
        ) : (
          ""
        )}
        <div className="group pl-1">
          <a
            href={link}
            className="uppercase hover:text-title transition duration-100 ease-linear"
          >
            {name}
          </a>
        </div>
      </div>
      {dropdown ? (
        <div className="group absolute z-10 bg-white w-40 hidden group-hover:block border border-black">
          <ul>
            {dropdownItems.map((items) => (
              <Dropdown
                key={items.dropdownName}
                dropdownName={items.dropdownName}
                link={items.link}
              />
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavItem;
