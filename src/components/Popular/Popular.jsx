import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./Popular.css";

export class Popular extends Component {
  render() {
    return (
      <>
        <div className="popular">
          <div className="popular-title flex-center">
            <h2 className="f-italic title-xl">POPULAR RIGHT NOW</h2>
          </div>
          <div className="btn-group f-light flex-center">
            <Link to="/originals">ORIGINALS</Link>
            <Link to="/slides">SLIDES</Link>
            <Link to="/search?q=bag">BAG</Link>
            <Link to="/nmd">NMD</Link>
            <Link to="/forum">FORUM</Link>
          </div>
        </div>
      </>
    );
  }
}

export default Popular;
