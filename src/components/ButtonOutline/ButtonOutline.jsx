import React, { Component } from "react";
import { Link } from "react-router-dom";

import { HiArrowNarrowRight } from "react-icons/hi";

import "./ButtonOutline.css";

export class ButtonOutline extends Component {
  render() {
    return (
      <div
        className={`btn-outline-${this.props.theme ?? ""} ${
          this.props.bold ? "f-bold" : ""
        }`}
        style={{
          maxWidth: this.props.fullwidth
            ? "100%"
            : `${10 + this.props.width ?? 0}rem`,
        }}
        onClick={this.props.onClick}
      >
        <div className="btn-outline">
          <Link to={this.props.to ?? "/"}>
            <div className="btn-content flex">
              <div>{this.props.title}</div>
              <div>
                <HiArrowNarrowRight />
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default ButtonOutline;
