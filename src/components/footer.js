import React from "react";
import FooterIcons from "./footer-icons";

const Footer = () => {
  return (
    <footer className="py-8 w-4/5 mx-auto">
      <div className="flex flex-col items-center justify-center">
        <a href="home">
          <h2 className="text-3xl md:text-5xl uppercase py-4">Hello World</h2>
        </a>

        <div className="flex flex-row items-center justify-start gap-2">
          <img src="/images/patern-1.png" alt="pattern" />
          <FooterIcons />
          <img src="/images/patern-1.png" alt="pattern" />
        </div>
        <p className="text-base py-2 text-center">
          Designed by Alithemes.com. Powerd by WordPress.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
