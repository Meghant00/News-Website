import React from "react";
import { FaArrowRight } from "react-icons/fa";
const NextButton = ({ onNextClick }) => {
  return (
    <button
      className="flex flex-row items-center justify-between cursor-pointer group focus:outline-none"
      onClick={onNextClick}
    >
      <span className="text-2xl uppercase group group-hover:text-title transition duration-200 ease-linear px-4 font-light">
        Next
      </span>
      <FaArrowRight className="group" />
    </button>
  );
};

export default NextButton;
