import React from "react";
import { FaRegClock, FaRegFolder } from "react-icons/fa";
import Tags from "./tags";

const TopNews = ({
  heading,
  image,
  date,
  description,
  author,
  authorImage,
  tags,
}) => {
  const displayDate = new Date(date.split("-"));
  const day = displayDate.getDay();
  const month = displayDate.toLocaleString("default", { month: "short" });
  const year = displayDate.getFullYear();
  return (
    <div className="flex flex-row items-center justify-between gap-4 px-2 py-4">
      <div className="w-1/2">
        <a href={heading}>
          <img src={image} alt={heading} />
        </a>
      </div>
      <div className="flex flex-col items-start justify-between w-1/2 text-gray-400">
        <a
          href={heading}
          className="text-black hover:text-title transition duration-150 ease-in"
        >
          <h4 className="text-xl font-semibold">{heading}</h4>
        </a>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between text-sm font-semibold py-4 ">
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
              {day}, {month}, {year}
            </span>
          </div>
        </div>
        <p>{description}</p>
        <button className="bg-black text-white py-2 px-2 my-2 hover:text-title transition duration-150 ease-in">
          <a href={heading}>Read More</a>
        </button>
      </div>
    </div>
  );
};

export default TopNews;
