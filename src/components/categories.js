import React from "react";
import CategoryItems from "./category-items";
import SubHeading from "./subheading";

const Categories = () => {
  return (
    <div>
      <SubHeading name="Categories" isMainContent={true} />
      <CategoryItems />
    </div>
  );
};

export default Categories;
