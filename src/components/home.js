import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { useState } from "react";
const Home = () => {
  const [sidebarClicked, setSidebarClicked] = useState(false);
  const sidebarClickHandler = () => {
    setSidebarClicked(!sidebarClicked);
  };

  const closeClickHandler = () => {
    setSidebarClicked(false);
  };
  return (
    <>
      <Sidebar
        closeClickHandler={closeClickHandler}
        sidebarClicked={sidebarClicked}
      />
      <Header sidebarClickHandler={sidebarClickHandler} />
    </>
  );
};

export default Home;
