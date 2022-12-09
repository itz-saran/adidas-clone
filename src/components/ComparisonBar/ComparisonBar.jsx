import React from "react";

import "./ComparisonBar.css";
const ComparisonBar = ({ title, labels, value }) => {
  const getHighlightedIndex = () => {
    if (value <= 30) return 0;
    if (value > 30 && value <= 70) return 1;
    return 2;
  };
  return (
    <div className="comparison-bar">
      <div className="comparison-bar__title f-bold">{title}</div>
      <div className="comparison-bar__content">
        <div className="comparison-bar__content__wrapper">
          <div className="comparison-bar__bg"></div>
          <div
            className="comparison-bar__indicator"
            style={{
              marginLeft: `${value}%`,
              transform: `translateX(-${value}%)`,
            }}
          ></div>
        </div>
        <div className="comparison-bar__labels flex-between f-regular">
          {labels.map((label, idx) => {
            return (
              <div
                className={`comparison-bar__label ${
                  idx === getHighlightedIndex()
                    ? "comparison-bar__label--active"
                    : ""
                }`}
                key={idx}
              >
                {label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComparisonBar;
