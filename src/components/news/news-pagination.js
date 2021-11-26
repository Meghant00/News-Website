import React, { useEffect, useState } from "react";
import news from "../../data/news";
import { newsPerPage, postsPerPage } from "../../utilis/global-variables";
import NewsItem from "../news-item";
import Paginate from "../paginate";

const NewsPagination = () => {
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
      <div className="py-4 border-b border-gray-500 lg:px-4">
        {currentNews.map((items) => (
          <NewsItem
            key={items.title}
            image={items.image}
            title={items.title}
            author={items.author}
            authorImage={items.authorImage}
            tags={items.tags}
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

export default NewsPagination;
