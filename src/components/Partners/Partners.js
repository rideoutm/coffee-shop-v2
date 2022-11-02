import "./Partners.scss";
import awakeCoffee from "../../Data/imgs/AwakeCoffee.svg";
import barcelle from "../../Data/imgs/barcelle.svg";
import coffeeBean from "../../Data/imgs/coffeeBean.svg";
import expressCoffee from "../../Data/imgs/expresscoffee.svg";
import freshRoasted from "../../Data/imgs/freshRoasted.svg";
import coffeeshop2012 from "../../Data/imgs/coffeesShop2012.svg";

const imageData = [
  {
    id: 0,
    image: awakeCoffee,
    alt: "partner logo one",
  },
  {
    id: 1,
    image: barcelle,
    alt: "partner logo two",
  },
  {
    id: 2,
    image: coffeeBean,
    alt: "partner logo three",
  },
  {
    id: 3,
    image: expressCoffee,
    alt: "partner logo four",
  },
  {
    id: 4,
    image: freshRoasted,
    alt: "partner logo five",
  },
  {
    id: 5,
    image: coffeeshop2012,
    alt: "partner logo six",
  },
];

export default function Partners() {
  return (
    <div className="partners">
      <div className="partners__left">
        <h3 className="partners__left-sub-heading">Our</h3>
        <h2 className="partners__left-heading">PARTNERS</h2>
        <div className="partners__left-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi totam
          labore culpa rerum quae! Vitae obcaecati distinctio labore repellat
          earum.
        </div>
      </div>
      <div className="partners__right">
        <div className="partners__right-top">
          {imageData.map((el, i) => {
            if (i < 3) {
              return (
                <div className="partners__right-top-cont" key={el.id}>
                  <img className="partners__logo" src={el.image} alt={el.alt} />
                </div>
              );
            }
          })}
        </div>
        <div className="partners__right-bottom">
          {imageData.map((el, i) => {
            if (i >= 3) {
              return (
                <div className="partners__right-bottom-cont" key={el.id}>
                  <img className="partners__logo" src={el.image} alt={el.alt} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
