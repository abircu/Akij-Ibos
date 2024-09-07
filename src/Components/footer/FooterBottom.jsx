import React from "react";
import facebook from "../../assets/footer/facebook-02.png";
import apple from "../../assets/footer/insta.png";
import x from "../../assets/footer/new-twitter.png";
import Linkedin from "../../assets/footer/linkedin-02.png";
import flag from "../../assets/footer/flag.png";
const FooterBottom = () => {
  return (
    <div className="pt-20 ">
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between border-t-[1px] border-[#444652] ">
        <div className="flex gap-2 mt-6">
          <img src={facebook} alt="" />
          <img src={apple} alt="" />
          <img src={x} alt="" />
          <img src={Linkedin} alt="" />
        </div>
        <div className="flex gap-2 text-[#81859F] font-barlow font-semibold text-sm mt-5">
          <p>March22 Recap</p>
          <p>Privacy Policy</p>
          <p>General Terms</p>
          <p>Contact</p>
        </div>
        <div className="flex justify-center items-center gap-1 mt-6">
          <img src={flag} alt="" />
          <p className=" text-[#81859F] font-barlow font-semibold text-sm">
            United States (English)
          </p>
        </div>
      </div>
      <div className="pt-5 flex justify-center items-center">
        <p className="text-[#323544] text-sm font-barlow font-semibold">
          EEVE © 2024. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
