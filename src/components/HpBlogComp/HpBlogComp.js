import "./HpBlogComp.scss";
import blog1 from "../../Data/imgs/pexels-anna-urlapova-2956954.jpg";
import blog2 from "../../Data/imgs/nathan-dumlao-KixfBEdyp64-unsplash.jpg";
import blog3 from "../../Data/imgs/image3.jpg";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function HpBlogComp({ blogData }) {
  return (
    <div className="homepage-blog">
      <div className="homepage-blog__item">
        <div className="homepage-blog__item-img">
          <img
            className="homepage-blog__item-img-pic"
            src={blog1}
            alt=" blog post one"
          />
        </div>

        <div className="homepage-blog__item-desc">
          <h3 className="homepage-blog__item-title">PERCOLATE</h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          enim cupiditate quia molestiae dolor laborum animi sed dolorum porro
          numquam!
        </div>
        <Link to={`/blog/nv6lvipxkg`}>
          <button className="homepage-blog__btn">READ MORE</button>
        </Link>
      </div>
      <div className="homepage-blog__item">
        <div className="homepage-blog__item-img">
          <img
            className="homepage-blog__item-img-pic"
            src={blog2}
            alt=" blog post one"
          />
        </div>

        <div className="homepage-blog__item-desc">
          <h3 className="homepage-blog__item-title">ARABICA</h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          enim cupiditate quia molestiae dolor laborum animi sed dolorum porro
          numquam!
        </div>
        <Link to={`/blog/nfj123kag1`}>
          <button className="homepage-blog__btn">READ MORE</button>
        </Link>
      </div>
      <div className="homepage-blog__item">
        <div className="homepage-blog__item-img">
          <img
            className="homepage-blog__item-img-pic"
            src={blog3}
            alt=" blog post one"
          />
        </div>

        <div className="homepage-blog__item-desc">
          <h3 className="homepage-blog__item-title">OUR GRIND</h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          enim cupiditate quia molestiae dolor laborum animi sed dolorum porro
          numquam!
        </div>
        <Link to={`/blog/akl32xo7z0`}>
          <button className="homepage-blog__btn">READ MORE</button>
        </Link>
      </div>
    </div>
  );
}
