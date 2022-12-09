import React from "react";
import Star from "../../Reviews/Star/Star";

import "./FilterByStars.css";

const FilterByStars = ({ options }) => {
  return (
    <div className="filter-by-stars flex f-regular">
      {options.map((rating, idx) => (
        <div className="filter-card flex" key={idx}>
          <Star />
          {rating}
        </div>
      ))}
    </div>
  );
};

export default FilterByStars;
