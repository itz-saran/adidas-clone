import React, { forwardRef } from "react";
import { toINR } from "../../assets/helpers/helper";

import "./Price.scss";

const Price = forwardRef((props, ref) => {
  let { discount, price, bold, children } = props;

  discount ??= 0;
  price ??= 0;

  return (
    <div className="price-detail flex-column" ref={ref}>
      {children ?? ""}
      <div className="flex flex-wrap">
        <div className={`price f-regular ${discount ? "strike" : ""}`}>
          {toINR(price)}
        </div>
        {discount ? (
          <div className={`price red ${bold ? "f-bold" : ""}`}>
            {toINR(price - price * (discount / 100))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
});

export default Price;
