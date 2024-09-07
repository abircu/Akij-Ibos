import React from "react";
import heroBg from "../../assets/login/herobg.png";
import logo from "../../assets/login/icon.png";

const HeroLeft = () => {
  return (
    <div
      className="flex-1 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="flex flex-col justify-center items-center min-h-screen">
        <img className="w-20 h-20" src={logo} alt="" />
        <p className="text-4xl font-inter font-bold text-white mt-2">
          Furni<span className="text-[#1E99F5]">Flex</span>
        </p>
        <p className="text-sm font-medium font-barlow text-[#C8C4C4] text-center">
          Discover a seamless shopping experience with our curated <br />{" "}
          collection of products. From fashion to electronics, we bring <br />{" "}
          quality.
        </p>
      </div>
    </div>
  );
};

export default HeroLeft;
