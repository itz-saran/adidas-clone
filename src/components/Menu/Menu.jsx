import React from "react";
import Hoverable from "../Hoverable/Hoverable";

import "./Menu.css";

const Menu = () => {
  return (
    <>
      <nav className="main-menu flex">
        <Hoverable
          title="MEN"
          bold
          content={{ name: "saran", dept: "cse" }}
        ></Hoverable>
        <Hoverable title="WOMEN" bold></Hoverable>
        <Hoverable title="KIDS" bold></Hoverable>
        <Hoverable title="SPORTS"></Hoverable>
        <Hoverable title="BRANDS"></Hoverable>
        <Hoverable title="COLLECTIONS"></Hoverable>
        <Hoverable title="OUTLET"></Hoverable>
      </nav>
    </>
  );
};

export default Menu;
