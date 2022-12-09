import React from "react";

import { BiUser } from "react-icons/bi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import SearchBar from "../SearchBar/SearchBar";

import "./HeaderMenuRight.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderMenuRight = () => {
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  return (
    <>
      <div className="menu-right flex">
        <SearchBar />
        <div className="flex icon-group">
          <div>
            <BiUser />
          </div>
          <Link to="/wishlist">
            <div className="wishlist-container">
              {wishlist.count > 0 ? (
                <>
                  <FaHeart />
                  <div className="item-count f-bold flex-center">
                    {wishlist.count}
                  </div>
                </>
              ) : (
                <FaRegHeart />
              )}
            </div>
          </Link>
          <Link to="/cart">
            <div className="bag-container">
              <BsBag />
              {cart.count > 0 ? (
                <div className="item-count f-bold flex-center">
                  {cart.count}
                </div>
              ) : (
                ""
              )}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderMenuRight;
