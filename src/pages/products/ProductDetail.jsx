import React, { useState, useMemo } from "react";
import productInfo from "../../data/ProductInfo";
import { useParams, useNavigate } from "react-router-dom";
import Icon from "../../component/account/Icon";
import { VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion";
import ProductNav from "../../component/productNav/ProductNav";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: { duration: 0.3 },
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productInfo.find((item) => item.id === parseInt(id));

  // Add inside the component:
  const basePrice = parseFloat(product.cost?.replace("$", "") || 0);
  const [selectedModifiers, setSelectedModifiers] = useState({});
  const [selectedCombos, setSelectedCombos] = useState({});
  const [quantity, setQuantity] = useState(1);

  // Modifier selection logic
  const handleModifierSelect = (modifierName, option) => {
    setSelectedModifiers((prev) => ({
      ...prev,
      [modifierName]: option,
    }));
  };

  // Combo selection logic
  const handleComboSelect = (comboIndex, option) => {
    setSelectedCombos((prev) => ({
      ...prev,
      [comboIndex]: option,
    }));
  };

  const totalPrice = useMemo(() => {
    let total = basePrice;

    Object.values(selectedModifiers).forEach((opt) => {
      total += parseFloat(opt.price || 0);
    });

    Object.values(selectedCombos).forEach((opt) => {
      total += parseFloat(opt.price || 0);
    });

    return (total * quantity).toFixed(2);
  }, [selectedModifiers, selectedCombos, quantity, basePrice]); // add basePrice here

  if (!product) {
    return (
      <div className="flex justify-center items-center font-sfDisplay text-textDark text-xl h-screen">
        Product not found.
      </div>
    );
  }
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="w-full h-screen overflow-y-auto scrollbar-hide">
        <div
          className="flex pr-4 py-3 justify-end items-start w-full h-64 bg-center bg-cover"
          style={{ backgroundImage: `url(${product.image})` }}
        >
          <button onClick={() => navigate(-1)}>
            <Icon
              icons={VscChromeClose}
              bgColor="bg-[rgba(255,255,255,0.30)]"
              iconColor="text-white"
            />
          </button>
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

        {product.type === "Combo" && product.combo && (
          <div>
            <h2 className="text-lg font-semibold text-textDark">
              Combo Options
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {product.combo[0].options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleComboSelect(0, option)}
                  className={`flex gap-4 items-center border p-3 rounded-lg ${
                    selectedCombos[0]?.name === option.name
                      ? "border-primary"
                      : "border-border"
                  }`}
                >
                  <img
                    src={option.cover}
                    alt={option.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex flex-col">
                    <p className="font-medium">{option.name}</p>
                    <span className="text-sm text-primary">{option.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {product.type === "Modifier" && product.modifiers && (
          <div className="space-y-4">
            {product.modifiers.map((modifier, modIndex) => (
              <div key={modIndex}>
                <h2 className="text-lg font-semibold text-textDark">
                  {modifier.name}
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {modifier.options.map((opt, optIndex) => (
                    <div
                      key={optIndex}
                      onClick={() => handleModifierSelect(modifier.name, opt)}
                      className={`flex flex-col items-center border rounded-xl p-2 cursor-pointer ${
                        selectedModifiers[modifier.name]?.name === opt.name
                          ? "border-primary"
                          : "border-border"
                      }`}
                    >
                      <img
                        src={opt.cover}
                        alt={opt.name}
                        className="w-24 h-24 object-cover rounded"
                      />
                      <p className="text-center font-medium text-sm">
                        {opt.name}
                      </p>
                      {opt.price !== 0 && (
                        <span className="text-xs text-primary">
                          ${opt.price}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <ProductNav
          price={totalPrice}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>
    </motion.div>
  );
};

export default ProductDetail;
