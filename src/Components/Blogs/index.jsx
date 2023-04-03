import React from "react";
import "./index.css";
import Slider from "react-slick";
import OurBlogCard from "./OurBlogCard";
import OurBlog1 from "../../Images/OurBlog1.png"
import OurBlog2 from "../../Images/OurBlog2.png"
import OurBlog3 from "../../Images/OurBlog3.png"

function Blogs() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <div className="MainDiv5">
      <span className="MainTextHeader">Blogs</span>
      <hr className="MainHR" style={{width:"3%"}}></hr>
      <div className="BlogSlider">
        <Slider {...settings}>
          <OurBlogCard
            title="Guide for personal property Buying "
            body="Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod..."
            image={OurBlog1}
            date="09 jun 2022"
            by="By Admin"
            type="Real Estate, Analysis"
          />
          <OurBlogCard
            title="Guide for personal property Buying "
            body="Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod..."
            image={OurBlog2}
            date="09 jun 2022"
            by="By Admin"
            type="Real Estate, Analysis"
          />
          <OurBlogCard
            title="Guide for personal property Buying "
            body="Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod..."
            image={OurBlog3}
            date="09 jun 2022"
            by="By Admin"
            type="Real Estate, Analysis"
          />
         <OurBlogCard
            title="Guide for personal property Buying "
            body="Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod..."
            image={OurBlog1}
            date="09 jun 2022"
            by="By Admin"
            type="Real Estate, Analysis"
          />
          <OurBlogCard
            title="Guide for personal property Buying "
            body="Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod..."
            image={OurBlog2}
            date="09 jun 2022"
            by="By Admin"
            type="Real Estate, Analysis"
          />
          <OurBlogCard
            title="Guide for personal property Buying "
            body="Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod..."
            image={OurBlog3}
            date="09 jun 2022"
            by="By Admin"
            type="Real Estate, Analysis"
          />
          <OurBlogCard
            title="Guide for personal property Buying "
            body="Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod..."
            image={OurBlog1}
            date="09 jun 2022"
            by="By Admin"
            type="Real Estate, Analysis"
          />
          <OurBlogCard
            title="Guide for personal property Buying "
            body="Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod..."
            image={OurBlog2}
            date="09 jun 2022"
            by="By Admin"
            type="Real Estate, Analysis"
          />
          <OurBlogCard
            title="Guide for personal property Buying "
            body="Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod..."
            image={OurBlog3}
            date="09 jun 2022"
            by="By Admin"
            type="Real Estate, Analysis"
          />
        </Slider>
      </div>
    </div>
  );
}

export default Blogs;
