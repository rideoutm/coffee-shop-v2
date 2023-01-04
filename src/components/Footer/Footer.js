import "./Footer.scss";
import { Link } from "react-router-dom";
import blogData from "../Blog/blogData.json";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__store-hours">
        <h2 className="footer__header">STORE HOURS</h2>
        <div className="footer__store-list">
          <div className="footer__store-list-item">
            <span className="footer__store-hours-day">MONDAY</span>6AM - 11PM
          </div>
          <div className="footer__store-list-item">
            <span className="footer__store-hours-day">TUESDAY</span>6AM - 11PM
          </div>
          <div className="footer__store-list-item">
            <span className="footer__store-hours-day">WEDNESDAY</span>6AM - 11PM
          </div>
          <div className="footer__store-list-item">
            <span className="footer__store-hours-day">THURSDAY</span>6AM - 11PM
          </div>
          <div className="footer__store-list-item">
            <span className="footer__store-hours-day">FRIDAY</span>6AM - 10PM
          </div>
          <div className="footer__store-list-item">
            <span className="footer__store-hours-day">SATURDAY</span>6AM - 7PM
          </div>
          <div className="footer__store-list-item">
            <span className="footer__store-hours-day">SUNDAY</span>{" "}
            <span className="footer__store-hours-closed">CLOSED</span>
          </div>
          <div></div>
        </div>
      </div>
      <div className="footer__posts">
        <h2 className="footer__posts-header">BLOG POSTS</h2>
        <ul className="footer__posts-list">
          <Link to="/blog/iqn591avfd">
            <li className="footer__posts-item">
              SEIZE THE DAY, BUT FIRST COFFEE <br /> <span className="footer__posts-item-date">05/03/2022</span>
            </li>
          </Link>
          <Link to="/blog/xznv5z1z0">
            <li className="footer__posts-item">
              WITH ALL GOOD THINGS, COFFEE <br /> <span className="footer__posts-item-date">09/15/2022</span>
            </li>
          </Link>
          <Link to="/blog/c3x19m5gfd">
            <li className="footer__posts-item">
              COFFEE, THE PERFECT CUP <br /> <span className="footer__posts-item-date">09/21/2022</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="footer__contact">
        <h2 className="footer__contact-header">CONTACT US</h2>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a className="footer__list-item--link" href="mailto: #">
              coffee@coffeeshop.com
            </a>
          </li>
          <li className="footer__list-item">+1-(123)-4567</li>
          <li className="footer__list-item">123 st. Toronto, ON</li>
        </ul>
      </div>
    </div>
  );
}
