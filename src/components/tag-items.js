import React from "react";
import tag from "../data/tag-data";
import TagItem from "./tag-item";

const TagItems = () => {
  return (
    <div className="flex flex-wrap gap-4 flex-row items-center justify-start py-4">
      {tag.map((item) => (
        <TagItem key={item} name={item} />
      ))}
    </div>
  );
};

export default TagItems;
