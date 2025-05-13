import React, { useState } from "react";
import Header from "../component/Header";
import Category from "../component/Category";
import Cartico from "../component/Cartico";
import Product from "../component/Product";

const Menu = () => {
  const [selectedcategory, setSelectedCategory] = useState("");
  return (
    <div className=" w-full h-screen overflow-y-auto scrollbar-hide ">
      <Header />
      <Category
        selected={selectedcategory}
        onCategorySelect={setSelectedCategory}
      />

      <Product scrollToCategory={selectedcategory} />

      <Cartico />
    </div>
  );
};

export default Menu;
