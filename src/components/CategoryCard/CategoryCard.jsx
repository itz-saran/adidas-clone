import React, { Component } from "react";

import "./CategoryCard.css";

export class CategoryCard extends Component {
  render() {
    return (
      <>
        <div>
          <div className="card">
            {this.props.children}
            <span>{this.props.content.title}</span>
          </div>
        </div>
      </>
    );
  }
}

export default CategoryCard;
