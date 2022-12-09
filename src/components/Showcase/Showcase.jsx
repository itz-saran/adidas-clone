import React, { forwardRef, useRef, useState } from "react";
import Collage from "../Collage/Collage";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import "./Showcase.scss";
import VariantSelector from "../VariantSelector/VariantSelector";
import Highlights from "../Highlights/Highlights";
import Description from "../Description/Description";
import Details from "../Details/Details";
import Recommended from "../Recommended/Recommended";
import FeaturedPosts from "../FeaturedPosts/FeaturedPosts";
import Reviews from "../Reviews/Reviews";
import Breadcrumb from "../BreadCrumb/Breadcrumb";
import { useSelector } from "react-redux";
import { getStars } from "../../assets/helpers/helper";
import Price from "../Price/Price";

const Showcase = forwardRef((props, ref) => {
  const collageRef = useRef();
  const [state, setState] = useState({ isExpanded: false });
  const { product, currentShowcase } = useSelector((state) => state.product);
  const expand = () => {
    const isExpanded = collageRef.current.getAttribute("aria-expanded");
    if (isExpanded === "false") {
      collageRef.current.setAttribute("aria-expanded", true);
      setState({ isExpanded: true });
    } else {
      collageRef.current.setAttribute("aria-expanded", false);
      setState({ isExpanded: false });
    }
  };

  return (
    <div className="showcase" ref={ref}>
      <div className="product-description-mobile hidden-l">
        <div className="flex-between">
          <Breadcrumb breadcrumb={product.breadcrumb} />
          <div className="flex f-regular">
            <div className="flex review-stars">
              {getStars(5).map((star, idx) => (
                <div key={idx}>{star}</div>
              ))}
            </div>
            <span className="review-count">{product.review?.count}</span>
          </div>
        </div>
        <div className="showcase__product-title f-bold-pro">
          {currentShowcase.name}
        </div>
        <div className="showcase__product-price flex">
          <Price
            price={currentShowcase.price}
            discount={currentShowcase.discount}
            bold
          />
          <sub className="f-regular">per pair</sub>
        </div>
        <span className="f-regular">(Inclusive of all taxes)</span>
      </div>
      <Collage ref={collageRef} />
      <div className="expand-btn flex-center">
        <button className="btn f-bold" onClick={expand}>
          {state.isExpanded ? (
            <>
              SHOW LESS <RiArrowUpSLine />
            </>
          ) : (
            <>
              SHOW MORE <RiArrowDownSLine />
            </>
          )}
        </button>
      </div>
      <VariantSelector />
      <div className="accordion-container">
        <Highlights />
        <Description />
        <Details />
      </div>
      <Recommended title={"YOU MAY ALSO LIKE"} />
      <div className="accordion-container">
        <FeaturedPosts />
        <Reviews />
      </div>
      <Recommended title={"OTHERS ALSO BOUGHT"} />
      <Recommended title={"RECENTLY VIEWED ITEMS"} />
    </div>
  );
});

export default Showcase;
