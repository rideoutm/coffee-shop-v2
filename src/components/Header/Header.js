import "./Header.scss";
import coffeeshoplogo from "../../Data/imgs/logo.png";
import facebook from "../../Data/imgs/square-facebook.svg";
import twitter from "../../Data/imgs/twitter.svg";
import instagram from "../../Data/imgs/instagram.svg";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header({ handleModal, menuRef }) {
  const [headerState, setHeaderState] = useState(false);

  const menuBtnScroll = () => {
    menuRef.current.scrollIntoView({ behavior: "smooth" });
  };

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
          <img src={coffeeshoplogo} alt="logo"></img>
        </Link>
      </div>

      <div className="header__menu">
        <div className="header__menu-item">
          <Link to="/">
            {" "}
            <span className="header__menu-item--anim">HOME</span>
          </Link>
        </div>

        <div onClick={() => menuBtnScroll()} className="header__menu-item">
          <span className="header__menu-item--anim">MENU</span>
        </div>
        <div className="header__menu-item">
          <Link to="/blog/nv6lvipxkg">
            <span className="header__menu-item--anim">BLOG</span>
          </Link>
        </div>
        <div className="header__menu-item">
          <span className="header__menu-item--anim">SHOP</span>
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
      <div onClick={() => handleModal()} className="header__ham-menu">
        <div className="header__top-line"></div>
        <div className="header__mid-line"></div>
        <div className="header__btm-line"></div>
      </div>
    </div>
  );
}
