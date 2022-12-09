import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./pages/Routes";
import { calculateTotals } from "./redux/cartSlice";
import { getCarousels } from "./redux/carouselSlice";
import { getCount } from "./redux/wishlistSlice";

const App = () => {
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
    // ?added dispatch as dependency to avoid eslint exhaustive dependencies rule
  }, [dispatch, cart]);

  useEffect(() => {
    dispatch(getCount());
  }, [dispatch, wishlist]);

  useEffect(() => {
    dispatch(getCarousels());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <PageRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
