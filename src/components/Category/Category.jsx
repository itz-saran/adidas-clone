import React, { Component } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import ImageContainer from "../ImageContainer/ImageContainer";

import "./Category.css";

export class Category extends Component {
  render() {
    return (
      <section className="category">
        <h2 className="category-title title-xl f-bold-pro">
          WHO ARE YOU SHOPPING FOR?
        </h2>
        <div className="card-wrapper f-bold grid">
          {this.props.content.map((cardContent, idx) => (
            <CategoryCard content={cardContent} key={idx}>
              <ImageContainer
                srcLg={cardContent.srcLg}
                srcMd={cardContent.srcMd}
                srcSm={cardContent.srcSm}
                srcBase={cardContent.srcBase}
              />
            </CategoryCard>
          ))}
        </div>
      </section>
    );
  }
}

export default Category;
