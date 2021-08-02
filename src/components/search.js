import React from "react";
import { borderBottom } from "../utilis/global-variables";

const Search = () => {
  return (
    <div className={borderBottom}>
      <div className="py-4 w-full">
        <form
          className="md:px-2 w-full flex flex-row justify-start items-center h-12"
          method="POST"
        >
          <input
            className="py-2 px-2 border border-black focus:outline-none h-full text-gray-400 w-full md:w-9/12 lg:w-3/5"
            type="text"
            placeholder="Search..."
          />
          <input
            type="submit"
            className="bg-gray-800 text-white text-xl h-full overflow-hidden py-2 px-4 uppercase w-full md:w-1/4 lg:w-2/5"
            value="search"
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
