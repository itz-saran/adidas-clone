import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import Breadcrumb from "../BreadCrumb/Breadcrumb";
import ProductImage from "../ProductImage/ProductImage";
import { AiOutlineRollback } from "react-icons/ai";

import "./Collage.scss";
import { Link } from "react-router-dom";

const Collage = forwardRef((props, ref) => {
  const productData = useSelector((state) => state.product);
  return (
    <div className="collage-wrapper" aria-expanded="false" ref={ref}>
      <div className="breadcrumb-wrapper visible-l">
        <div className="flex-center">
          <div className="back-btn f-regular">
            <Link to={-1} className="back-btn">
              <AiOutlineRollback />
              back
            </Link>
          </div>
          <Breadcrumb breadcrumb={productData.product.breadcrumb} />
        </div>
      </div>
      <div className="collage grid">
        {productData.currentShowcase.images?.showcase.map((image, idx) => (
          <ProductImage key={idx} image={image} />
        ))}
      </div>
    </div>
  );
});

export default Collage;
