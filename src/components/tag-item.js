import React from "react";

const TagItem = ({ name }) => {
  return (
    <div className="bg-gray-300 px-2 py-2">
      <a
        href={name}
        className="text-lg hover:text-title transition duration-200 ease-in"
      >
        {name}
      </a>
    </div>
  );
};

export default TagItem;
