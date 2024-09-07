import React from "react";

const Action = ({ ActionText, handleFunction }) => {
  return (
    <div>
      <button
        onClick={handleFunction}
        type="onsubmit"
        className="flex w-full rounded-lg justify-center items-center h-10 font-barlow font-bold text-white text-sm bg-[#000000]"
      >
        {ActionText}
      </button>
    </div>
  );
};

export default Action;
