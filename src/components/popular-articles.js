import React from "react";
import news from "../data/news";
import PopularArticlesItem from "./popular-articles-item";
import SubHeading from "./subheading";
import { useState, useEffect } from "react";
import { borderBottom } from "../utilis/global-variables";
const PopularArticles = () => {
  let number = 1;
  const [popularArticles, setPopularArticles] = useState([]);

  useEffect(() => {
    setPopularArticles(news.filter((news) => news.likes > 50));
  }, []);

  return (
    <div className={borderBottom}>
      <SubHeading name="Popular Articles" isMainContent={true} />
      {popularArticles.map((items) => (
        <PopularArticlesItem
          key={items.title}
          heading={items.title}
          date={items.date}
          image={items.image}
          numbering={number++}
        />
      ))}
    </div>
  );
};

export default PopularArticles;
