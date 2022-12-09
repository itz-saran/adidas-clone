import React, { useRef } from "react";
import { HiPlus } from "react-icons/hi";

import "./Coupon.scss";

const Coupon = () => {
  const inputRef = useRef();
  return (
    <form className="coupon-form">
      <div className="form-item">
        <input
          id="coupon-input"
          type="text"
          className="coupon-input-field f-regular"
          ref={inputRef}
        />
        <label
          htmlFor="coupon-input f-regular"
          className="coupon-input-label f-regular"
          onClick={() => inputRef.current.focus()}
        >
          Enter your promo code
        </label>
        <div className="icon add-icon">
          <HiPlus />
        </div>
      </div>
    </form>
  );
};

export default Coupon;
