import React from "react";
import footerIcons from "../data/footer-icons";
import FooterIcon from "./footer-icon";
const FooterIcons = () => {
  return (
    <div className="py-4 flex flex-row items-start justify-start">
      {footerIcons.map((items) => (
        <FooterIcon key={items.link} icon={items.icon} link={items.link} />
      ))}
    </div>
  );
};

export default FooterIcons;
