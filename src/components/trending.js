import React from "react";
import { borderBottom } from "../utilis/global-variables";
import { useState, useEffect } from "react";
import SubHeading from "./subheading";
import TrendingItems from "./trending-items";
import MainTrendingComponent from "./main-trending-component";
import news from "../data/news";

const Trending = ({ isMainContent }) => {
  const [topNews, setTopNews] = useState([]);

  useEffect(() => {
    setTopNews(
      news
        .sort((a, b) => {
          if (a.likes > b.likes) return -1;
          if (a.likes < b.likes) return 1;
          return 0;
        })
        .slice(0, 1)
    );
  }, []);
  return (
    <div className={borderBottom}>
      <SubHeading name="Trending" isMainContent={isMainContent} />
      {topNews.map((items) => (
        <MainTrendingComponent
          key={items.title}
          heading={items.title}
          date={items.date}
          tags={items.tags}
          image={items.image}
          author={items.author}
          authorImage={items.authorImage}
        />
      ))}
      <TrendingItems />
    </div>
  );
};

export default Trending;
