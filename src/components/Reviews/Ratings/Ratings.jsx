import React from "react";
import { Link } from "react-router-dom";
import { getStars } from "../../../assets/helpers/helper";
import ComparisonBar from "../../ComparisonBar/ComparisonBar";
import Filter from "../../Filter/Filter";
import Subrating from "../Subrating/Subrating";

import "./Ratings.css";

const Ratings = ({ product }) => {
  const { reviews } = product;
  return (
    <div className="ratings-container">
      <div className="ratings-header flex-between">
        <strong className="f-bold">{`${reviews?.ratings.count} Reviews`}</strong>
        <Link to="./submit-review" className="f-regular">
          Write a review
        </Link>
      </div>
      <div className="overall-ratings flex-center">
        <div className="stars flex">
          {getStars(reviews?.ratings.stars).map((element, idx) => (
            <div key={idx}>{element}</div>
          ))}
        </div>
        <div className="out-of-5 f-bold-pro">{reviews?.ratings.stars}</div>
      </div>
      <div className="subratings f-bold flex-around">
        <Subrating rating={reviews?.ratings.comfort} label={"Comfort"} />
        <Subrating rating={reviews?.ratings.quality} label={"Quality"} />
      </div>
      <div className="comparison-bars flex-column">
        <ComparisonBar
          title={"Size"}
          labels={["Too small", "Perfect", "Too large"]}
          value={reviews?.ratings.size}
        />
        <ComparisonBar
          title={"Width"}
          labels={["Too narrow", "Perfect", "Too wide"]}
          value={reviews?.ratings.width}
        />
      </div>
      <Filter />
    </div>
  );
};

export default Ratings;
