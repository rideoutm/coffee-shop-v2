import "./Header.scss";
import coffeeshoplogo from "../../Data/imgs/COFFEESHOPLOGO2.png";

import { useState, useEffect } from "react";

export default function Header({ handleModal }) {
  const [headerState, setHeaderState] = useState(false);

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
        <img src={coffeeshoplogo} alt="logo"></img>
      </div>
      <div onClick={() => handleModal()} className="header__ham-menu">
        <div className="header__top-line"></div>
        <div className="header__mid-line"></div>
        <div className="header__btm-line"></div>
      </div>
    </div>
  );
}
