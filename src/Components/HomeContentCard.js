import React, { useEffect } from "react";
import "../Styles/homecontentcard.css";
export default function HomeContentCard(props) {
  return (
    <div className="homecontentcard">
      <div className="homecontentcard-text">
        {props.name} <br />
        {props.content}
      </div>
    </div>
  );
}
