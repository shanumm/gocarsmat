import React from "react";
import "../Styles/FeaturedCards.css"

export default function FeaturedCards() {
  return (
    <div className="featuredcards">
      <div className="featured-img"></div>
      <div className="reviews">no reviews</div>
      <div className="featured-heading"> Lorem, ipsum dolor.</div>
      <div className="featured-text">
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis omnis
        quo impedit ex possimus debitis inventore quis sapiente laudantium iure.
      </div>
      <div className="featured-price"></div>
      <div className="featured-button">
        <button>add to cart</button>
      </div>
    </div>
  );
}
