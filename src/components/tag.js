import React from "react";

const Tag = ({ tag }) => {
  return (
    <a
      href={tag}
      className="hover:text-blue-700 transition duration-100 ease-linear px-1 
        "
    >
      {tag}
    </a>
  );
};

export default Tag;
