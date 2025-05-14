import React, { useState } from "react";
import Header from "../component/Header";
import Category from "../component/Category";
import Cartico from "../component/Cartico";
import Product from "../component/Product";
import { motion } from "framer-motion";

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

const Menu = () => {
  const [selectedcategory, setSelectedCategory] = useState("");
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className=" w-full h-screen overflow-y-auto scrollbar-hide ">
        <Header />
        <Category
          selected={selectedcategory}
          onCategorySelect={setSelectedCategory}
        />

        <Product scrollToCategory={selectedcategory} />

        <Cartico />
      </div>
    </motion.div>
  );
};

export default Menu;
