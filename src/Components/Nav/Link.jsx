import React, { useState } from "react";
import "./index.css";
function MainLinks() {
  const [selected, setSelected] = useState("Home");
  const handleChange = (name) => {
    console.log("hello world");
    setSelected(name);
  };
  return (
    <div className="MainLinks">
      <a
        className={`${selected === "Home" ? "active" : "inactive"}`}
        onClick={() => handleChange("Home")}
      >
        Home
      </a>
      <a
        className={`${selected === "Our Offerings" ? "active" : "inactive"}`}
        onClick={() => handleChange("Our Offerings")}
      >
        Our Offerings
      </a>
      <a
        className={`${selected === "Our Team" ? "active" : "inactive"}`}
        onClick={() => handleChange("Our Team")}
      >
        Our Team
      </a>
      <a
        className={`${selected === "Contact Us" ? "active" : "inactive"}`}
        onClick={() => handleChange("Contact Us")}
      >
        Contact Us
      </a>
      <a
        className={`${selected === "Blogs" ? "active" : "inactive"}`}
        onClick={() => handleChange("Blogs")}
      >
        Blogs
      </a>
    </div>
  );
}

export default MainLinks;
