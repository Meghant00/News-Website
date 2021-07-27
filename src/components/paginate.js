import React from "react";
import NextButton from "./next-button";
import PaginationButtons from "./pagination-buttons";

const Paginate = ({
  posts,
  onClick,
  postsPerPage,
  currentPage,
  onNextClick,
}) => {
  const pageNumbers = [];
  for (let index = 1; index <= Math.ceil(posts / postsPerPage); index++) {
    pageNumbers.push(index);
  }
  return (
    <div className="py-4 flex flex-row items-center">
      {pageNumbers.map((items) => (
        <PaginationButtons
          pageNumber={items}
          key={items}
          onClick={onClick}
          currentPage={currentPage}
        />
      ))}
      <NextButton onNextClick={onNextClick} />
    </div>
  );
};

export default Paginate;
