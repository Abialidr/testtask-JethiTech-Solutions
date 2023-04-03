import React from "react";
import "./index.css";
function OurOfferingCard({ title, body, image }) {
  console.log(
    `🚀 ~ file: OurOfferingCard.jsx:4 ~ OurOfferingCard ~ image:`,
    image
  );
  return (
    <div className="BookingCardMain">
      <img src={`${image}`} />
      <div>
        <span className="BookingCardSpanTitle">{title}</span>
        <span className="BookingCardSpanBody">{body}</span>
        <button className="DisplayTextButton">
          <span className="DisplayTextButtonText">Contact Now</span>{" "}
          <i class="fas fa-arrow-right" />
        </button>
      </div>
    </div>
  );
}

export default OurOfferingCard;
