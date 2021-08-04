import React from "react";

const AdvertisementItem = ({ image, text }) => {
  return (
    <div>
      <img className="px-8" src={image} alt={text} />
      <p className="py-4 text-lg">{text}</p>
    </div>
  );
};

export default AdvertisementItem;
