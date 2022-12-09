import React from "react";

import "./Hoverable.css";

const Hoverable = ({ bold, title, children, content }) => {
  function showHoverable(e) {
    // console.log(e.currentTarget);
  }
  return (
    <>
      <h2 className={bold ? "f-bold" : "f-light"} onMouseOver={showHoverable}>
        {title}
      </h2>
      {children}
    </>
  );
};

export default Hoverable;
