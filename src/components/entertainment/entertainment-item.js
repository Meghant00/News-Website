import React from "react";

const EntertainmentItem = ({
  tag,
  title,
  description,
  author,
  image,
  authorImage,
  date,
}) => {
  const displayDate = new Date(date.split("-"));
  const day = displayDate.getDay();
  const month = displayDate.toLocaleString("default", { month: "short" });
  const year = displayDate.getFullYear();
  return (
    <div className="flex flex-col items-start justify-start py-4 md:px-2 text-gray-400">
      <div className="relative ">
        <img src={image} alt={title} />
        <div className="bg-black text-white px-4 py-2 absolute top-0 right-0">
          {tag}
        </div>
      </div>
      <a href="/">
        <h2 className="py-4 text-xl md:text-3xl uppercase tracking-wider leading-relaxed text-black hover:text-title transition duration-200 ease-linear">
          {title}
        </h2>
      </a>
      <div className="flex flex-col items-center justify-between py-8 md:flex-row ">
        <div className="flex flex-col items-center justify-start w-full">
          <img
            src={authorImage}
            alt={author}
            className="w-8 h-8 rounded-full"
          />
          <div className="font-semibold text-black py-2">{author}</div>
          <div>
            {day} {month}, {year}
          </div>
        </div>
        <p className="py-4 px-8 md:border-l border-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default EntertainmentItem;
EntertainmentItem.defaultProps = {
  tag: "Entertainment",
};
