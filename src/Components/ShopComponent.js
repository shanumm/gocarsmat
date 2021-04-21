import React from "react";
import "../Styles/shopComponent.css";
import "react-bootstrap";
import { Eye, HeartFill, BarChart } from "react-bootstrap-icons";
export default function ShopComponent() {
  return (
    <div className="shopcomponent">
      <div className="shop-component-image">
        <div>
          <div>
            <Eye size={20} />
          </div>
          <div>
            <HeartFill size={20} />
          </div>
          <div>
            <BarChart size={20}/>
          </div>
        </div>
      </div>
      <div className="shop-component-review">
        <div>1 review</div>
      </div>
      <div className="shop-component-title">
        <div>
          <strong>lorem</strong>
        </div>
      </div>
      <div className="shop-component-price">
        <div>100$</div>
      </div>
      <div className="shop-component-button">
        <button>add to cart</button>
      </div>
    </div>
  );
}
