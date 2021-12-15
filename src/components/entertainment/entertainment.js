import React from "react";
import PageHeading from "../page-heading";
import EntertainmentItems from "./entertainment-items";

const Entertainment = () => {
  return (
    <div className="md:px-4 py-4">
      <PageHeading heading="Entertainment" />
      <EntertainmentItems />
    </div>
  );
};

export default Entertainment;
