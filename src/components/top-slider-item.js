import React from "react";
import { FaRegClock } from "react-icons/fa";

const TopSliderItem = ({ heading, link, image, date }) => {
  const displayDate = new Date(date.split("-"));
  const day = displayDate.getDay();
  const month = displayDate.toLocaleString("default", { month: "short" });
  const year = displayDate.getFullYear();
  return (
    <div className="flex flex-row items-center justify-between py-2">
      <div className="group relative">
        <a href="home">
          <img src={image} alt={heading} className="bg-black" />

          <div className="w-full  h-full absolute group  group-hover:bg-white group-hover:bg-opacity-20 transition duration-300 ease-linear top-0"></div>
        </a>
      </div>
      <div className="flex flex-col items-start justify-between px-4">
        <h3 className="text-sm font-semibold">
          <a
            href={link}
            className="hover:text-title transition duration-100 ease-linear"
          >
            {heading.length > 50 ? `${heading.substring(0, 50)}...` : heading}
          </a>
        </h3>
        <div className="flex flex-row items-center text-gray-500 text-xs py-2 font-semibold">
          <FaRegClock />
          <span className="px-1">
            {month} {day}, {year}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopSliderItem;
