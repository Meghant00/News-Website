import React from "react";
import tag from "../data/tag-data";
import CategoryItem from "./category-item";

const CategoryItems = () => {
  return (
    <div className="flex flex-col items-start justify-start">
      {tag.map((item) => (
        <CategoryItem key={item} category={item} />
      ))}
    </div>
  );
};

export default CategoryItems;
