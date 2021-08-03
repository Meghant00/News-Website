import React from "react";
import { useState, useEffect } from "react";
import news from "../data/news";
import DontMissItem from "./dontMiss-item";

const DontMissItems = () => {
  let number = 1;
  const [popularArticles, setPopularArticles] = useState([]);

  useEffect(() => {
    setPopularArticles(news.filter((news) => news.likes > 50).slice(0, 3));
  }, []);

  return (
    <div className="py-4">
      {popularArticles.map((items) => (
        <DontMissItem
          key={items.title}
          heading={items.title}
          numbering={number++}
        />
      ))}
    </div>
  );
};

export default DontMissItems;
