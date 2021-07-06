import React from "react";

const Title = ({ name }) => {
  return (
    <h1 className="text-7xl uppercase text-center py-4 tracking-wide">
      <a
        href="/home"
        className="hover:text-title transition duration-100 ease-linear "
      >
        {name}
      </a>
    </h1>
  );
};

export default Title;
