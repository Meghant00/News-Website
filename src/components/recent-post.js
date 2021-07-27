import React from "react";
import news from "../data/news";
import RecentPostItem from "./recent-post-item";
import { useState, useEffect } from "react";
import Paginate from "./paginate";
import postsPerPage from "../utilis/global-variables";
const RecentPost = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setPosts(news.sort((a, b) => b.date - a.date));
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => {
    setCurrentPage(number);
  };
  const onNextClick = () => {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  console.log(news.sort((a, b) => b.date - a.date));

  return (
    <div>
      <div className="py-4 border-b border-gray-500 lg:px-4">
        {currentPosts.map((items) => (
          <RecentPostItem
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
        posts={posts.length}
        onClick={paginate}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        onNextClick={onNextClick}
      />
    </div>
  );
};

export default RecentPost;
