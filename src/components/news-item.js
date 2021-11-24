import React from "react";
import Tags from "./tags";

const NewsItem = ({ image, title, author, authorImage, tags, date }) => {
  const displayDate = new Date(date.split("-"));
  const day = displayDate.getDay();
  const month = displayDate.toLocaleString("default", { month: "short" });
  const year = displayDate.getFullYear();
  return (
    <div className="flex flex-row justify-between">
      <div className="bg-black w-2/5">
        <img src={image} alt={title} />
      </div>
      <div className="px-8 flex flex-col items-center justify-between">
        <h3 className="text-2xl font-semibold tracking-wider hover:text-title">
          <a href="home">{title}</a>
        </h3>
        <div className="flex flex-row items-center justify-between text-gray-400 space-x-4">
          <div className="flex items-center justify-between">
            <img
              src={authorImage}
              alt={author}
              className="rounded-full w-8 h-8"
            />
            <span className="text-sm">{author}</span>
          </div>
          <div className="flex flex-row items-center justify-start uppercase">
            <Tags tags={tags} />
          </div>
          <div>
            {day}, {month}, {year}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
