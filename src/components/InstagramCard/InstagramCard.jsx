import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import "./InstagramCard.css";

const InstagramCard = (props) => {
  const cardRef = useRef();
  useEffect(() => props.callback(cardRef), [props]);
  const productData = useSelector((state) => state.product);
  const { src, SKU } = props.post;
  return (
    <div className="instagram-card flex-column" ref={cardRef}>
      <img className="instagram-card-img" src={src} alt="" />
      <div className="product-thumbnail">
        <div className="thumbnail">
          <img
            src={
              productData.product.thumbnails.filter(
                (thumbnail) => thumbnail.SKU === SKU
              )[0].src
            }
            alt=""
          />
        </div>
        <div className="view-products flex-center">
          <button className="btn f-bold">VIEW PRODUCTS</button>
        </div>
      </div>
    </div>
  );
};

export default InstagramCard;
