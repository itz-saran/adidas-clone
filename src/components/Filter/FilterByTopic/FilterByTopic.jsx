import React from "react";

import "./FilterByTopic.css";

const FilterByWords = ({ words }) => {
  return (
    <div className="filter-by-topic f-regular flex flex-wrap">
      {words.map((word, idx) => (
        <div className="filter-card filter-card--hover flex" key={idx}>
          {word}
        </div>
      ))}
    </div>
  );
};

export default FilterByWords;
