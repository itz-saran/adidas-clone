import React from "react";
import { useSelector } from "react-redux";
import Accordion from "../Accordion/Accordion";

import "./Description.css";

const Description = () => {
  const productData = useSelector((state) => state.product);
  return (
    <Accordion title={"Description"}>
      <div className="description-wrapper grid-2">
        <div className="description">
          <div className="headline f-italic">
            {productData.product.description?.title}
          </div>
          <div className="f-regular">
            {productData.product.description?.content}
          </div>
        </div>
        <img
          className="description-img"
          src={productData.currentShowcase.images?.description}
          alt=""
        />
      </div>
    </Accordion>
  );
};

export default Description;
