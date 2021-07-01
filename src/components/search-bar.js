import React from "react";
import { useSpring, animated } from "react-spring";
const SearchBar = ({ searchClicked }) => {
  const animation = useSpring({
    config: {
      duration: 1000,
    },
    transform: searchClicked ? `translateY(0%)` : "translateY(-100%)",
  });
  return (
    <div className="w-full">
      {searchClicked ? (
        <animated.div style={animation}>
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
      )}
    </div>
  );
};

export default SearchBar;
