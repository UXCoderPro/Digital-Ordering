import React, { useRef, useEffect, useState, useCallback } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import Quantity from "./Quantity";

import { Link } from "react-router-dom";

import productInfo from "../data/ProductInfo";

const backgroundColor = {
  normal: {
    container: "bg-white",
    label: "bg-redShade",
    costTxt: "text-primary",
    txt: "text-textDark",
  },
  Modifier: {
    container: "bg-modifier",
    label: "bg-modifierShade",
    costTxt: "text-[#B2BEC7]",
    txt: "text-white",
  },
  Combo: {
    container: "bg-combo",
    label: "bg-comboShade",
    costTxt: "text-[#C7BDB2]",
    txt: "text-white",
  },
};

const Product = ({ scrollToCategory }) => {
  const [activeProduct, setActiveProduct] = useState(null);
  const sectionRefs = useRef({});

  const groupedProducts = productInfo.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  useEffect(() => {
    if (scrollToCategory && sectionRefs.current[scrollToCategory]) {
      sectionRefs.current[scrollToCategory].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [scrollToCategory]);

  const setSectionRef = useCallback(
    (category) => (el) => {
      if (el) sectionRefs.current[category] = el;
    },
    []
  );

  return (
    <div className="w-full flex flex-col gap-8 px-4 pt-5 pb-36 ">
      {Object.entries(groupedProducts).map(([category, items]) => (
        <div key={category} ref={setSectionRef(category)}>
          <div className="grid grid-cols-2 gap-x-1 gap-y-4">
            {items.map((item, index) => {
              const type = item.type || "normal";
              const styles = backgroundColor[type];
              const isActive = activeProduct === item.name;

              return (
                <Link key={item.id} to={`/ProductInfo/${item.id}`}>
                  <div
                    className={`flex flex-col h-80 justify-between items-center gap-2 border ${
                      isActive ? "border-primary border-2" : "border-border"
                    } border-solid rounded-2xl overflow-hidden cursor-pointer ${
                      styles.container
                    }`}
                  >
                    <div
                      className={`w-full h-52 object-cover bg-center bg-cover flex p-3 ${
                        isActive
                          ? "justify-center items-end"
                          : "justify-end items-end"
                      }`}
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      {!isActive && (
                        <div
                          onClick={() => setActiveProduct(item.name)}
                          className="flex justify-center items-center w-8 h-8 bg-[rgba(89,89,89,0.50)] backdrop-blur-[2px] rounded-full cursor-pointer"
                        >
                          <AiOutlinePlus className="text-white h-auto w-6" />
                        </div>
                      )}
                      {isActive && (
                        <Quantity onDeactivate={() => setActiveProduct(null)} />
                      )}
                    </div>

                    <h1
                      className={`text-center font-sfDisplay text-base w-4/5 font-semibold leading-normal ${styles.txt}`}
                    >
                      {item.name}
                    </h1>

                    <div
                      className={`w-full flex justify-between items-center px-3 py-2 ${styles.label}`}
                    >
                      <p
                        className={`text-base font-sfText font-semibold leading-normal ${styles.costTxt}`}
                      >
                        {item.cost}
                      </p>
                      <IoIosArrowForward className={styles.costTxt} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
