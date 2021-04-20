import React from "react";
import "../Styles/ourproductscard.css"
export default function OurproductsCard() {
  return (
    <div className="ourproductcards">
      <div className="ourproduct-img"></div>
      <div className="reviews">no reviews</div>
      <div className="ourproduct-heading"> Lorem, ipsum dolor.</div>
      <div className="ourproduct-text">
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis omnis
        quo impedit ex possimus debitis inventore quis sapiente laudantium iure.
      </div>
      <div className="ourproduct-price"></div>
      <div className="ourproduct-button">
        <button>add to cart</button>
      </div>
    </div>
  );
}
