import React from "react";
import { MdClose } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Price from "../Price/Price";

import "./CartItem.scss";
import Dropdown from "../Dropdown/Dropdown";
import { changeQuantity, removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../redux/wishlistSlice";

const CartItem = ({ cartItem, inWishlist }) => {
  const dispatch = useDispatch();
  const { product, size, qty } = cartItem;
  const {
    images: { showcase },
    price,
    discount,
    color,
    sizes,
  } = product;
  const stock = 5;
  // sizes.find((sizeObj) => sizeObj.size === size).stock
  return (
    <div className="cart-item cart-item__container vspace-m flex">
      <img
        src={showcase[0].src}
        alt=""
        className="cart-item__thumbnail col-s-5"
      />
      <div className="cart-item__details flex-column offset-l-1">
        <div className="cart-item__header row f-regular">
          <div className="flex-grow-100">
            <div className="row flex-between">
              <div className="cart-item__title">{product.name}</div>
              <div className="cart-item__price">
                <Price price={price} discount={discount} />
              </div>
            </div>
            <div className="row">
              <div className="cart-item__color">{color}</div>
            </div>
            <div className="cart-item__attributes vspace-xs">
              <div className="cart-item__size">Size:&nbsp;{size}</div>
              {stock < 10 && stock > 1 ? (
                <div className="cart-item__stock f-bold">Low in stock</div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="cart-item__actions flex-column">
            <button
              type="button"
              className="btn btn-remove-item icon"
              onClick={() => dispatch(removeFromCart({ product, size }))}
            >
              <MdClose />
            </button>
            <button
              type="button"
              className="btn btn-wishlist icon"
              onClick={() => {
                dispatch(addToWishlist(product));
                dispatch(removeFromCart({ product, size }));
              }}
            >
              {inWishlist ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
        </div>
        <div className="cart-item__footer">
          <Dropdown
            selectedIdx={qty - 1}
            options={[...Array(stock >= 10 ? 10 : stock).keys()].map(
              (x) => ++x
            )}
            onClick={(e) => {
              dispatch(
                changeQuantity({
                  product,
                  size,
                  qty: parseInt(e.target.dataset.value),
                })
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
