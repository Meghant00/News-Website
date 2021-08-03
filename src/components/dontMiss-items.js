import React from "react";
import { useState, useEffect } from "react";
import news from "../data/news";
import DontMiss from "./dontMiss-item";

const DontMissItems = () => {
  let number = 1;
  const [popularArticles, setPopularArticles] = useState([]);

  useEffect(() => {
    setPopularArticles(news.filter((news) => news.likes > 50).slice(0, 3));
  }, []);

  return (
    <div>
      {popularArticles.map((items) => (
        <DontMiss
          key={items.title}
          heading={items.title}
          numbering={number++}
        />
      ))}
    </div>
  );
};

export default DontMissItems;
