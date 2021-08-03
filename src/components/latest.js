import React from "react";
import LatestItems from "./latest-items";
import SubHeading from "./subheading";

const Latest = () => {
  return (
    <div>
      <SubHeading name="Latest" isMainContent={true} />
      <LatestItems />
    </div>
  );
};

export default Latest;
