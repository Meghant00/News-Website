import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { useState, useRef } from "react";
const Home = () => {
  const [sidebarClicked, setSidebarClicked] = useState(false);
  const sidebarClickHandler = () => {
    setSidebarClicked(!sidebarClicked);
  };

  const close = (e) => {
    if (sidebarRef.current === e.target) {
      setSidebarClicked(false);
    }
  };

  const sidebarRef = useRef();
  return (
    <>
      <Sidebar
        sidebarClicked={sidebarClicked}
        setSidebarClicked={setSidebarClicked}
      />
      <div>
        {sidebarClicked ? (
          <div
            ref={sidebarRef}
            onClick={close}
            className="h-screen w-full bg-white bg-opacity-90 fixed top-0 z-8"
          ></div>
        ) : (
          ""
        )}

        <Header sidebarClickHandler={sidebarClickHandler} />
      </div>
    </>
  );
};

export default Home;
