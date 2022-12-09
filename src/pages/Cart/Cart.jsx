import React from "react";
import { useSelector } from "react-redux";
import { toINR } from "../../assets/helpers/helper";
import ButtonOutline from "../../components/ButtonOutline/ButtonOutline";
import Carousel from "../../components/Carousel/Carousel";
import CartItem from "../../components/CartItem/CartItem";
import Header from "../../components/Header/Header";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

import "./Cart.scss";

const Cart = () => {
  const { cart, total, count, discountPrice } = useSelector(
    (state) => state.cart
  );
  let { wishlist } = useSelector((state) => state.wishlist);
  wishlist = wishlist.map((item) => item.SKU);
  const { carousels } = useSelector((state) => state.carousels);

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="row checkout__container">
          {count > 0 ? (
            <main className="col-s-12 col-l-14 col-xl-14 offset-xl-1 f-regular">
              <h1 className="cart-title title-xl f-bold-pro">YOUR BAG</h1>
              <div className="flex">
                <span>TOTAL ({count} item(s)) &nbsp;</span>
                <span className="f-bold">{toINR(total - discountPrice)}</span>
              </div>
              <div className="vspace-s">
                Items in your bag are not reserved — check out now to make them
                yours.
              </div>
              <div className="cart-item-group">
                {cart.map((cartItem, idx) => {
                  const wishListIdx = wishlist.indexOf(cartItem.product.SKU);
                  return (
                    <CartItem
                      cartItem={cartItem}
                      inWishlist={wishListIdx >= 0}
                      key={idx}
                    />
                  );
                })}
              </div>
              <div className="top-picks vspace-m">
                <div className="top-picks__title">
                  <h2 className="title-lg f-bold-pro">TOP PICKS FOR YOU</h2>
                </div>
                <div className="top-picks__recommended">
                  <Carousel products={carousels.arrivals} />
                </div>
              </div>
            </main>
          ) : (
            <main className="col-s-12 col-l-14 col-xl-14 offset-xl-1 f-regular vspace-m">
              <div className="title-xl cart-title f-bold-pro">
                YOUR BAG IS EMPTY
              </div>
              <span className="f-regular">
                Once you add something to your bag - it will appear here. Ready
                to get started?
              </span>
              <div className="vspace-s">
                <ButtonOutline
                  title="GET STARTED"
                  theme="black"
                  width={1}
                  bold
                  to="/"
                />
              </div>
            </main>
          )}
          <OrderSummary />
        </div>
      </div>
    </>
  );
};

export default Cart;
