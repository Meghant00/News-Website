import React from "react";
import { FaRegClock } from "react-icons/fa";

const PopularArticlesItem = ({ heading, image, date, numbering }) => {
  const displayDate = new Date(date.split("-"));
  const day = displayDate.getDay();
  const month = displayDate.toLocaleString("default", { month: "short" });
  const year = displayDate.getFullYear();
  return (
    <div className="flex flex-row items-center justify-between px-2 py-2">
      <span className="font-semibold text-2xl px-2">{numbering}.</span>
      <div className="flex flex-col items-start justify-between lg:w-1/2 px-2">
        <h3 className="font-semibold">
          <a
            href={heading}
            className="text-lg hover:text-title transition duration-100 ease-linear"
          >
            {heading}
          </a>
        </h3>
        <div className="flex flex-row items-center text-gray-500 text-xs py-2 font-semibold">
          <FaRegClock />
          <span className="px-1">
            {month} {day}, {year}
          </span>
        </div>
      </div>

      <div className="group relative hidden lg:flex lg:w-2/5">
        <a href={heading}>
          <img src={image} alt="news" className="" />

          <div className="w-full  h-full absolute group  group-hover:bg-white group-hover:bg-opacity-20 transition duration-300 ease-linear top-0"></div>
        </a>
      </div>
    </div>
  );
};

export default PopularArticlesItem;
