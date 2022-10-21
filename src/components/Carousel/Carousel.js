import React from "react";
import image1 from "../../Data/imgs/brooke-cagle-8jp-6SjVibM-unsplash.jpg";
import image2 from "../../Data/imgs/pexels-lisa-fotios-1524335.jpg";
import image3 from "../../Data/imgs/vanna-phon-z0ZS66UMCKY-unsplash.jpg";
import "./Carousel.scss";

const slideData = [
  {
    id: 1,
    image: image1,
    maintext: "ROASTED TO PERFECTION",
    subtext:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptates, facilis?",
  },
  {
    id: 2,
    image: image2,
    maintext: "ONLY THE FINEST SELECTION",
    subtext:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptates, facilis?",
  },
  {
    id: 3,
    image: image3,
    maintext: "THE BEST PLACE TO UNWIND",
    subtext:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptates, facilis?",
  },
];

export default function Carousel() {
  return (
    <div className="carousel">
      {slideData.map((el, i) => {
        return (
          <div
            key={el.id}
            className={`carousel__img-${i}`}
            style={{
              background: `url(${el.image}) center / cover no-repeat`,
              height: `100vh`,
            }}
          >
            <div className="carousel__text-container">
              <div className="carousel__main-text">{el.maintext}</div>
              <div className="carousel__sub-text">{el.subtext}</div>
              <button className="carousel__btn">READ MORE</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
