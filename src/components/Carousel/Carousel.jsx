import React, { Component, createRef } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import InstagramCard from "../InstagramCard/InstagramCard";
import NewsCard from "../NewsCard/NewsCard";

import ProductCard from "../ProductCard/ProductCard";

import "./Carousel.css";

export class Carousel extends Component {
  constructor(props) {
    super(props);
    this.findWidth = this.findWidth.bind(this);
    this.cardListRef = createRef();
    this.cardWidth = null;
    this.moveCarousal = this.moveCarousal.bind(this);
  }

  moveCarousal(direction, times = 0) {
    times = times <= 0 ? 4 : times;
    direction = direction.toLowerCase();
    switch (direction) {
      case "left":
        this.cardListRef.current.scrollBy(-(times * this.cardWidth), 0);
        break;
      case "right":
        this.cardListRef.current.scrollBy(times * this.cardWidth, 0);
        break;
      default:
        break;
    }
  }

  findWidth(e) {
    this.cardWidth = e.current.offsetWidth;
  }

  render() {
    return (
      <>
        <div className={`carousel-wrapper ${this.props.lg ?? ""}`}>
          <div
            className="carousel-btn btn-left flex-center"
            onClick={() => this.moveCarousal("left", this.props.moveBy ?? 0)}
          >
            <FaArrowLeft />
          </div>
          <div className="card-list flex" ref={this.cardListRef}>
            {this.props.products
              ? this.props.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    callback={this.findWidth}
                    newItem
                  />
                ))
              : ""}
            {this.props.news
              ? this.props.news.map((news) => {
                  return (
                    <NewsCard
                      callback={this.findWidth}
                      newsItem={news}
                      key={news.id}
                    />
                  );
                })
              : ""}
            {this.props.mediaPost
              ? this.props.mediaPost.map((post, idx) => (
                  <InstagramCard
                    post={post}
                    callback={this.findWidth}
                    key={idx}
                  />
                ))
              : ""}
          </div>
          <div
            className="carousel-btn btn-right flex-center"
            onClick={() => this.moveCarousal("right", this.props.moveBy ?? 0)}
          >
            <FaArrowRight />
          </div>
        </div>
      </>
    );
  }
}

export default Carousel;
