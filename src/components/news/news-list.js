import React from "react";
import news from "../../data/news";
import NewsItem from "./news-item";

const NewsList = () => {
  return (
    <div>
      {news.map((items) => (
        <NewsItem
          key={items.title}
          title={items.title}
          author={items.author}
          image={items.image}
          authorImage={items.authorImage}
          date={items.date}
          tags={items.tags}
        />
      ))}
    </div>
  );
};

export default NewsList;
