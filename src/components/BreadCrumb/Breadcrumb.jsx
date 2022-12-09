import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Breadcrumb.css";

export class Breadcrumb extends Component {
  render() {
    return (
      <div className="breadcrumb f-regular flex-center">
        {this.props.breadcrumb?.map((path, idx) => {
          return (
            <div key={idx}>
              <Link to={path.to}>{path.name}</Link>
              {idx >= 0 && idx < this.props.breadcrumb.length - 1 ? (
                <span>&nbsp;/&nbsp;</span>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Breadcrumb;
