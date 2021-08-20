import React, { useEffect, useState } from "react";
import news from "../data/news";
import TopNews from "./top-news-item";

const TopNewsItems = () => {
  const [topNews, setTopNews] = useState([]);

  useEffect(() => {
    setTopNews(
      news
        .sort((a, b) => {
          if (a.likes > b.likes) return -1;
          if (a.likes < b.likes) return 1;
          return 0;
        })
        .slice(0, 2)
    );
  }, []);
  return (
    <div>
      {topNews.map((items) => (
        <TopNews
          key={items.title}
          heading={items.title}
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

export default TopNewsItems;
