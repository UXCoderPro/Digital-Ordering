import React from "react";
import Header from "../component/Header";
import Category from "../component/Category";
import Cartico from "../component/Cartico";
import Product from "../component/Product";

const Menu = () => {
  return (
    <div className="w-full">
      <Header />
      <Category />

      <Product />

      <Cartico />
    </div>
  );
};

export default Menu;
