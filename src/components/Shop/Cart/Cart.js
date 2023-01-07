import React from "react";
import "./Cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { storeActions } from "../../../store/storeIndex";
import { useState } from "react";

export default function Cart() {
  const item = useSelector((state) => state.ui.item);
  const [itemId, setItemId] = useState(null);
  const dispatch = useDispatch();
  console.log(item);
  return (
    <div className="cart">
      <h1 className="cart__header">CART</h1>
      <div className="cart__cart-container">
        <div className="cart__cart-headers">
          <div className="cart__cart-product">Product</div>
          <div className="cart__cart-price">Price</div>
          <div className="cart__cart-quantity">Quantity</div>
          <div className="cart__cart-subtotal">Subtotal</div>
        </div>
        <div className="cart__cart-items">
          {item.map((el) => {
            return (
              <div className="cart__item-cont">
                <div onClick={() => dispatch(storeActions.removeItemFromCart(el.id))} className="cart__cart-item-close">
                  {console.log(el.id)}X
                </div>
                <div className="cart__cart-item-name">{el.name}</div>
                <div className="cart__cart-item-price">{el.price}</div>
                <div className="cart__cart-item-quantity">{el.quantity}</div>
                <div className="cart__cart-item-total">{el.totalPrice}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
