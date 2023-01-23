import "./Shop.scss";

import ShopItem from "./ShopItem/ShopItem";
import { useNavigate } from "react-router-dom";

export default function Shop({ ShopData }) {
  const navigate = useNavigate();
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
                  <li onClick={() => navigate(`/product/${el.id}`)} className="shop__right-top-products-list-item">
                    <div className="shop__right-product-item">
                      <div className="shop__right-product-cont">
                        <img className="shop__right-product-img" src={el.image} alt={el.name} />
                      </div>
                      <div>
                        <h3 className="shop__right-product-name">{el.name}</h3>
                        <p className="shop__right-product-price">${el.price}</p>
                      </div>
                    </div>
                  </li>
                );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
