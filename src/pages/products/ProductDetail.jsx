import React from "react";
import productInfo from "../../data/ProductInfo";
import { useParams } from "react-router-dom";
import Icon from "../../component/account/Icon";
import { VscChromeClose } from "react-icons/vsc";

const ProductDetail = () => {
  const { id } = useParams();
  const product = productInfo.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex justify-center items-center font-sfDisplay text-textDark text-xl">
        Product not found.
      </div>
    );
  }
  return (
    <div className="w-full h-screen overflow-y-auto scrollbar-hide">
      <div
        key={product.id}
        className="w-full h-48 flex justify-start items-center object-cover top-0  sticky"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover bg-center"
        />
        <div className="absolute top-0 w-full h-12 flex justify-end items-center pr-4 py-1.5">
          <Icon
            icons={VscChromeClose}
            bgColor="bg-[rgba(255,255,255,0.30)]"
            iconColor="text-textDark"
          />
        </div>
      </div>

      <div className="w-full flex flex-col mt-6  gap-3 px-4 py-3 bg-white border-b border-b-border border-solid">
        <h1 className="font-sfDisplay text-textDark text-2xl font-semibold leading-normal">
          {product.name}
        </h1>
        <p className="font-sfText text-textLight text-base font-normal leading-[130%]">
          {product.description}
        </p>
        <h2 className="font-sfDisplay mt-3 text-primary text-lg font-semibold">
          {product.cost}
        </h2>
      </div>

      {product.modifiers && (
        <div className="mt-6 w-full bg-white px-4 py-7">
          <h2 className="text-xl font-semibold mb-2">Modifiers</h2>
          {product.modifiers.map((mod, index) => (
            <div key={index} className="mb-4">
              <p className="font-medium">{mod.name}</p>
              <div className="flex gap-2 mt-1 flex-wrap">
                {mod.options.map((option, i) => (
                  <div
                    key={i}
                    className="p-2 border rounded-lg bg-gray-100 text-sm"
                  >
                    {option.name} {option.price > 0 && `(+${option.price})`}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
