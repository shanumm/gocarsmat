import React from "react";
import { Carousel } from "react-bootstrap";
import "../Styles/comments.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Comments() {
  return (
    <div className="comments">
      <div className="allcomments">
        <div className="comment1">
          <div className="comment1-img"></div>
          <div className="comment1-quotes"></div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Fugit alias, autem eaque ut pariatur saepe quod quos
              voluptatum eius error! 
            </p>
          </div>
          <div className="comment1-quotes"></div>
          <div>
            <h3>Lorem</h3>
          </div>
        </div>
        <div className="comment2">
          <div className="comment2-img"></div>
          <div className="comment2-quotes"></div>
          <div>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Fugit alias, autem eaque ut pariatur saepe quod quos
              voluptatum eius error!
            </p>
          </div>
          <div className="comment2-quotes"></div>
          <div>
            <h3>Lorem</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
