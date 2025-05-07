import React from "react";
import food from "../assets/1.jpg";

const productInfo = [
  { name: "Beef Chukka", cost: "$ 2.90", image: food },
  { name: "Chicken gravy", cost: "$ 4.35", image: food },
  { name: "Beef Briyani", cost: "$ 78.3", image: food },
  { name: "Chicken Mandi", cost: "$ 12.32", image: food },
  { name: "Black Current Milkshake", cost: "$ 1.25", image: food },
  { name: "tuqilla Mixed Shot", cost: "$ 2.65", image: food },
  { name: "Brother Hood", cost: "$ 4.36", image: food },
];

const Product = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-4 px-4 pt-5 pb-36 ">
      {productInfo.map((item) => (
        <div
          key={item.name}
          className=" flex flex-col h-auto justify-between items-center gap-2 border border-border border-solid rounded-lg bg-white overflow-hidden"
        >
          <div className="w-full h-3/4">
            <img
              src={item.image}
              alt={item.name}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-sm font-semibold">{item.name}</h1>
          <h1 className="text-xs text-gray-600">{item.cost}</h1>
        </div>
      ))}
    </div>
  );
};

export default Product;
