import React from "react";

const btnSm = ({ price }) => {
  return (
    <button className="h-10 w-1/4  flex justify-center items-center rounded-lg cursor-pointer bg-secondary  text-white font-sfDisplay text-xs font-medium ">
      Add Items ${price}
    </button>
  );
};

export default btnSm;
