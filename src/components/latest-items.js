import React, { useEffect, useState } from "react";
import news from "../data/news";
import LatestItem from "./latest-item";

const LatestItems = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  useEffect(() => {
    setLatestPosts(news.sort((a, b) => b.date - a.date).slice(0, 3));
  }, []);
  return (
    <div>
      {latestPosts.map((items) => (
        <LatestItem key={items.title} image={items.image} title={items.title} />
      ))}
    </div>
  );
};

export default LatestItems;
