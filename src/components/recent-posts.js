import React from "react";
import PageHeading from "./page-heading";
import RecentPost from "./recent-post";
const RecentPosts = () => {
  return (
    <div className="py-2">
      <PageHeading heading="Recent Posts" />
      <RecentPost />
    </div>
  );
};

export default RecentPosts;
