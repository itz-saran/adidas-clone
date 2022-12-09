import React, { forwardRef } from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import HeaderMid from "../HeaderMid/HeaderMid";
import HeaderTop from "../HeaderTop/HeaderTop";

import "./Header.css";

const Header = forwardRef((props, ref) => {
  return (
    <>
      <section className="main-header" ref={ref}>
        <HeaderTop />
        <HeaderMid />
        <HeaderMenu />
      </section>
    </>
  );
});

export default Header;
