import React from "react";
import news from "../../data/news";
import EconomyItem from "./economy-item";

const EconomyItems = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {news.map((items) => (
        <EconomyItem
          key={items.title}
          title={items.title}
          image={items.image}
          author={items.author}
          authorImage={items.authorImage}
          description={items.description}
          date={items.date}
        />
      ))}
    </div>
  );
};

export default EconomyItems;
