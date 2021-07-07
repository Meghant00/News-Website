import React from "react";
import headerIcons from "../data/header-icons";
import HeaderIcons from "./header-icons";
import { FaRegClock, FaSearch } from "react-icons/fa";
const Topbar = ({ onSearchClick, onSidebarClick }) => {
  const date = new Date();
  const day = date.getDay();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
      <div
        className="flex flex-row items-center justify-start group border-r border-b border-black px-2 py-2 pb-3 cursor-pointer"
        onClick={onSidebarClick}
      >
        <div className="flex flex-col justify-center items-start w-10">
          <div className=" w-6  bg-black pt-1 group group-hover:w-8 transition-width transition-slowest ease"></div>
          <div className=" w-7 my-1 bg-black pt-0.5 group"></div>
          <div className=" w-8 bg-black pt-0.5 group transform group-hover:w-6 transition-width transition-slowest ease"></div>
        </div>
        <div className="uppercase group text-sm">More</div>
      </div>
      <div className="col-span-2 lg:col-span-6 border-b border-black px-2 flex flex-row items-center justify-between">
        <div className="flex flex-row justify-between gap-2 items-center text-sm px-2">
          <FaRegClock />
          <span>
            {month} {day}, {year}
          </span>
        </div>
        <div className="hidden md:flex flex-row justify-between px-2">
          {headerIcons.map((icons) => (
            <HeaderIcons key={icons.link} icon={icons.icon} link={icons.link} />
          ))}
        </div>
      </div>
      <div className="border-l border-b border-black px-2 py-2 hidden md:block">
        <button
          onClick={onSearchClick}
          className="cursor-pointer focus:outline-none"
        >
          <div className="flex flex-row justify-start gap-2 items-center">
            <FaSearch />
            <span className="text-sm uppercase">Search</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Topbar;
