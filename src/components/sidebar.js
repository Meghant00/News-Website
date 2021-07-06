import React from "react";
import { useTransition, animated } from "react-spring";
import { FaTimes } from "react-icons/fa";
import SubHeading from "./subheading";
const Sidebar = ({ sidebarClicked, setSidebarClicked }) => {
  //Sidebar Animation
  const sidebarAnimation = useTransition(sidebarClicked, {
    from: { x: -500 },
    enter: { x: 0 },
    leave: { x: -500 },
    config: { duration: 1000 },
  });

  return (
    <div className="z-10">
      {sidebarAnimation((style, item) =>
        item ? (
          <animated.div
            style={style}
            className="px-2 w-full md:w-1/2 lg:w-1/4 absolute top-0 left-0 h-full border-r border-black py-4 bg-white z-10"
          >
            <div className="flex flex-row items-center justify-end">
              <button
                onClick={() => setSidebarClicked(false)}
                className="outline-none focus:outline-none"
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>
            <SubHeading name="Trending" />
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Sidebar;
