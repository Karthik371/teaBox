/** @format */

import React from "react";
import Heart from "../svg/Heart";
import { BsBag } from "react-icons/bs";
import ReactTooltip from "react-tooltip";
import { useDispatch } from "react-redux";
import { AddtoCart } from "../../redux/cart/cart.action";

import "./ProductItem.styles.scss";
import { Link } from "react-router-dom";

const ProductItem = ({ item, state, productid }) => {
  const dispatch = useDispatch();
  const { name, price, imageURL } = item;
  return (
    <>
      <div className="product-1-box">
        <div className="product-likes">
          <span className="heart-icon" data-tip="Like">
            <Heart />
          </span>
        </div>
        <ReactTooltip />
        <div className="product-1-img">
          <Link
            to={`/single/product/${item.id}?state=${state}&productId=${productid} `}>
            <img src={imageURL} alt="error" />
          </Link>
        </div>
        <div className="product-1-text-box">
          <div className="product-1-text">
            <p>{name}</p>
            <span>INR :{price}</span>
          </div>
          <div className="product-1-cart">
            <span
              onClick={() => dispatch(AddtoCart(item))}
              className="bag-icon"
              data-tip="Add to Cart">
              <BsBag />
            </span>
            <ReactTooltip />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
