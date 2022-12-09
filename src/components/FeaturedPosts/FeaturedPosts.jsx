import React from "react";
import { useSelector } from "react-redux";
import Accordion from "../Accordion/Accordion";
import Carousel from "../Carousel/Carousel";

import "./FeaturedPosts.css";

const FeaturedPosts = () => {
  const productData = useSelector((state) => state.product);
  return (
    <Accordion title={"How to style"}>
      <span className="f-regular">
        mention @adidas on your instagram photos for a chance to get featured in
        our gallery
      </span>
      <Carousel moveBy={2} mediaPost={productData.product.mediaPosts} />
    </Accordion>
  );
};

export default FeaturedPosts;
