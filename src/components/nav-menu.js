import React from "react";
import { FaBars } from "react-icons/fa";
import navItems from "../data/nav-items";
import NavItem from "./navitem";
import { useState } from "react";
import { useTransition, animated } from "react-spring";
const NavMenu = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const hamburgerClickHandler = () => {
    setHamburgerClicked(!hamburgerClicked);
  };
  const navbarAnimation = useTransition(hamburgerClicked, {
    from: { y: -500 },
    enter: { y: 0 },
    leave: { y: -500 },
    config: { duration: 1000 },
  });
  return (
    <div className="border-t border-b-4 border-black py-2 my-2">
      <button
        className="focus:outline-none lg:hidden flex flex-row justify-start"
        onClick={hamburgerClickHandler}
      >
        <FaBars className="text-4xl" />
        <span className="text-xl uppercase px-2">Menu</span>
      </button>
      <div className="flex flex-col items-start justify-between w-screen lg:w-4/5 mx-auto ">
        {navbarAnimation((style, item) =>
          item ? (
            <animated.div
              style={style}
              className="flex flex-col lg:flex lg:flex-row items-start justify-between w-full px-2 py-4 bg-white"
            >
              {navItems.map((items) => (
                <NavItem
                  key={items.name}
                  name={items.name}
                  link={items.link}
                  dropdown={items.dropdown}
                  dropdownItems={items.dropdownItems}
                />
              ))}
            </animated.div>
          ) : (
            <div
              style={style}
              className="hidden lg:flex lg:flex-row items-start justify-around w-full"
            >
              {navItems.map((items) => (
                <NavItem
                  key={items.name}
                  name={items.name}
                  link={items.link}
                  dropdown={items.dropdown}
                  dropdownItems={items.dropdownItems}
                />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default NavMenu;
