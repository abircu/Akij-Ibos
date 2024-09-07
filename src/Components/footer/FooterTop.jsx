import React from "react";
import furniflex from "../../assets/footer/Logo.png";
const FooterTop = () => {
  return (
    <div className="flex px-2 flex-col lg:flex-row">
      <div className="w-full  md:w-1/3">
        <img src={furniflex} alt="logo" />
      </div>
      <div className="w-full px-1 md:w-2/3 grid grid-cols-1 md:grid-cols-3">
        <div>
          <h1 className="font-barlow font-semibold text-xl">About Us</h1>
          <div className="text-sm font-barlow font-semibold text-[#81859F]">
            <p className="pt-7 pb-3">Master Plan</p>
            <p className=" pb-3">Jobs</p>
            <p className=" pb-3">Invest</p>
            <p className=" pb-3">Pressroom</p>
            <p className=" pb-3">Blog</p>
            <p className=" pb-3">Contact</p>
          </div>
        </div>
        <div>
          <h1 className="font-barlow font-semibold text-xl">Explore EEVE</h1>
          <div className="text-sm font-barlow font-semibold text-[#81859F]">
            <p className="pt-7 pb-3">Unlock my Robot Power</p>
            <p className=" pb-3">Starlight</p>
            <p className=" pb-3">Robot Platform</p>
            <p className=" pb-3">EEVE Roadmap</p>
          </div>
        </div>
        <div>
          <h1 className="font-barlow font-semibold text-xl">
            Community & Support
          </h1>
          <div className="text-sm font-barlow font-semibold text-[#81859F]">
            <p className="pt-7 pb-3">Willow X Community</p>
            <p className=" pb-3">Developer & Maker Access</p>
            <p className=" pb-3">Special Cases</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
