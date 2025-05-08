import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Quantity = ({ initial = 1, onChange, onDeactivate }) => {
  const [count, setCount] = useState(initial);

  const handleDecrease = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      onChange?.(newCount);
    } else {
      onDeactivate?.();
    }
  };

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange?.(newCount);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 10 }}
        transition={{ duration: 0.2 }}
        className="flex w-full h-10 justify-between items-center shrink-0 rounded-md border border-solid border-border bg-white overflow-hidden"
      >
        <div
          className="h-full w-10 flex justify-center items-center border-r border-r-border border-solid bg-white p-1 cursor-pointer"
          onClick={handleDecrease}
        >
          <AiOutlineMinus className="text-textDark" />
        </div>
        <h1 className="text-textDark font-sfDisplay text-sm font-medium leading-normal">
          {count.toString().padStart(2, "0")}
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
