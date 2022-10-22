import image1 from "../../Data/imgs/brooke-cagle-8jp-6SjVibM-unsplash.jpg";
import image2 from "../../Data/imgs/pexels-lisa-fotios-1524335.jpg";
import image3 from "../../Data/imgs/vanna-phon-z0ZS66UMCKY-unsplash.jpg";
import "./Carousel.scss";

import { useState, useEffect } from "react";

const slideData = [
  {
    id: 0,
    image: image1,
    maintext: "ROASTED TO",
    subtext:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptates, facilis?",
  },
  {
    id: 1,
    image: image2,
    maintext: "ONLY THE FINEST BEANS",
    subtext:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptates, facilis?",
  },
  {
    id: 2,
    image: image3,
    maintext: "THE BEST PLACE TO UNWIND",
    subtext:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptates, facilis?",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  let carouselScroll = () => {
    console.log(index);
    if (index === slideData.length - 1) {
      return setIndex(0);
    }

    return setIndex(index + 1);
  };
  console.log(index);

  useEffect(() => {
    const interval = setInterval(() => {
      carouselScroll();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  });

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
            key={i}
          >
            <div className="carousel__text-container">
              <div className={`carousel__main-text-${i}`}>{el.maintext}</div>
              <div className="carousel__sub-text">{el.subtext}</div>
              <button className="carousel__btn">READ MORE</button>
            </div>
          </div>
        );
      })}
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
