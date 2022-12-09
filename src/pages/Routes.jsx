import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Cart from "./Cart/Cart";

import Home from "./Home/Home";
import Product from "./Product/Product";
import Wishlist from "./Wishlist/Wishlist";

const PageRoutes = () => {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:category/:SKU" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
