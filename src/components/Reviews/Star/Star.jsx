import React from "react";

import "./Star.css";

const Star = ({ fill }) => {
  return (
    <div className="star-wrapper">
      <div className="rating-star-mask" style={{ width: `${fill ?? 100}%` }}>
        <svg
          className="rating-star"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            stroke="0"
            d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"
          ></path>
        </svg>
      </div>
      <svg
        className="rating-star"
        viewBox="0 0 15 15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeMiterlimit={10}
          d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"
        ></path>
      </svg>
    </div>
  );
};

export default Star;
