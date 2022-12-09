import React from "react";
import { Link } from "react-router-dom";

import "./HeaderMid.scss";

const HeaderMid = () => {
  return (
    <>
      <nav className="header-mid flex f-light">
        <div>
          <Link to="/">help</Link>
        </div>
        <div>
          <Link to="/">returns</Link>
        </div>
        <div>
          <Link to="/">order tracker</Link>
        </div>
        <div>
          <Link to="/">sign up</Link>
        </div>
      </nav>
    </>
  );
};

export default HeaderMid;
