import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSize } from "../../redux/productSlice";

import "./Size.css";

const Size = (props) => {
  const { stock } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const refList = useRef([]);
  refList.current = [];

  const selectCurrent = (e, data) => {
    dispatch(selectSize(data));
    refList.current?.forEach((btn) => btn.classList.remove("selected"));
    e.target.classList.add("selected");
  };

  return (
    <div className="size-selector">
      <h4 className="f-bold">Sizes</h4>
      <div className="sizes grid">
        {props.sizes?.map(({ size, stock }, idx) => (
          <button
            onClick={(e) => selectCurrent(e, { size, stock })}
            key={idx}
            className="size flex-center"
            ref={(element) => (refList.current[idx] = element)}
          >
            {size}
          </button>
        ))}
      </div>
      {stock >= 1 && stock <= 10 ? (
        <div className="red alert">{`Only ${stock} left in stock`}</div>
      ) : (
        ""
      )}
      {stock === 0 ? <div className="red alert">{`Out of stock`}</div> : ""}
    </div>
  );
};

export default Size;
