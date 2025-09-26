import React from "react";
import FooterText from "./fotter/FooterText";

const Footer = () => {
  return (
    <div className="bottom-0 left-0 flex flex-col items-center justify-center w-full h-[50%] text-white bg-black">
        <FooterText/>
      <p className="w-full h-10 text-lg text-center">© 2025 E-commerce. All rights reserved.</p>
    </div>
  );
};

export default Footer;
