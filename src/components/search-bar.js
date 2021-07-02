import React from "react";
import { useTransition, animated } from "react-spring";
const SearchBar = ({ searchClicked }) => {
  const transition = useTransition(searchClicked, {
    from: { y: -100 },
    enter: { y: 0 },
    leave: { y: -100 },
    config: { duration: 1000 },
  });
  return (
    <div className="w-full">
      {transition((style, item) =>
        item ? (
          <animated.div style={style}>
            <form className="w-1/2 py-2 ml-auto  bg-white  border-l border-black ">
              <input
                type="text"
                className="px-2 text-sm w-full focus:outline-none text-gray-600"
                placeholder="Search..."
              />
            </form>
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default SearchBar;
