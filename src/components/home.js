import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { useState, useRef } from "react";
import Title from "./title";
import Tagline from "./tagline";
import NavMenu from "./nav-menu";
import TopSlider from "./top-slider";
import MainSliderItem from "./main-slider-item";
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
        <div className="w-4/5 mx-auto">
          <Title name="Hello World" />
          <Tagline />
          <NavMenu />
          <TopSlider />
          <div className="grid grid-cols-3 gap-4 py-4">
            <div className="col-span-2">
              <MainSliderItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
