import React from "react";
import "./index.css";
function OurBlogCard({ title, body, image, date, by, type }) {
  console.log(
    `🚀 ~ file: OurOfferingCard.jsx:4 ~ OurOfferingCard ~ image:`,
    image
  );
  return (
    <div className="BlogCardMain">
      <img src={`${image}`} className="BlogCardimg" />
      <div className="BlogCardInfo">
        <span>{type}</span>
        <div className="BlogCardMoreInfo">
          <div className="BlogCardInfoDate" ><img src="./Calender.svg" alt="" height={'22px'} width={'20px'} />{date}</div>
          <span>{by}</span>
        </div>
      </div>
      <div className="BlogCardText">
        <span className="BlogCardSpanTitle">{title}</span>
        <span className="BlogCardSpanBody">{body}</span>
        <button className="DisplayTextButton">
          <span className="DisplayTextButtonText">View More</span>{" "}
          <i class="fas fa-arrow-right" />
        </button>
      </div>
    </div>
  );
}

export default OurBlogCard;
