import React from "react";
import BottomPromo from "../../component/BottomPromo";
import Quantity from "../../component/Quantity";

const ProductNav = ({ quantity, setQuantity, price }) => {
  return (
    <div className="fixed bottom-0 w-full flex flex-col gap-2 justify-center items-center">
      <nav className="w-11/12 px-4 py-5 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.10)] bg-white border border-border rounded-lg border-solid flex items-center justify-between">
        <Quantity
          initial={quantity}
          onChange={setQuantity}
          onDeactivate={() => console.log("Quantity is 0")}
        />

        <button className="bg-primary text-white px-4 py-2 rounded-md">
          Add Items ${price}
        </button>
      </nav>
      <BottomPromo />
    </div>
  );
};

export default ProductNav;
