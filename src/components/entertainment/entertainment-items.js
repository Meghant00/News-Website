import React from "react";
import news from "../../data/news";
import EntertainmentItem from "./entertainment-item";

const EntertainmentItems = () => {
  return (
    <div>
      {news.map((item) => (
        <EntertainmentItem
          title={item.title}
          description={item.description}
          date={item.date}
          author={item.author}
          authorImage={item.authorImage}
          image={item.image}
          key={item.title}
        />
      ))}
    </div>
  );
};

export default EntertainmentItems;
