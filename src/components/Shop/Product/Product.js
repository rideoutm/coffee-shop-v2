import React from "react";
import "./Product.scss";
import coffeePods from "../../../Data/imgs/coffeepods.jpg";

import { useState } from "react";
import { storeActions } from "../../../store/storeIndex";
import { useDispatch } from "react-redux";

export default function Product() {
  const dispatch = useDispatch();
  const [showDesc, setShowDesc] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleDesc = () => {
    setShowDesc(!showDesc);
    if (showInfo) {
      setShowInfo(false);
    }
  };
  const handleInfo = () => {
    setShowInfo(!showInfo);
    if (showDesc) {
      setShowDesc(false);
    }
  };

  return (
    <div className="product">
      <div className="product__main-img-cont">
        <img className="product__main-img-img" src={coffeePods} alt="coffee pods" />
      </div>
      <h2 className="product__title">COFFEE PODS</h2>
      <h3 className="product__price">$599.99</h3>
      <div className="product__description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora eligendi unde, deleniti distinctio adipisci
        harum possimus quo illo, minima voluptatem porro asperiores veniam ducimus aspernatur.
      </div>
      <button onClick={() => dispatch(storeActions.addItemToCart())} className="product__add-to-cart">
        ADD TO CART
      </button>

      <div className="product__details">
        <p className="product__details-item">
          <span className="product__details--bold">SKU: </span> AB131-1
        </p>
        <p className="product__details-item">
          <span className="product__details--bold">CATEGORY: </span>Coffee Pods
        </p>
        <p className="product__details-item">
          <span className="product__details--bold">SHARE: </span>
        </p>
      </div>
      <div className="product__expanded-info">
        <div
          onClick={() => handleDesc()}
          className={showDesc ? "product__expanded-desc" : "product__expanded-desc-closed"}
        >
          DESCRIPTION
        </div>
        <div className={showDesc ? "product__expanded-desc-info" : "product__expanded-desc-info-closed"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet libero quaerat nihil? Facere beatae quia cumque
          labore quos blanditiis molestiae!
        </div>
        <div
          onClick={() => handleInfo()}
          className={showInfo ? "product__expanded-more" : "product__expanded-more-closed"}
        >
          MORE INFORMATION
        </div>
        <div className={showInfo ? "product__expanded-more-info" : "product__expanded-more-info-closed"}>
          Quantity: 20 pods per set.
        </div>
      </div>
    </div>
  );
}
