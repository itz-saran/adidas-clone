import React from "react";
import { useSelector } from "react-redux";
import Accordion from "../Accordion/Accordion";
import Comments from "./Comments/Comments";
import Ratings from "./Ratings/Ratings";
import "./Reviews.css";

const Reviews = () => {
  const productData = useSelector((state) => state.product);
  return (
    <Accordion
      title={"Reviews"}
      stars={productData.product.reviews?.ratings.stars}
    >
      <div className="flex-between">
        <Ratings product={productData.product} />
        <Comments comments={productData.product.reviews?.comments} />
      </div>
    </Accordion>
  );
};

export default Reviews;
