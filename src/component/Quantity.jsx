import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Quantity = ({ initial = 1, onChange, onDeactivate }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    onChange(count);
  }, [onChange, count]);

  const handleDecrease = () => {
    const newCount = Math.max(0, count - 1);
    setCount(newCount);
    if (newCount === 0) {
      onDeactivate?.();
    }
  };

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 10 }}
        transition={{ duration: 0.2 }}
        className="flex w-2/4 h-10 justify-between items-center shrink-0 rounded-md border border-solid border-border bg-white overflow-hidden"
      >
        <div
          className="h-full w-10 flex justify-center items-center border-r border-r-border border-solid bg-white p-1 cursor-pointer"
          onClick={handleDecrease}
        >
          <AiOutlineMinus className="text-textDark" />
        </div>

        <h1 className="text-textDark font-sfDisplay text-sm font-medium leading-normal">
          {count}
        </h1>

        <div
          className="h-full w-10 flex justify-center items-center border-l border-l-border border-solid bg-primary p-1 cursor-pointer"
          onClick={handleIncrease}
        >
          <AiOutlinePlus className="text-white" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Quantity;
