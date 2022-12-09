import React from "react";

import "./Filter.css";
import FilterByStars from "./FilterByStars/FilterByStars";
import FilterByTopic from "./FilterByTopic/FilterByTopic";

const Filter = () => {
  return (
    <div className="filters">
      <div className="filter">
        <div className="filter__title f-bold">Filter Reviews By</div>
        <FilterByTopic
          words={["Comfort", "Satisfaction", "Quality", "Appearance", "Fit"]}
        />
      </div>
      <div className="filter">
        <div className="filter__title f-bold">Select Stars</div>
        <FilterByStars options={[1, 2, 3, 4, 5]} />
      </div>
    </div>
  );
};

export default Filter;
