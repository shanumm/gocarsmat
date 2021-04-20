import React from "react";
// import Carimage from "./car-604019_1920.jpg";
import "../Styles/Blog.css";
import Nav from "./Nav";
import { AnimatePresence, motion } from "framer-motion";
export default function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="Blog"
    >
      <div className="blog-main"></div>
      <Nav />
      <div className="blog-text">
        <div className="blog-text1">
          <div className="blog-text1-img"></div>
          <div className="blog-text1-text">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <div className="blog-text1-box">
              <h2>Lorem ipsum dolor sit amet.</h2>
            </div>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              doloremque!
            </h3>
            <button>READ MORE</button>
          </div>
        </div>
        <div className="blog-text2">
          <div className="blog-text2-img"></div>
          <div className="blog-text2-text">
            <h1>Lorem ipsum dolor sit amet consectetur</h1>
            <div className="blog-text2-box">
              <h2>Lorem ipsum dolor sit amet.</h2>
            </div>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              doloremque!
            </h3>
            <button>READ MORE</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
