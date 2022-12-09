import React, { useRef } from "react";
import { FaHeart } from "react-icons/fa";
import Price from "../Price/Price";

import "./WishlistItem.scss";

const WishlistItem = ({ wishlistItem, className }) => {
  const priceRef = useRef();
  const { images, price, discount, name } = wishlistItem;
  return (
    <div
      className={`wishlist-item f-regular ${className}`}
      onMouseEnter={() =>
        (priceRef.current.style.transform = "translateY(-10px)")
      }
      onMouseLeave={() =>
        (priceRef.current.style.transform = "translateY(0px)")
      }
    >
      <div className="wishlist-item--hover">
        <div className="wishlist-image__container">
          <img src={images.showcase[0].src} alt="" className="wishlist-image" />
          <div className="wishlist-item__price">
            <Price price={price} discount={discount} ref={priceRef} />
          </div>
          <div className="wishlist__btn icon">
            <FaHeart />
          </div>
        </div>
        <div className="wishlist-item__name">{name}</div>
      </div>
    </div>
  );
};

export default WishlistItem;
