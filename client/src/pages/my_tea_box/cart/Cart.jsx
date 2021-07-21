/** @format */

import React from "react";
import UserNav from "../../../components/User_Navbar/UserNav.component";
import "./cart.styles.scss";
const Cart = () => {
  return (
    <div>
      <UserNav />
      <div className="cart-container">
        <div className="cart-contents">
          <h2>My Cart</h2>
          <div className="cart-body">
            <div className="cart-box">
              <div className="cart-item">
                <h6>name</h6>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit
                </span>
              </div>
              <div className="cart-item item1">
                <h6>name</h6>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit
                </span>
              </div>
              <div className="cart-item item2">
                <h6>name</h6>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
