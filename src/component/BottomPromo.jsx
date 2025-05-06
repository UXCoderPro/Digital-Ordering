import React from "react";
import promo from "../assets/promo.png";

const BottomPromo = () => {
  return (
    <div className="w-full h-7 bg-promo-bg bg-cover bg-center bg-white flex justify-center items-center gap-1">
      <p className="font-sfText text-sm font-semibold leading-normal text-textDark">
        Powered By
      </p>
      <img src={promo} alt="warelypos" className="w-20 h-auto" />
      <p className="font-sfText text-sm font-semibold leading-normal text-textDark">
        .com.sg
      </p>
    </div>
  );
};

export default BottomPromo;
