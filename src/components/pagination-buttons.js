import React from "react";

const PaginationButtons = ({ onClick, pageNumber, currentPage }) => {
  let className = "text-2xl cursor-pointer hover:text-title px-4";
  if (currentPage === pageNumber) {
    className = "text-2xl cursor-pointer text-blue-800 px-4";
  }
  return (
    <span className={className} onClick={() => onClick(pageNumber)}>
      {pageNumber}.
    </span>
  );
};

export default PaginationButtons;
