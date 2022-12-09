import React from "react";
import { FaRegCreditCard, FaTruck } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";

import "./HeaderTop.css";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <>
      <div className="header-top flex f-bold">
        <div className="header-top-wrapper flex">
          <div>
            <Link to="/">
              <FaRegCreditCard />
              MEMBERS WEEK IS LIVE
            </Link>
          </div>
          <div>
            <Link to="/">
              <FaTruck />
              FREE DELIVERY FOR ALL ORDERS NOW
            </Link>
          </div>
          <div>
            <Link to="/">
              <BsArrowLeftRight />
              FREE RETURNS
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
