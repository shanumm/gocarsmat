import React from "react";
// import Carimage from "./car-604019_1920.jpg";
import "../Styles/layout.css";
import Nav from "./Nav";
import { motion} from "framer-motion"
export default function Layout() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="layout"
    >
      <div className="layout-main"></div>
      <Nav />
      <div className="layout-text">
        <h1>Search</h1>
      </div>
    </motion.div>
  );
}
