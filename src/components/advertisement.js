import React from "react";
import { borderBottom } from "../utilis/global-variables";
import AdvertisementItem from "./advertisement-item";
import SubHeading from "./subheading";

const Advertisement = () => {
  return (
    <div className={borderBottom}>
      <SubHeading name="Advertisement" isMainContent={false} />
      <AdvertisementItem image="/images/ads-1.png" text="Contact for Banner" />
    </div>
  );
};

export default Advertisement;
