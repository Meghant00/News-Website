import React from "react";
import { FaRegClock } from "react-icons/fa";

const TrendingItem = ({ image, title, author, authorImage, date }) => {
  const displayDate = new Date(date.split("-"));
  const day = displayDate.getDay();
  const month = displayDate.toLocaleString("default", { month: "short" });
  const year = displayDate.getFullYear();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center  px-2 py-2 text-gray-500">
      <div className="group relative">
        <a href={title}>
          <img src={image} alt={title} className="w-full" />

          <div className="w-full  h-full absolute group  group-hover:bg-white group-hover:bg-opacity-20 transition duration-300 ease-linear top-0"></div>
        </a>
      </div>
      <div className="flex flex-col items-start justify-start px-4 col-span-2">
        <h3 className="text-xl py-2 font-semibold text-black lg:text-base">
          <a
            href={title}
            className="hover:text-title transition duration-200 ease-linear"
          >
            {title}
          </a>
        </h3>
        <div className="flex flex-col items-start md:flex-row  md:items-center gap-4 justify-between lg:text-xs font-semibold py-4">
          <a
            href={author}
            className="hover:text-blue-700 transition duration-100 ease-linear 
          "
          >
            <div className="flex flex-row items-center justify-between">
              <img
                src={authorImage}
                alt={author}
                className="rounded-full w-4 h-4"
              />
              <span className="px-4">{author}</span>
            </div>
          </a>
          <div className="flex flex-row items-center justify-start">
            <FaRegClock className="font-semibold" />
            <span className="px-2">
              {month} {day}, {year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingItem;
