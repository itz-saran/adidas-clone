import React from "react";
import { useSelector } from "react-redux";

import Carousel from "../Carousel/Carousel";

import "./Recommended.scss";

const Recommended = ({ title }) => {
  const productData = useSelector((state) => state.product);
  return (
    <section className="recommended">
      <div className="title f-bold-pro title-lg">{title}</div>
      <Carousel products={productData.product.recommended} moveBy={3} />
    </section>
  );
};

export default Recommended;
