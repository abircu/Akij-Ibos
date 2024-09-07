import React from "react";
const Apple = ({ Img, Text }) => {
  return (
    <div>
      <button className="flex gap-1 w-full justify-center items-center bg-[#D9D9D9] rounded-md py-3 px-5">
        <img src={Img} alt="" />
        <span className="text-xs font-barlow font-medium text-[#000000]">
          {Text}
        </span>
      </button>
    </div>
  );
};

export default Apple;
