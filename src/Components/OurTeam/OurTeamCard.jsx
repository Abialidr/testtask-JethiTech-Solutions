import React, { useRef, useState } from "react";
import "./index.css";
function OurTeamCard({ title, body, image }) {
  const [active, SetActive] = useState(true);
  const divRef = useRef(null);
  const scrollToTop = () => {
    console.log("hello world");

    divRef.current.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="TeamCardMain">
      <img src={`${image}`} />
      <div>
        <span className="TeamCardSpanTitle">{title}</span>
        <span
          className={`TeamCardSpanBody ${
            active ? "activeTeam" : "inactiveTeam"
          }`}
        >
          {body}
        </span>

        <span
          className="TeamCardSpanView"
          onClick={() => {
            SetActive(!active);
          }}
        >
          {active ? "view more" : "view less"}
        </span>
      </div>
    </div>
  );
}

export default OurTeamCard;
