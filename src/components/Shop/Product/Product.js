import React from "react";
import "./Product.scss";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { storeActions } from "../../../store/storeIndex";
import { useDispatch } from "react-redux";

export default function Product({ ShopData }) {
  const dispatch = useDispatch();

  const { productId } = useParams();
  let productArray = ShopData.filter((el) => el.id === productId);
  const [showDesc, setShowDesc] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  console.log(productArray);
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
        <img className="product__main-img-img" src={productArray[0].image} alt="coffee pods" />
      </div>
      <div className="product__right">
        <h2 className="product__title">{productArray[0].name}</h2>
        <h3 className="product__price">{`$${productArray[0].price}`}</h3>
        <div className="product__description">{productArray[0].introText}</div>

        {/* <div className="cart__cart-item-quantity">
          0 <button className="cart__cart-item-increment">+</button>
          <button className="cart__cart-item-decrement">-</button>
        </div> */}
        <button
          onClick={() =>
            dispatch(
              storeActions.addItemToCart({
                id: productArray[0].id,
                price: productArray[0].price,
                totalPrice: productArray[0].price,
                name: productArray[0].name,
                image: productArray[0].image,
              })
            )
          }
          className="product__add-to-cart"
        >
          ADD TO CART
        </button>

        <div className="product__details">
          <p className="product__details-item">
            <span className="product__details--bold">SKU: </span> {productArray[0].sku}
          </p>
          <p className="product__details-item">
            <span className="product__details--bold">CATEGORY: </span>
            {productArray[0].category}
          </p>
          <p className="product__details-item">
            <span className="product__details--bold">TAGS: </span>
            {productArray[0].tags}
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
            <p className={showDesc ? "product__expanded-desc-inner" : "product__expanded-desc-inner--closed"}>
              {" "}
              {productArray[0].description}
            </p>
          </div>
          <div
            onClick={() => handleInfo()}
            className={showInfo ? "product__expanded-more" : "product__expanded-more-closed"}
          >
            MORE INFORMATION
          </div>
          <div className={showInfo ? "product__expanded-more-info" : "product__expanded-more-info-closed"}>
            <p className={showInfo ? "product__expanded-more-info-inner" : "product__expanded-more-info-inner--closed"}>
              <span className="product__expanded--bold">Weight: </span>
              {productArray[0].moreInfo.weight}
            </p>
            <p className={showInfo ? "product__expanded-more-info-inner" : "product__expanded-more-info-inner--closed"}>
              <span className="product__expanded--bold">Dimensions: </span>
              {productArray[0].moreInfo.dimensions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
