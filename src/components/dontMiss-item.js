import React from "react";

const DontMissItem = ({ numbering, heading }) => {
  return (
    <div className="flex flex-row items-center justify-between px-2 py-2">
      <span className="font-semibold text-2xl px-2">{numbering}.</span>
      <div className="flex flex-col items-start justify-between px-2">
        <h3 className="font-semibold">
          <a
            href={heading}
            className="text-lg hover:text-title transition duration-100 ease-linear"
          >
            {heading}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default DontMissItem;
