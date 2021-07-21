/** @format */

import React from "react";

import ProductContainer from "../../components/productsLooseLeaf/ProductContainer";
import Products from "../../components/productsLooseLeaf/Products";

import "../teaware/teaware.styles.scss";

const Productslooseleaf = () => {
  return (
    <div className="products-container">
      <div className="product-first-bg">
        <img
          className="product-bg"
          src="../images/product/productbg.webp"
          alt="error"
        />
        <h1 className="product-h1">Loose Leaf</h1>
      </div>
      <div className="product-contents">
        {Products.map((product) => (
          <ProductContainer product={product} />
        ))}
      </div>
    </div>
  );
};

export default Productslooseleaf;
