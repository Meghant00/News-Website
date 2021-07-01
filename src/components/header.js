import React from "react";
import { FaRegClock, FaSearch } from "react-icons/fa";
import headerIcons from "../data/header-icons";
import HeaderIcons from "./header-icons";
import SearchBar from "./search-bar";
import { useState, useEffect, useRef } from "react";
const Header = () => {
  const date = new Date();
  const day = date.getDay();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  const [searchClicked, setSearchClicked] = useState(false);
  const searchClickHandler = () => {
    setSearchClicked(!searchClicked);
  };
  let searchRef = useRef();
  const close = (event) => {
    if (searchRef.current === event.target) {
      setSearchClicked(false);
    }
  };
  useEffect(() => {
    const searchClickHandler = (event) => {
      if (!searchRef.current.contains(event.target)) {
        setSearchClicked(false);
      }
    };
    document.addEventListener("mousedown", searchClickHandler);
    return () => {
      document.removeEventListener("mousedown", searchClickHandler);
    };
  }, []);
  return (
    <header ref={searchRef} onClick={close}>
      <div className="contianer mx-auto w-4/5 grid grid-cols-8">
        <div className="flex flex-row items-center justify-start group border-r border-b border-black px-2 py-2 cursor-pointer">
          <div className="flex flex-col justify-center items-start px-4 ">
            <div className=" w-6  bg-black pt-1 group transform group-hover:scale-x-125 transition duration-200 ease-linear"></div>
            <div className=" w-7 my-1 bg-black pt-0.5 group"></div>
            <div className=" w-8 bg-black pt-0.5 group transform group-hover:scale-x-75 transition duration-200 ease-linear"></div>
          </div>
          <div ref={searchRef} className="uppercase group text-sm">
            More
          </div>
        </div>
        <div className="col-span-6 border-b border-black px-2 flex flex-row items-center justify-between">
          <div className="flex flex-row justify-between gap-2 items-center text-sm px-2">
            <FaRegClock />
            <span>
              {month} {day}, {year}
            </span>
          </div>
          <div className="flex flex-row justify-between px-2">
            {headerIcons.map((icons) => (
              <HeaderIcons
                key={icons.link}
                icon={icons.icon}
                link={icons.link}
              />
            ))}
          </div>
        </div>
        <div className="border-l border-b border-black px-2 py-2">
          <button
            onClick={searchClickHandler}
            className="cursor-pointer focus:outline-none"
          >
            <div className="flex flex-row justify-start gap-2 items-center">
              <FaSearch />
              <span className="text-sm uppercase">Search</span>
            </div>
          </button>
        </div>
      </div>

      <div className="fixed top-0 w-full">
        <SearchBar searchClicked={searchClicked} />
      </div>
    </header>
  );
};

export default Header;
