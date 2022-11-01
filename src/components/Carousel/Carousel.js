import image1 from "../../Data/imgs/brooke-cagle-8jp-6SjVibM-unsplash.jpg";
import image2 from "../../Data/imgs/nathan-dumlao-6VhPY27jdps-unsplash.jpg";
import image3 from "../../Data/imgs/vanna-phon-z0ZS66UMCKY-unsplash.jpg";
import logo from "../../Data/imgs/coffeeshop4.png";
import "./Carousel.scss";

import { useState, useEffect } from "react";

const slideData = [
  {
    id: 0,
    image: image1,
    Logo: logo,
    maintext1: "ROASTED TO",
    maintext2: "PERFECTION",
    subtext:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptates, facilis?",
  },
  {
    id: 1,
    image: image2,
    Logo: logo,
    maintext1: "ONLY THE",
    maintext2: "FINEST BEANS",
    subtext:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptates, facilis?",
  },
  {
    id: 2,
    image: image3,
    Logo: logo,
    maintext1: "COME TO",
    maintext2: "SIT & UNWIND",
    subtext:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptates, facilis?",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [logo, setLogo] = useState("carousel__logo--anim");
  const [animation, setAnimation] = useState("carousel__main-text--anim");
  const [subTextAnimation, setSubTextAnimation] = useState(
    "carousel__sub-text--anim"
  );
  const [btnAnimation, setBtnAnimation] = useState("carousel__btn--anim");

  // State handler functions, Carousel scroll func.
  const stateReset = () => {
    return (
      setLogo("carousel__logo"),
      setAnimation("carousel__main-text"),
      setSubTextAnimation("carousel__sub-text"),
      setBtnAnimation("carousel__btn")
    );
  };

  const handleAnimTimeOutIndexReset = () => {
    return (
      setTimeout(() => {
        setLogo("carousel__logo--anim");
        setAnimation("carousel__main-text--anim");
        setSubTextAnimation("carousel__sub-text--anim");
        setBtnAnimation("carousel__btn--anim");
      }, 500),
      setTimeout(() => stateReset(), 4900)
    );
  };

  const carouselScroll = () => {
    if (index === slideData.length - 1) {
      return setIndex(0), handleAnimTimeOutIndexReset();
    }
    return setIndex(index + 1), handleAnimTimeOutIndexReset();
  };

  const handleIndexBtn = (index) => {
    clearTimeout(handleAnimTimeOutIndexReset);
    setIndex(index);
    stateReset();
    handleAnimTimeOutIndexReset();
  };

  useEffect(() => {
    handleAnimTimeOutIndexReset();
    const interval = setInterval(() => {
      carouselScroll();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <div className="carousel">
      {slideData.map((el, i) => {
        return (
          <div
            className="carousel__main-container"
            style={{
              background: `url(${el.image}) center / cover no-repeat`,
              transform: `translate(-${index * 100}%)`,
            }}
            key={el.id}
          >
            <div className="carousel__text-container">
              <img className={logo} src={el.Logo} alt="coffee shop logo" />

              <div key={el.id} className={animation}>
                {el.maintext1} <p>{el.maintext2}</p>
              </div>

              <div className={subTextAnimation}>{el.subtext}</div>
              <button className={btnAnimation}>READ MORE</button>
            </div>
          </div>
        );
      })}
      <div className="carousel__dot-container">
        <div
          onClick={() => handleIndexBtn(0)}
          className={index === 0 ? "carousel__dot--active" : "carousel__dot"}
        ></div>
        <div
          onClick={() => {
            handleIndexBtn(1);
          }}
          className={index === 1 ? "carousel__dot--active" : "carousel__dot"}
        ></div>
        <div
          onClick={() => handleIndexBtn(2)}
          className={index === 2 ? "carousel__dot--active" : "carousel__dot"}
        ></div>
      </div>
    </div>
  );
}
