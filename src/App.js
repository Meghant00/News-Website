import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useRef } from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Title from "./components/title";
import Tagline from "./components/tagline";
import NavMenu from "./components/nav-menu";
import TopSlider from "./components/top-slider";
import Home from "./components/home";
import PopularArticles from "./components/popular-articles";
import Search from "./components/search";
import Trending from "./components/trending";
import HotTags from "./components/hot-tags";
import DontMiss from "./components/dontMiss";
import Latest from "./components/latest";
import Categories from "./components/categories";
import Footer from "./components/footer";
import News from "./components/news";
function App() {
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
      <Router>
        <div className="relative">
          <Sidebar
            sidebarClicked={sidebarClicked}
            setSidebarClicked={setSidebarClicked}
          />
          {sidebarClicked ? (
            <div
              ref={sidebarRef}
              onClick={close}
              className="h-full w-full bg-white bg-opacity-70 absolute top-0 z-20"
            ></div>
          ) : (
            ""
          )}

          <div>
            <Header sidebarClickHandler={sidebarClickHandler} />
            <div className="w-4/5 mx-auto">
              <Title name="Hello World" />
              <Tagline />
              <NavMenu />
              <TopSlider />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-4 ">
                <div className="col-span-0 lg:col-span-2  lg:border-double lg:border-r-4 lg:border-gray-300">
                  <Switch>
                    <Route path={"/"} exact component={Home} />
                    <Route path={"/news"} exact component={News} />
                  </Switch>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-4/5 mx-auto py-4 border-b-2 border-black">
            <DontMiss />
            <Latest />
            <Categories />
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
