import React from "react";
import categoryData from "../data/category-data";
import CategoryItem from "./category-item";

const CategoryItems = () => {
  return (
    <div className="flex flex-col items-start justify-start py-4">
      {categoryData.map((item) => (
        <CategoryItem key={item} category={item} />
      ))}
    </div>
  );
};

export default CategoryItems;
