/** @format */

import React, { useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
import { useLocation, useParams } from "react-router-dom";
import Heart from "../../components/svg/Heart";
import "./single.styles.scss";
import TeawareProductsArray from "../../components/productsTeaware/TeawareProductsArray";
import Products from "../../components/productsLooseLeaf/Products";
import queryString from "query-string";
import * as Scroll from "react-scroll";

const SingleProduct = () => {
  const location = useLocation();
  const { id } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    Scroll.animateScroll.scrollToTop();
    const parsed = queryString.parse(location.search);
    if (parsed.state === "true") {
      const result = TeawareProductsArray.find(
        (item) => item.id === parseInt(id)
      );
      result && setProduct(result);
    }
    if (parsed.state === "false") {
      const result = Products.find(
        (item) => item.id === parseInt(parsed.productId)
      );
      const data = result.items?.find((product) => product.id === parseInt(id));
      data && setProduct(data);
    }
  }, [id]);
  return (
    <div className="single-container">
      <div className="single-contents">
        <div className="single-body-flex">
          <div className="single-left">
            <div className="single-left-text">
              <h1>{product.name}</h1>
            </div>
            <div className="single-left-img">
              <img src={product.imageURL} alt="error" />
            </div>
          </div>
          <div className="single-right">
            <span className="fav-icon">
              <Heart />
            </span>
            <div className="single-right-text">
              <h2>Lava</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Excepturi, nesciunt. Veritatis optio earum vero facere tempore
                at, perspiciatis ipsa culpa.
              </p>
              <p>INR {product.price}</p>
              <span>Net wt : 500 grams</span>
              <button>
                <BsBag className="single-bag-icon" /> Add to my cart
              </button>
              <button>buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
