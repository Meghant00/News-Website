import React from "react";

const LatestItem = ({ title, image }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center  px-2 py-2 text-gray-500">
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
      </div>
    </div>
  );
};

export default LatestItem;
