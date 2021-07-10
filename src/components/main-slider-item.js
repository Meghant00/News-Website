import React from "react";
import { FaRegClock, FaRegFolder } from "react-icons/fa";

const MainSliderItem = () => {
  return (
    <div className="flex flex-col items-start  text-gray-500 justify-start w-full">
      <div className="group relative">
        <a href="home">
          <img
            src="/images/mainSlider1.jpg"
            alt="heading"
            className="bg-black"
          />

          <div className="w-full  h-full absolute group  group-hover:bg-white group-hover:bg-opacity-20 transition duration-300 ease-linear top-0"></div>
        </a>
      </div>
      <h3 className="text-4xl py-2 font-semibold text-black">
        <a
          href="home"
          className="hover:text-title transition duration-200 ease-linear"
        >
          By that characteristically dolphin cat before examined bee
        </a>
      </h3>
      <div className="flex flex-row items-center gap-4 justify-between text-sm font-semibold py-4">
        <a
          href="author"
          className="hover:text-blue-700 transition duration-100 ease-linear 
        "
        >
          <div className="flex flex-row items-center justify-between">
            <img
              src="images/author1.jpg"
              alt="author"
              className="rounded-full w-8 h-8"
            />
            <span className="px-4">spadmin</span>
          </div>
        </a>
        <div className="flex flex-row items-center justify-start">
          <FaRegFolder className="font-semibold" />
          <span className="px-2">
            <a
              href="tag"
              className="hover:text-blue-700 transition duration-100 ease-linear 
        "
            >
              Tags
            </a>
            ,
            <a
              href="tag"
              className="hover:text-blue-700 transition duration-100 ease-linear 
        "
            >
              Tags
            </a>
          </span>
        </div>
        <div className="flex flex-row items-center justify-start">
          <FaRegClock className="font-semibold" />
          <span className="px-2">Date</span>
        </div>
      </div>
      <p>
        After reverently despite goldfish up unobtrusive camel went one this
        unicorn snuffed crud complete goodness out much orca
      </p>
    </div>
  );
};

export default MainSliderItem;
