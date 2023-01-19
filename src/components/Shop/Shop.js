import "./Shop.scss";
import frenchpress from "../../Data/imgs/frenchpress.jpg";
import coffeepods from "../../Data/imgs/coffeepods.jpg";
import coffeepods2 from "../../Data/imgs/coffeepods2.jpg";
import cup from "../../Data/imgs/cup.jpg";
import metalMixingCup from "../../Data/imgs/metalpour.jpg";
import mottaTamper from "../../Data/imgs/MottaFlashTamper_800x800.jpg";

import ShopItem from "./ShopItem/ShopItem";

const ShopData = [
  {
    id: "1a",
    image: frenchpress,
    name: "FRENCH PRESS",
    price: 19.99,
  },
  { id: "2b", image: coffeepods, name: "DARK BLEND COFFEE PODS, 20pc", price: 15.99 },
  {
    id: "3c",
    image: coffeepods2,
    name: "LIGHT BLEND COFFEE PODS, 20pc",
    price: 15.99,
  },
  {
    id: "4d",
    image: cup,
    name: "CERAMIC COFFEE CUP",
    price: 12.99,
  },
  {
    id: "5c",
    image: metalMixingCup,
    name: "METAL MIXING CUP",
    price: 21.99,
  },
  {
    id: "6d",
    image: mottaTamper,
    name: "MOTTA ESPRESSO TAMPER",
    price: 32.99,
  },
];

export default function Shop() {
  return (
    <div className="shop">
      <div className="shop__left">
        <h1 className="shop__header">SHOP</h1>
        <div className="shop__item-container">
          {ShopData.map((item) => {
            return <ShopItem key={item.id} image={item.image} name={item.name} price={item.price} id={item.id} />;
          })}
        </div>
      </div>
      <div className="shop__right">
        <div className="shop__right-categories">
          <h2 className="shop__right-categories-header">PRODUCT CATEGORIES</h2>
          <ul className="shop__right-categories-list">
            <li className="shop__right-categories-list-item">Accessories</li>
            <li className="shop__right-categories-list-item">Coffee Cups</li>
            <li className="shop__right-categories-list-item">Coffee Pods</li>
            <li className="shop__right-categories-list-item">Espresso Machines</li>
          </ul>
        </div>
        <div className="shop__right-product-tags">
          <h2 className="shop__right-product-header">PRODUCT TAGS</h2>
          <p className="shop__right-product-tags-list">Accessories, Beans, Coffee, Flavour</p>{" "}
        </div>
        <div className="shop__right-top-products">
          <h2 className="shop__right-top-products-header">TOP PRODUCTS</h2>
          <ul className="shop__right-top-products-list">
            {ShopData.map((el, i) => {
              if (i < 3)
                return (
                  <li className="shop__right-top-products-list-item">
                    <div className="shop__right-product-item">
                      <div className="shop__right-product-cont">
                        <img className="shop__right-product-img" src={el.image} alt={el.name} />
                      </div>
                      <div>
                        <h3 className="shop__right-product-name">{el.name}</h3>
                        <p className="shop__right-product-price">{el.price}</p>
                      </div>
                    </div>
                  </li>
                );
            })}
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
