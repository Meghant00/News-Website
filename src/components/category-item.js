import React from "react";

const CategoryItem = ({ category }) => {
  return (
    <div className="py-2 px-2 text-lg">
      <a
        href={category}
        className="transition duration-100 ease-linear hover:text-title "
      >
        {category}
      </a>
    </div>
  );
};

export default CategoryItem;
