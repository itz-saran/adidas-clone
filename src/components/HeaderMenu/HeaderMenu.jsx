import React from "react";

import "./HeaderMenu.scss";

import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import HeaderMenuRight from "../HeaderMenuRight/HeaderMenuRight";

const HeaderMenu = () => {
  return (
    <>
      <div className="header-menu-wrapper flex">
        <Logo />
        <Menu />
        <HeaderMenuRight />
      </div>
    </>
  );
};

export default HeaderMenu;
