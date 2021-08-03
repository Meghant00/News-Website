import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { useState, useRef } from "react";
import Title from "./title";
import Tagline from "./tagline";
import NavMenu from "./nav-menu";
import TopSlider from "./top-slider";
import MainSlider from "./main-slider";
import RecentPosts from "./recent-posts";
import PopularArticles from "./popular-articles";
import Search from "./search";
import Trending from "./trending";
import HotTags from "./hot-tags";
import DontMiss from "./dontMiss";
import Latest from "./latest";
import Categories from "./categories";
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-4 ">
            <div className="col-span-0 lg:col-span-2  lg:border-double lg:border-r-4 lg:border-gray-300">
              <MainSlider />
              <RecentPosts />
            </div>
            <div className="">
              <PopularArticles />
              <Search />
              <Trending />
              <HotTags />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-4/5 mx-auto py-4">
        <DontMiss />
        <Latest />
        <Categories />
      </div>
    </>
  );
};

export default Home;
