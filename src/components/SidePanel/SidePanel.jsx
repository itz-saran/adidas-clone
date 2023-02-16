import React, { useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BiRuler, BiBox } from "react-icons/bi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { GrAlert } from "react-icons/gr";

import { throttle } from "../../assets/helpers/helper";
import Size from "../Size/Size";
import ButtonOutline from "../ButtonOutline/ButtonOutline";

import "./SidePanel.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import Price from "../Price/Price";
import Callout from "../Callout/Callout";
import { removeFromWishlist } from "../../redux/wishlistSlice";

export const SidePanel = ({ headerRef, showcaseRef }) => {
  const productData = useSelector((state) => state.product);
  const dispatch = useDispatch();
  let { wishlist } = useSelector((state) => state.wishlist);
  wishlist = wishlist.map((item) => item.SKU);
  const { category, review } = productData.product;
  const { price, discount } = productData.currentShowcase;
  const panelRef = useRef();
  const marginRef = useRef();
  const freeShipRef = useRef();

  const getMarginLimit = useCallback(() => {
    const panelRemainingHeight =
      panelRef.current?.offsetHeight - window.innerHeight;
    const marginMax =
      showcaseRef.current?.offsetHeight -
      window.innerHeight -
      panelRemainingHeight +
      2;
    const marginTop =
      window.scrollY - (panelRemainingHeight + headerRef.current?.offsetHeight);
    const marginLimit =
      marginTop > 0 ? (marginTop <= marginMax ? marginTop : marginMax) : 0;
    return { panelRemainingHeight, marginLimit };
  }, [headerRef, showcaseRef]);

  let prev = useRef(0);
  const setScrollStick = useCallback(() => {
    const { panelRemainingHeight, marginLimit } = getMarginLimit();

    if (window.scrollY < prev.current) {
      panelRef.current.style.removeProperty("top");
      panelRef.current.style.cssText = `bottom: -${panelRemainingHeight}px`;
    } else {
      marginRef.current.style.marginTop = `${marginLimit}px`;
      panelRef.current.style.cssText = `top: -${panelRemainingHeight}px`;
    }
    prev.current = window.scrollY;
  }, [getMarginLimit]);

  const throttledScroll = throttle(setScrollStick, 5);

  useEffect(() => {
    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [throttledScroll]);

  return (
    <div className="panel-container visible-l">
      <div className="margin" ref={marginRef}></div>
      <div className="panel-wrapper" ref={panelRef}>
        <div className="details-panel f-regular">
          <div className="pre-header flex">
            <div className="product-category">
              {category ? category.join(" • ") : ""}
            </div>
            <div className="rating">{review ? review.count : ""}</div>
          </div>
          <div className="product-title f-italic title-xl">FORUM LOW SHOES</div>
          <div className="product-info">
            <div className="price-info">
              MRP in Indian currency: <br />
              <Price price={price} discount={discount} />
              (Inclusive of all taxes)
            </div>
            <div className="product-color">
              {productData.currentShowcase.color}
            </div>
          </div>
          <Size sizes={productData.currentShowcase.sizes} />
          <Link to="/size-guide">
            <span className="size-guide">
              <BiRuler /> Size guide
            </span>
          </Link>
          <div className="add-to-bag flex">
            <ButtonOutline
              onClick={() => {
                dispatch(
                  addToCart({
                    product: productData.currentShowcase,
                    size: productData.selectedSize,
                    qty: 1,
                  })
                );
              }}
              bold
              theme="black"
              fullwidth
              title="ADD TO BAG"
              to="/cart"
            />
            <div className="wishlist-btn flex-center">
              <button
                className="btn btn-wishlist icon"
                onClick={() => dispatch(removeFromWishlist(productData))}
              >
                {wishlist.indexOf(productData.currentShowcase.SKU) >= 0 ? (
                  <FaHeart />
                ) : (
                  <FaRegHeart />
                )}
              </button>
            </div>
          </div>
          <div className="selling-points">
            <div className="flex">
              <GrAlert />{" "}
              <button
                className="btn f-regular"
                onClick={() => {
                  freeShipRef.current.setIsOpen(true);
                }}
              >
                FREE SHIPPING FOR ALL ORDERS
              </button>
              <Callout title={"FREE SHIPPING FOR ALL ORDERS"} ref={freeShipRef}>
                <div className="vspace-xs f-regular">
                  For all orders, shipping is offered for free.
                </div>
                <div className="vspace-xs f-regular">
                  Check out our delivery{" "}
                  <span className="text-underline">
                    <Link to="/terms-and-conditions/delivery">
                      Terms and conditions
                    </Link>
                  </span>{" "}
                  for more details.
                </div>
              </Callout>
            </div>
            <div className="flex">
              <BiBox />
              <button className="btn f-regular">FREE RETURNS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SidePanel;
