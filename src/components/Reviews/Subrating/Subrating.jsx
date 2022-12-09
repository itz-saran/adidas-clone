import React from "react";
import Star from "../Star/Star";

import "./Subrating.css";

const Subrating = ({ rating, label }) => {
  return (
    <div className="flex-column">
      <div className="f-regular flex">
        <Star />
        {rating}
      </div>
      <div className="rating-label f-bold">{label}</div>
    </div>
  );
};

export default Subrating;
