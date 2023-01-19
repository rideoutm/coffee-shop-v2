import React from "react";
import { storeActions } from "../../../store/storeIndex";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function ShopItem({ name, image, price, id }) {
  const dispatch = useDispatch();
  const [showBtn, setShowBtn] = useState(false);
  console.log(showBtn);
  return (
    <div onMouseOut={() => setShowBtn(false)} onMouseOver={() => setShowBtn(true)} className="shop__item-cont">
      <div className="shop__item-img">
        <div className="shop__sub-cont">
          <img className="shop__item-img-icon" src={image} alt={`image of ${name}`} />
          <div
            onClick={() =>
              dispatch(
                storeActions.addItemToCart({ id: id, price: price, totalPrice: price, name: name, image: image })
              )
            }
            className={showBtn ? "shop__add-to-cart" : "shop__add-to-cart--hidden"}
          >
            Add To Cart
          </div>
        </div>
        <div className="shop__item-name">{name}</div>
      </div>
      <div className="shop__item-price">{`$${price}`}</div>
    </div>
  );
}
