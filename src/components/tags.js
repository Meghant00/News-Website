import React from "react";
import Tag from "./tag";
const Tags = ({ tags }) => {
  return (
    <span className="px-2">
      {tags.map((item) => (
        <Tag key={item} tag={item} />
      ))}
    </span>
  );
};

export default Tags;
