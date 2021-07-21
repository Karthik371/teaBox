/** @format */

import React from "react";

import ProductItem from "../productItem/ProductItem.component";
import TeawareProducts from "./TeawareProductsArray";
import "./TeawareContainer.styles.scss";

console.log(TeawareProducts);
const TeawareContainer = () => {
  return (
    <>
      <div className="products">
        <div className="product-text-teaware">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            quisquam possimus corporis, reiciendis eius rerum optio magni harum
            porro at architecto assumenda aut animi nihil soluta quia magnam eos
            aliquam.
          </p>
        </div>
        <div className="products-teaware">
          {TeawareProducts.map((product) => (
            <ProductItem id={product.id} item={product} state={true} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TeawareContainer;
