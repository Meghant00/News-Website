import React from "react";
import PageHeading from "./page-heading";
import TopNewsItems from "./top-news-items";

const News = () => {
  return (
    <div>
      <div className="border-b-2 border-black mx-2">
        <PageHeading heading="News" />
      </div>
      <TopNewsItems />
    </div>
  );
};

export default News;
