import "./Header.scss";
import coffeeshoplogo from "../../Data/imgs/logo.png";
import facebook from "../../Data/imgs/square-facebook.svg";
import twitter from "../../Data/imgs/twitter.svg";
import instagram from "../../Data/imgs/instagram.svg";
import shoppingCart from "../../Data/imgs/shoppingCart2.png";

import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

export default function Header({ handleModal, menuBtnScroll }) {
  const [headerState, setHeaderState] = useState(false);
  const navigate = useNavigate();
  let location = useLocation();
  const totalQuantity = useSelector((state) => state.ui.totalQuantity);

  const all = useSelector((state) => state.ui);
  console.log(all);
  // If on different page, route to homepage and then scroll to menu
  const headerRouteChange = () => {
    let path = "/#menuId";

    if (location.hash !== path) {
      navigate(path);
      setTimeout(() => {
        menuBtnScroll();
      }, 500);
    }
    // if (location.pathname !== path)
    else {
      menuBtnScroll();
    }

    console.log(location);
  };

  // change header background when user scrolls a distance
  const changeBackground = () => {
    if (window.scrollY > 200) {
      setHeaderState(true);
    } else {
      setHeaderState(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div className={!headerState ? "header" : "header--scroll"}>
      <div className="header__logo">
        <Link to="/">
          <img className="header__logo-img" src={coffeeshoplogo} alt="logo"></img>
        </Link>
      </div>

      <div className="header__menu">
        <div className="header__menu-item">
          <Link to="/">
            {" "}
            <span className="header__menu-item--anim">HOME</span>
          </Link>
        </div>

        <div onClick={() => headerRouteChange()} className="header__menu-item">
          <span className="header__menu-item--anim">MENU</span>
        </div>
        <div className="header__menu-item">
          <Link to="/blog/nv6lvipxkg">
            <span className="header__menu-item--anim">BLOG</span>
          </Link>
        </div>
        <div className="header__menu-item">
          <Link to="/shop">
            <span className="header__menu-item--anim">SHOP</span>
          </Link>
        </div>
        <div className="header__menu-item-cart">
          {
            <Link className="header__menu-item-cart--anim-link" to="/cart">
              <span className="header__menu-item-cart--anim">
                <img className="header__menu-item-cart-icon" src={shoppingCart} alt="shopping cart"></img>
              </span>
            </Link>
          }
          <div className="header__menu-item-cart-total">{totalQuantity}</div>
        </div>
        <div className="header__menu-item">|</div>
        <div className="header__menu-item">
          <span className="header__menu-item--anim">
            <img className="header__menu-img" src={facebook} alt="facebook" />
          </span>
        </div>
        <div className="header__menu-item">
          <span className="header__menu-item--anim">
            <img className="header__menu-img" src={twitter} alt="twitter" />
          </span>
        </div>
        <div className="header__menu-item">
          <span className="header__menu-item--anim">
            <img className="header__menu-img" src={instagram} alt="instagram" />
          </span>
        </div>
      </div>

      <div className="header__mobile-nav">
        <Link className="header__mobile-nav-link" to="/cart">
          <div className="header__mobile-cart">
            {<img className="header__mobile-cart-icon" src={shoppingCart} alt="shopping cart"></img>}
            <div className="header__mobile-cart-total">{totalQuantity}</div>
          </div>
        </Link>
        <div onClick={() => handleModal()} className="header__ham-menu">
          <div className="header__top-line"></div>
          <div className="header__mid-line"></div>
          <div className="header__btm-line"></div>
        </div>
      </div>
    </div>
  );
}
