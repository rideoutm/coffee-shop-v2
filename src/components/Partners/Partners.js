import "./Partners.scss";
import awakeCoffee from "../../Data/imgs/AwakeCoffee.svg";
import barcelle from "../../Data/imgs/barcelle.svg";
import coffeeBean from "../../Data/imgs/coffeeBean.svg";
import expressCoffee from "../../Data/imgs/expresscoffee.svg";
import freshRoasted from "../../Data/imgs/freshRoasted.svg";
import coffeeshop2012 from "../../Data/imgs/coffeeShop2012.svg";

const imageData = [
  {
    image: awakeCoffee,
    alt: "partner logo one",
  },
  {
    image: barcelle,
    alt: "partner logo two",
  },
  {
    image: coffeeBean,
    alt: "partner logo three",
  },
  {
    image: expressCoffee,
    alt: "partner logo four",
  },
  {
    image: freshRoasted,
    alt: "partner logo five",
  },
  {
    image: awakeCoffee,
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
      {imageData.map((el) => {
        return (
          <div>
            <img className="partners__logo" src={el.image} alt={el.alt} />
          </div>
        );
      })}
      <div className="partners__right"></div>
    </div>
  );
}
