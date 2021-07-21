/** @format */

import React from "react";
import TeawareContainer from "../../components/productsTeaware/TeawareContainer";

import "./teaware.styles.scss";

const TeaWare = () => {
  return (
    <div className="products-container">
      <div className="product-text-overlay">
        <h2>Tea Ware</h2>
      </div>
      <div className="product-first-bg">
        <img
          className="product-bg"
          src="../images/teaware/teaware.jpg"
          alt="error"
        />
        {/* <h1 className="product-h1">Tea Ware</h1> */}
      </div>
      <div className="product-contents">
        <TeawareContainer />
      </div>
    </div>
  );
};

export default TeaWare;
