import React from "react";

const EconomyItem = ({
  image,
  title,
  author,
  authorImage,
  tag,
  description,
  date,
}) => {
  const displayDate = new Date(date.split("-"));
  const day = displayDate.getDay();
  const month = displayDate.toLocaleString("default", { month: "short" });
  const year = displayDate.getFullYear();
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="relative w-full">
        <a href="/">
          <img src={image} alt={title} className="w-full h-64" />
        </a>
        <div className="absolute bottom-0 left-0 bg-black px-8 py-2 text-white">
          {tag}
        </div>
      </div>
      <div className="text-gray-400">
        <a href="/">
          <h3 className="text-xl py-2 font-semibold text-black hover:text-title transition duration-200 ease-linear tracking-wide">
            {title}
          </h3>
        </a>
        <div className="flex flex-row items-center justify-start gap-x-4">
          <div className="flex flex-row items-center justify-between gap-x-2">
            <img
              src={authorImage}
              alt={author}
              className="rounded-full w-6 h-6"
            />
            <a
              href={author}
              className="hover:text-title transition duration-200 ease-linear"
            >
              <span className="text-sm">{author}</span>
            </a>
          </div>
          {month}, {day} {year}
        </div>
        <div className="py-2">{description}</div>
      </div>
    </div>
  );
};

EconomyItem.defaultProps = {
  tag: "Tag",
};

export default EconomyItem;
