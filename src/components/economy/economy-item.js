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
    <div className="flex flex-col items-start justify-between w-1/2">
      <div className="relative w-full">
        <a href="/">
          <img src="/images/news-1.jpg" alt="imgae" className="w-full h-full" />
        </a>
        <div className="absolute bottom-0 left-0 bg-black px-8 py-2 text-white">
          Tag
        </div>
      </div>
      <div className="text-gray-400">
        <a href="/">
          <h3 className="text-xl py-2 font-semibold text-black hover:text-title transition duration-200 ease-linear tracking-wide">
            Title
          </h3>
        </a>
        <div className="flex flex-row items-center justify-start gap-x-4">
          <div className="flex flex-row items-center justify-between gap-x-2">
            <img
              src="/images/author1.jpg"
              alt="author"
              className="rounded-full w-6 h-6"
            />
            <a
              href="/"
              className="hover:text-title transition duration-200 ease-linear"
            >
              <span className="text-sm">Author Name</span>
            </a>
          </div>
          {month}, {day} {year}
        </div>
        <div className="py-2">
          Aliquet accumsan etiam pharetra quisque turpis et metus nullam
          suspendisse ultricies, eu tempus phasellus platea lectus maecenas
          lorem sagittis pretium
        </div>
      </div>
    </div>
  );
};

export default EconomyItem;
