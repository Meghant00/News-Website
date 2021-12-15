import React, { useEffect, useState } from "react";
import news from "../../data/news";
import { entertainmentPerPage } from "../../utilis/global-variables";
import Paginate from "../paginate";
import EntertainmentItem from "./entertainment-item";

const EntertainmentItems = () => {
  const [entertainment, setEntertainment] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setEntertainment(news);
  }, []);
  const indexOfLastPost = currentPage * entertainmentPerPage;
  const indexOfFirstPost = indexOfLastPost - entertainmentPerPage;

  const currentNews = entertainment.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => {
    setCurrentPage(number);
  };
  const onNextClick = () => {
    if (currentPage < Math.ceil(entertainment.length / entertainmentPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div>
      {currentNews.map((items) => (
        <EntertainmentItem
          key={items.title}
          title={items.title}
          image={items.image}
          author={items.author}
          authorImage={items.authorImage}
          description={items.description}
          date={items.date}
        />
      ))}
      <Paginate
        posts={entertainment.length}
        onClick={paginate}
        postsPerPage={entertainmentPerPage}
        currentPage={currentPage}
        onNextClick={onNextClick}
      />
    </div>
  );
};

export default EntertainmentItems;
