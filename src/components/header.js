import React from "react";

import SearchBar from "./search-bar";
import { useState, useEffect, useRef } from "react";
import Topbar from "./topbar";
const Header = ({ sidebarClickHandler }) => {
  const [searchClicked, setSearchClicked] = useState(false);
  const searchClickHandler = () => {
    setSearchClicked(!searchClicked);
  };
  let searchRef = useRef();
  useEffect(() => {
    const searchClickHandler = (event) => {
      if (!searchRef.current.contains(event.target)) {
        setSearchClicked(false);
      }
    };
    document.addEventListener("mousedown", searchClickHandler);
    return () => {
      document.removeEventListener("mousedown", searchClickHandler);
    };
  }, []);

  return (
    <header ref={searchRef} className="contianer mx-auto w-full px-4 lg:w-4/5">
      <Topbar
        onSearchClick={searchClickHandler}
        onSidebarClick={sidebarClickHandler}
      />
      <div className="fixed top-0 w-full">
        <SearchBar searchClicked={searchClicked} />
      </div>
    </header>
  );
};

export default Header;
