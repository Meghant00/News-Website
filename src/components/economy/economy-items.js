import React, { useEffect, useState } from "react";
import news from "../../data/news";
import { newsPerPage } from "../../utilis/global-variables";
import Paginate from "../paginate";
import EconomyItem from "./economy-item";

const EconomyItems = () => {
  const [recentNews, setRecentNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setRecentNews(news.sort((a, b) => b.date - a.date));
  }, []);
  const indexOfLastPost = currentPage * newsPerPage;
  const indexOfFirstPost = indexOfLastPost - newsPerPage;

  const currentNews = recentNews.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => {
    setCurrentPage(number);
  };
  const onNextClick = () => {
    if (currentPage < Math.ceil(recentNews.length / newsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {currentNews.map((items) => (
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
      <Paginate
        posts={recentNews.length}
        onClick={paginate}
        postsPerPage={newsPerPage}
        currentPage={currentPage}
        onNextClick={onNextClick}
      />
    </div>
  );
};

export default EconomyItems;
