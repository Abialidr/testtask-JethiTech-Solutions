import React from "react";
import "./index.css";
function DisplayDiv() {
  return (
    <div className="MainDiv1">
      <div className="DisplayDiv">
        <div>
          <p className="DisplayText">Making your <span className="DisplayTextHighlight">real estate</span> purchase journey faster and transparent</p>
        </div>
        <div>
          <img src="./DisplayImage.svg" className="DisplayImage" />
          <div className="ImageShadow"></div>
        </div>
      </div>
    </div>
  );
}

export default DisplayDiv;
