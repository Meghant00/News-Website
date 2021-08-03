import React from "react";
import DontMissItems from "./dontMiss-items";
import SubHeading from "./subheading";

const DontMiss = () => {
  return (
    <div>
      <SubHeading name="Don't Miss" isMainContent={true} />
      <DontMissItems />
    </div>
  );
};

export default DontMiss;
