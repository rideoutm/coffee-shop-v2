import "./HpBlogComp.scss";
import blog1 from "../../Data/imgs/pexels-anna-urlapova-2956954.jpg";
import blog2 from "../../Data/imgs/nathan-dumlao-KixfBEdyp64-unsplash.jpg";

export default function HpBlogComp() {
  return (
    <div className="homepage-blog">
      {/* <h2 className="homepage-blog__header">THE COFFEE BLOG</h2> */}
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
        <button className="homepage-blog__btn">READ MORE</button>
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
          <h3 className="homepage-blog__item-title">THE BEST ARABICA</h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          enim cupiditate quia molestiae dolor laborum animi sed dolorum porro
          numquam!
        </div>
        <button className="homepage-blog__btn">READ MORE</button>
      </div>
    </div>
  );
}
