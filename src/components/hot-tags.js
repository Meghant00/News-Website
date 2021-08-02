import React from "react";
import { borderBottom } from "../utilis/global-variables";
import SubHeading from "./subheading";
import TagItems from "./tag-items";

const HotTags = () => {
  return (
    <div className={borderBottom}>
      <SubHeading name="Hot Tags" isMainContent={true} />
      <TagItems />
    </div>
  );
};

export default HotTags;
