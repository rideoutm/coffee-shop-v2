import React from "react";
import "./Cart.scss";

export default function Cart() {
  return (
    <div className="cart">
      <h1 className="cart__header">CART</h1>
      <div className="cart__cart-container">
        <div className="cart__cart-headers">
          <div className="cart__cart-product">Product</div>
          <div className="cart__cart-product">Price</div>
          <div className="cart__cart-product">Quantity</div>
          <div className="cart__cart-product">Subtotal</div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
