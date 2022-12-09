import React, { useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BiRuler, BiBox } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { GrAlert } from "react-icons/gr";

import { throttle } from "../../assets/helpers/helper";
import Size from "../Size/Size";
import ButtonOutline from "../ButtonOutline/ButtonOutline";

import "./SidePanel.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import Price from "../Price/Price";

export const SidePanel = ({ headerRef, showcaseRef }) => {
  const productData = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { category, review } = productData.product;
  const { price, discount } = productData.currentShowcase;
  const panelRef = useRef();
  const marginRef = useRef();
  const setScrollStick = useCallback(() => {
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

    panelRef.current.style.cssText = `top: -${panelRemainingHeight}px`;
    marginRef.current.style.marginTop = `${marginLimit}px`;
  }, [headerRef, showcaseRef]);

  const throttledScroll = throttle(setScrollStick, 10);

  // useEffect(() => {
  //   window.addEventListener("scroll", throttledScroll);
  //   return () => window.removeEventListener("scroll", throttledScroll);
  // }, [throttledScroll]);

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
              <Link>
                <FaRegHeart />
              </Link>
            </div>
          </div>
          <div className="selling-points">
            <div className="flex">
              <GrAlert /> <Link>FREE SHIPPING FOR ALL ORDERS</Link>
            </div>
            <div className="flex">
              <BiBox /> <Link>FREE RETURNS</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SidePanel;
