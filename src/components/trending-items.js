import React from "react";
import news from "../data/news";
import { useState, useEffect } from "react";
import TrendingItem from "./trending-item";
const TrendingItems = () => {
  const [trendingNews, setTrendingNews] = useState([]);

  useEffect(() => {
    setTrendingNews(
      news
        .sort((a, b) => {
          if (a.likes > b.likes) return -1;
          if (a.likes < b.likes) return 1;
          return 0;
        })
        .slice(1, 5)
    );
  }, []);
  return (
    <div>
      {trendingNews.map((items) => (
        <TrendingItem
          key={items.title}
          title={items.title}
          date={items.date}
          tags={items.tags}
          image={items.image}
          author={items.author}
          authorImage={items.authorImage}
        />
      ))}
    </div>
  );
};

export default TrendingItems;
