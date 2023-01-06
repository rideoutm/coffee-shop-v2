import "./Shop.scss";
import frenchpress from "../../Data/imgs/frenchpress.jpg";
import coffeepods from "../../Data/imgs/coffeepods.jpg";
import coffeepods2 from "../../Data/imgs/coffeepods2.jpg";
import cup from "../../Data/imgs/cup.jpg";

import ShopItem from "./ShopItem/ShopItem";

const ShopData = [
  {
    id: 1,
    image: frenchpress,
    name: "FRENCH PRESS",
    price: 19.99,
  },
  { id: 2, image: coffeepods, name: "DARK BLEND COFFEE PODS, 20pc", price: 15.99 },
  {
    id: 3,
    image: coffeepods2,
    name: "LIGHT BLEND COFFEE PODS, 20pc",
    price: 15.99,
  },
  {
    id: 4,
    image: cup,
    name: "CERAMIC COFFEE CUP",
    price: 12.99,
  },
];

export default function Shop() {
  return (
    <div className="shop">
      <h1 className="shop__header">SHOP</h1>
      <div className="shop__item-container">
        {/* <h2 className="shop__header">Coming Soon</h2> */}
        {ShopData.map((item) => {
          return <ShopItem key={item.id} image={item.image} name={item.name} price={item.price} id={item.id} />;
        })}
      </div>
    </div>
  );
}
