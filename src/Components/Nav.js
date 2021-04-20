import React from "react";
import "../Styles/Nav.css";
import { Link } from "react-router-dom";
export default function Nav(props) {
  const navstyle = {
    color: "white",
  };
  return (
    <div className="navbar">
      <div>
        <div>Lorem</div>
        <div className="navlinks">
          <ul>
            <Link style={navstyle} to="/">
              <li className={props.number}>Home</li>
            </Link>
            <Link style={navstyle} to="shop">
              <li>Shop</li>
            </Link>
            <Link style={navstyle} to="layout">
              <li>Layout</li>
            </Link>
            <Link style={navstyle} to="blog">
              <li className={props.number}>Blogs</li>
            </Link>
            <Link style={navstyle} to="contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="cart">Cart</div>
      </div>
    </div>
  );
}
