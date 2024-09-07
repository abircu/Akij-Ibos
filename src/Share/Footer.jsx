import React from "react";
import FooterTop from "../Components/footer/FooterTop";
import FooterBottom from "../Components/footer/FooterBottom";

const Footer = () => {
  return (
    <div className="bg-[#0E0E0E] overflow-x-hidden">
      <div className="max-w-6xl mx-auto min-h-[590px] text-white pt-24">
        <FooterTop />
        <FooterBottom />
      </div>
    </div>
  );
};

export default Footer;
