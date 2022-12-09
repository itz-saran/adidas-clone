import React, { Component } from "react";
import ButtonOutline from "../ButtonOutline/ButtonOutline";

import "./NewsLetter.css";

export class NewsLetter extends Component {
  render() {
    return (
      <>
        <div className="newsletter">
          <div className="newsletter-wrapper flex-center">
            <div className="title f-bold-pro">JOIN ADIDAS AND GET 15% OFF</div>
            <ButtonOutline to="/" title="SIGN UP" theme="black" bold />
          </div>
        </div>
      </>
    );
  }
}

export default NewsLetter;
