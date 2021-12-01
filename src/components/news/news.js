import React from "react";
import PageHeading from "../page-heading";
import SubTitle from "../sub-title";
import NewsPagination from "./news-pagination";
import TopNewsItems from "./top-news-items";

const News = () => {
  return (
    <div>
      <div className="border-b-2 border-black mx-2">
        <PageHeading heading="News" />
      </div>
      <TopNewsItems />
      <SubTitle title="Recent News" />
      <NewsPagination />
    </div>
  );
};

export default News;
