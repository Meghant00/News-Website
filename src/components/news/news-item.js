import React from "react";
import { FaFolder } from "react-icons/fa";
import Tags from "../tags";

const NewsItem = ({ image, title, author, authorImage, tags, date }) => {
  const displayDate = new Date(date.split("-"));
  const day = displayDate.getDay();
  const month = displayDate.toLocaleString("default", { month: "short" });
  const year = displayDate.getFullYear();
  return (
    <div className="flex flex-col justify-between py-10 md:flex-row">
      <div className="md:w-2/6">
        <img src={image} alt={title} className="w-full" />
      </div>
      <div className="flex flex-col items-start justify-start md:w-4/6 md:px-8">
        <h3 className="text-lg font-semibold tracking-wider hover:text-title md:text-xl">
          <a href="home">{title}</a>
        </h3>
        <div className="flex flex-col text-gray-600 py-2 space-y-2 md:space-y-0 md:space-x-4 md:flex-row md:items-center md:justify-between md:text-gray-400">
          <div className="flex items-center justify-start">
            <img
              src={authorImage}
              alt={author}
              className="rounded-full w-8 h-8"
            />
            <span className="text-sm px-2">{author}</span>
          </div>
          <div className="flex flex-row items-center justify-start uppercase">
            <FaFolder className="flex md:invisible" />
            <Tags tags={tags} />
          </div>
          <div>
            {day} {month}, {year}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
