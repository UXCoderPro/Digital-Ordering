import React from "react";
import { IoMdCart } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Cartico = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/MyCart");
  };

  return (
    <button
      onClick={handleNavigation}
      className="fixed right-4 bottom-32 bg-bgShade border border-border border-solid flex justify-center items-center w-14 h-14 shadow-[0px_2.008px_2.008px_0px_rgba(0,0,0,0.25)] p-3 rounded-full cursor-pointer z-10"
    >
      <IoMdCart className="text-textDark h-auto w-6" />
    </button>
  );
};

export default Cartico;
