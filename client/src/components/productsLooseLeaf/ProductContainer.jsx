/** @format */

import React from "react";

import ProductItem from "../productItem/ProductItem.component";
import "./ProductContainer.styles.scss";

const ProductContainer = ({ product }) => {
  return (
    <>
      <div className="products">
        <div className="product-text-lava">
          <h3>{product.name}</h3>
          <p>{product.desp}</p>
        </div>
        <div className="products-1">
          {product.items &&
            product.items.map((item) => (
              <ProductItem
                id={item.id}
                item={item}
                state={false}
                productid={product.id}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductContainer;
