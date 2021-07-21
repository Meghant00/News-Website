import React from "react";
import { FaRegClock, FaRegFolder } from "react-icons/fa";
import Tags from "./tags";
const RecentPostItem = ({
  image,
  title,
  author,
  authorImage,
  tags,
  description,
  date,
}) => {
  const a = "07-21-2021";
  const displayDate = new Date(a.split("-"));
  const day = displayDate.getDay();
  const month = displayDate.toLocaleString("default", { month: "short" });
  const year = displayDate.getFullYear();
  return (
    <div className="grid grid-cols-3 gap-4 items-center  px-2 py-2 text-gray-500">
      <div className="group relative">
        <a href={title}>
          <img src={image} alt={title} className="w-full" />

          <div className="w-full  h-full absolute group  group-hover:bg-white group-hover:bg-opacity-20 transition duration-300 ease-linear top-0"></div>
        </a>
      </div>
      <div className="flex flex-col items-start justify-between px-4 col-span-2">
        <h3 className="text-xl py-2 font-semibold text-black">
          <a
            href={title}
            className="hover:text-title transition duration-200 ease-linear"
          >
            {title}
          </a>
        </h3>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between text-sm font-semibold py-4">
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
        <p className="text-justify">
          {description.length > 116
            ? `${description.substring(0, 116)}...`
            : description}
        </p>
      </div>
    </div>
  );
};

export default RecentPostItem;
