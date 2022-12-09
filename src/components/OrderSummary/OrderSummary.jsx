import React from "react";
import { useSelector } from "react-redux";

import { toINR } from "../../assets/helpers/helper";
import ButtonOutline from "../../components/ButtonOutline/ButtonOutline";
import Coupon from "../Coupon/Coupon";

import "./OrderSummary.scss";

const OrderSummary = () => {
  const { total, count, delivery, discountPrice, billAmount } = useSelector(
    (state) => state.cart
  );

  return (
    <aside className="summary-container col-s-12 col-l-9 col-xl-7 offset-l-1 flex-column">
      {count > 0 ? (
        <>
          <ButtonOutline title={"CHECK OUT"} bold fullwidth theme={"black"} />
          <div className="order__summary-panel vspace-m">
            <div className="order-summary f-regular">
              <h3 className="f-bold-pro order-summary__title">ORDER SUMMARY</h3>
              <div className="order-summary__item flex-between">
                <span>Original Price</span>
                <span>{toINR(total)}</span>
              </div>
              <div className="order-summary__item flex-between">
                <span>on sale</span>
                <span>{toINR(discountPrice)}</span>
              </div>
              <div className="order-summary__item flex-between">
                <span>{count} ITEM(S)</span>
                <span>{toINR(total - discountPrice)}</span>
              </div>
              <div className="order-summary__item flex-between">
                <span>DELIVERY</span>
                <span>{delivery === 0 ? "FREE" : toINR(delivery)}</span>
              </div>
              <div className="order-summary__total flex-between f-bold-pro">
                <span>TOTAL</span>
                <span>{toINR(billAmount)}</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      <div className="vspace-xs">
        <Coupon />
      </div>
      <div className="summary-bottom__content vspace-m">
        <img
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/visa-master-rupay-cd_tcm209-732258.png"
          alt=""
        />
      </div>
    </aside>
  );
};

export default OrderSummary;
