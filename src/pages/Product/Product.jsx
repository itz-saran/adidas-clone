import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import "../../components/Header/Header";
import Header from "../../components/Header/Header";
import { getProduct } from "../../redux/productSlice";

import "./Product.scss";
import SidePanel from "../../components/SidePanel/SidePanel";
import Showcase from "../../components/Showcase/Showcase";
import NewsLetter from "../../components/SignUpAd/NewsLetter";
import Footer from "../../components/Footer/Footer";

const Product = (props) => {
  const params = useParams();
  const headerRef = useRef();
  const showcaseRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(params.SKU));
  }, [dispatch, params.SKU]);

  return (
    <>
      <Header ref={headerRef} />
      <main className="main-content">
        <Showcase ref={showcaseRef} />
        <SidePanel headerRef={headerRef} showcaseRef={showcaseRef} />
      </main>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Product;
