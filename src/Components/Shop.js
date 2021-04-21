import React from "react";
import ImageCorousel from "./ImageCorousel";
import Nav from "./Nav";
import ShopComponent from "./ShopComponent";
import { motion } from "framer-motion";
import "../Styles/shop.css";
export default function Shop() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="shop"
    >
      <div className="shop-main"></div>
      <Nav />
      <div className="shop-content">
        <div>
          <div className="shop-content-left-upper">
            <div className="shop-content-left-upper-category">
              <div>
                <strong>Categories</strong>
              </div>
              <div>
                <div>Lorem</div>
                <div>Lorem</div>
                <div>Lorem</div>
              </div>
            </div>
            <div className="shop-content-left-upper-category">
              <div>
                <strong>Color</strong>
              </div>
              <div>
                <div>Lorem</div>
                <div>Lorem</div>
                <div>Lorem</div>
              </div>
            </div>
            <div className="shop-content-left-upper-category">
              <div>
                <strong>Price</strong>
              </div>
              <div>
                <div>Lorem</div>
                <div>Lorem</div>
                <div>Lorem</div>
              </div>
            </div>
          </div>
          <div className="shop-content-left-lower">Latest Collection</div>
        </div>
        <div>
          <div className="shop-content-sorting">
            <div>Sorting</div>
            <div>
              <input type="text" placeholder="search" />
            </div>
          </div>
          <div className="shop-component-cards">
            <ShopComponent />
            <ShopComponent />
            <ShopComponent />
            <ShopComponent />
            <ShopComponent />
            <ShopComponent />
            <ShopComponent />
            <ShopComponent />
            <ShopComponent />
            <ShopComponent />
            <ShopComponent />
            <ShopComponent />
            <ShopComponent />
            <ShopComponent />
            <ShopComponent />
            <ShopComponent />
            <ShopComponent />
            <ShopComponent />
          </div>
          <div className="shop-content-sorting-bottom">
            <div>Showing 1 to 12 of 13 items</div>
            <div>
              <span>
                <div>1</div>
              </span>
              <span>
                <div>2</div>
              </span>
              <span>
                <div>3</div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
