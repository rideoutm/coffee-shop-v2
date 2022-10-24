import image1 from "../../Data/imgs/brooke-cagle-8jp-6SjVibM-unsplash.jpg";
import image2 from "../../Data/imgs/pexels-lisa-fotios-1524335.jpg";
import image3 from "../../Data/imgs/vanna-phon-z0ZS66UMCKY-unsplash.jpg";
import "./Carousel.scss";

import { useState, useEffect } from "react";

const slideData = [
  {
    id: 0,
    image: image1,
    maintext1: "ROASTED TO",
    maintext2: "PERFECTION",
    subtext:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptates, facilis?",
  },
  {
    id: 1,
    image: image2,
    maintext1: "ONLY THE",
    maintext2: "FINEST BEANS",
    subtext:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptates, facilis?",
  },
  {
    id: 2,
    image: image3,
    maintext1: "COME TO",
    maintext2: "SIT & UNWIND",
    subtext:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptates, facilis?",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [animation, setAnimation] = useState("carousel__main-text--anim");
  const [subTextAnimation, setSubTextAnimation] = useState(
    "carousel__sub-text--anim"
  );
  const [btnAnimation, setBtnAnimation] = useState("carousel__btn--anim");

  let carouselScroll = () => {
    console.log(index);
    if (index === slideData.length - 1) {
      return (
        setIndex(0),
        setTimeout(() => {
          setAnimation("carousel__main-text--anim");
          setSubTextAnimation("carousel__sub-text--anim");
          setBtnAnimation("carousel__btn--anim");
        }, 500),
        setTimeout(() => {
          setAnimation("carousel__main-text");
          setSubTextAnimation("carousel__sub-text");
          setBtnAnimation("carousel__btn");
        }, 5000)
      );
    }

    return (
      setIndex(index + 1),
      setTimeout(() => {
        setAnimation("carousel__main-text--anim");
        setSubTextAnimation("carousel__sub-text--anim");
        setBtnAnimation("carousel__btn--anim");
      }, 500),
      setTimeout(() => {
        setAnimation("carousel__main-text");
        setSubTextAnimation("carousel__sub-text");
        setBtnAnimation("carousel__btn");
      }, 6900)
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselScroll();
    }, 7000);

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
          onClick={() => setIndex(0)}
          className={index === 0 ? "carousel__dot--active" : "carousel__dot"}
        ></div>
        <div
          onClick={() => {
            setIndex(1);
            setAnimation(animation);
          }}
          className={index === 1 ? "carousel__dot--active" : "carousel__dot"}
        ></div>
        <div
          onClick={() => setIndex(2)}
          className={index === 2 ? "carousel__dot--active" : "carousel__dot"}
        ></div>
      </div>
    </div>

    // <div className="carousel">
    //   {slideData.map((el, i) => {
    //     return (
    //       <div
    //         key={el.id}
    //         className={`carousel__img-${i}`}
    //         style={{
    //           background: `url(${el.image}) center / cover no-repeat`,
    //           height: `100vh`,
    //         }}
    //       >
    //         <div className="carousel__text-container">
    //           <div className="carousel__main-text">{el.maintext}</div>
    //           <div className="carousel__sub-text">{el.subtext}</div>
    //           <button className="carousel__btn">READ MORE</button>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>
  );
}
