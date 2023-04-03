import React from "react";
import "./index.css";
function WhoWeAre() {
  return (
    <div className="MainDiv2">
      <div className="DisplayDiv2">
        <div className="ImageDiv2">
          <img src="./DisplayImage2.svg" className="DisplayImage2" />
        </div>
        <div className="TextDiv2">
          <p className="DisplayTextTitle ">Who We Are</p>
          <p className="DisplayTextBody ">
            The Indian real estate sector is resilient despite global headwinds.
            Returns are impressive and the sector is expected to reach US$ 1
            trillion in market size by 2030 (Niti Aayog report, 2021). However,
            the whole real estate purchase journey is very tedious and takes
            more than 2 years on average. Further, as the ticket size of this
            investment is large, security and trust become quite critical.
            Problems compound when you are currently away from your purchase
            destination. If you are experiencing difficulties in the real estate
            purchase journey, we are here to make it fast and transparent.
          </p>
          <button className="DisplayTextButton"><span className="DisplayTextButtonText">Contact Now</span> <i class='fas fa-arrow-right'/></button>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
