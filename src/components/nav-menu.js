import React from "react";
import navItems from "../data/nav-items";
import NavItem from "./navitem";
const NavMenu = () => {
  return (
    <div className="border-t border-b-4 border-black py-2 my-2">
      <div className="flex flex-row items-center justify-between w-4/5 mx-auto ">
        {navItems.map((items) => (
          <NavItem key={items.name} name={items.name} link={items.link} />
        ))}
      </div>
    </div>
  );
};

export default NavMenu;
