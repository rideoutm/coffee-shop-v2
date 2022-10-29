import "./ReviewCarousel.scss";
import { useState, useEffect } from "react";
import quoteImg from "../../Data/imgs/quote-left-solid.svg";

const reviewSlides = [
  {
    id: 0,
    quoteImg: quoteImg,
    comment:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime exercitationem iusto enim est id vero porro, nihil dolorum pariatur totam et eos nesciunt obcaecati ipsa facere ullam officiis, accusantium dolorem culpa rem tempora, non sit voluptas? Eveniet minus enim doloremque.",
    name: "DANIELLE JANE",
  },
  {
    id: 1,
    quoteImg: quoteImg,
    comment:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime exercitationem iusto enim est id vero porro, nihil dolorum pariatur totam et eos nesciunt obcaecati ipsa facere ullam officiis, accusantium dolorem culpa rem tempora, non sit voluptas? Eveniet minus enim doloremque.",
    name: "KATHERINE JONES",
  },
  {
    id: 2,
    quoteImg: quoteImg,
    comment:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime exercitationem iusto enim est id vero porro, nihil dolorum pariatur totam et eos nesciunt obcaecati ipsa facere ullam officiis, accusantium dolorem culpa rem tempora, non sit voluptas? Eveniet minus enim doloremque.",
    name: "THOMAS SMITH",
  },
];

export default function ReviewCarousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselReviewScroll = () => {
    if (carouselIndex === reviewSlides.length - 1) {
      return setCarouselIndex(0);
    }
    return setCarouselIndex(carouselIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselReviewScroll();
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [carouselIndex]);

  return (
    <div className="review-carousel">
      <div className="review-carousel__header">
        <h2>TESTIMONIALS</h2>
      </div>
      {reviewSlides.map((el) => {
        return (
          <div
            className="review-carousel__main-cont"
            key={el.id}
            style={{ transform: `translate(-${carouselIndex * 100}%)` }}
          >
            <div className="review-carousel__container">
              <div className="review-carousel__quote-img">
                <img src={el.quoteImg} alt="" />
              </div>
              <div className="review-carousel__desc">{el.comment}</div>
              <div className="review-carousel__customer-name">{el.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
