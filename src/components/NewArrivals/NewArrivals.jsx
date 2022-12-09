import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NewArrivals.css";
import Carousel from "../Carousel/Carousel";

export class NewArrivals extends Component {
  render() {
    return (
      <section className="new-arrivals">
        <div className="title-wrapper f-bold flex">
          <h1 className="f-bold-pro title-xl">NEW ARRIVALS</h1>
          <Link to="/">VIEW ALL</Link>
        </div>
        <Carousel products={this.props.newArrivals} />
      </section>
    );
  }
}

export default NewArrivals;
