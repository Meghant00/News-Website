import React from "react";

import { useTransition, animated } from "react-spring";
const Sidebar = ({ closeClickHandler, sidebarClicked }) => {
  //Sidebar Animation
  const sidebarAnimation = useTransition(sidebarClicked, {
    from: { x: -500 },
    enter: { x: 0 },
    leave: { x: -500 },
    config: { duration: 1000 },
  });
  return (
    <div className="">
      {sidebarAnimation((style, item) =>
        item ? (
          <animated.div
            style={style}
            className="px-2 w-full md:w-1/2 lg:w-1/4 absolute top-0 left-0 h-full border-r border-black py-4 bg-white z-10"
          >
            <div className="flex flex-row items-center justify-end">
              <button onClick={closeClickHandler}>CLose</button>
            </div>
            <ul className="list-disc relative">
              <li className="text-2xl uppercase tracking-wider">Trending</li>
              <div className="absolute right-0 top-1/2 w-60 h-0.5 bg-black px-2"></div>
            </ul>
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Sidebar;
