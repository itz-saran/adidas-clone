import React from "react";
import { useSelector } from "react-redux";
import CreateAccount from "../../components/CreateAccount/CreateAccount";
import Header from "../../components/Header/Header";
import WishlistItem from "../../components/WishlistItem/WishlistItem";
import Footer from "../../components/Footer/Footer";

import "./Wishlist.scss";

const Wishlist = () => {
  const { wishlist, count } = useSelector((state) => state.wishlist);
  return (
    <>
      <Header />
      <section>
        <div className="wishlist col-s-12 col-xl-20 offset-xl-2 offset-hg-5 col-hg-15">
          <div className="wishlist__container col-s-12 col-l-16 col-xl-24">
            <div className="wishlist__container__view col-s-12 col-l-22 col-xl-20 col-hg-18 offset-l-1 offset-xl-2 offset-hg-3">
              <div className="wishlist__title">
                <h2 className="title-lg f-bold-pro">MY WISHLIST</h2>
                <div className="vspace-xs"></div>
                <span className="f-regular">{count} ITEMS(s)</span>
              </div>
              <div className="wishlist-item-group row vspace-s">
                {wishlist.map((item, idx) => (
                  <WishlistItem
                    className="col-s-3"
                    wishlistItem={item}
                    key={idx}
                  />
                ))}
                <CreateAccount />
              </div>
              <div className="vspace-l"></div>
              <div className="vspace-m"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Wishlist;
