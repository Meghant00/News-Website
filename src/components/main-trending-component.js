import React from "react";
import { FaRegClock, FaRegFolder } from "react-icons/fa";
import Tags from "./tags";

const MainTrendingComponent = ({
  heading,
  link,
  image,
  date,
  author,
  tags,
  authorImage,
}) => {
  const displayDate = new Date(date.split("-"));
  const day = displayDate.getDay();
  const month = displayDate.toLocaleString("default", { month: "short" });
  const year = displayDate.getFullYear();
  return (
    <div className="flex flex-col items-start  text-gray-500 justify-start w-full px-4">
      <div className="group relative">
        <a href={link}>
          <img src={image} alt={heading} className="bg-black" />

          <div className="w-full  h-full absolute group  group-hover:bg-white group-hover:bg-opacity-20 transition duration-300 ease-linear top-0"></div>
        </a>
      </div>
      <h3 className="text-lg md:text-lg py-2 font-semibold text-black">
        <a
          href={link}
          className="hover:text-title transition duration-200 ease-linear cursor-pointer"
        >
          {heading}
        </a>
      </h3>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between text-sm lg:text-xs font-semibold py-4">
        <a
          href={author}
          className="hover:text-blue-700 transition duration-100 ease-linear 
          "
        >
          <div className="flex flex-row items-center justify-between">
            <img
              src={authorImage}
              alt={author}
              className="rounded-full w-8 h-8"
            />
            <span className="px-4">{author}</span>
          </div>
        </a>
        <div className="flex flex-row items-center justify-start">
          <FaRegFolder className="font-semibold" />
          <Tags tags={tags} />
        </div>
        <div className="flex flex-row items-center justify-start">
          <FaRegClock className="font-semibold" />
          <span className="px-2">
            {month} {day}, {year}
          </span>
        </div>
      </div>
    </div>
  );
};
export default MainTrendingComponent;
