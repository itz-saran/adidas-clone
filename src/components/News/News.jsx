import React, { Component } from "react";

import Carousel from "../Carousel/Carousel";

import "./News.css";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = { news: [] };
  }
  render() {
    return (
      <section className="news-section">
        <div className="title-wrapper f-bold-pro">
          <div className="title-xl">WHATS HOT ?</div>
        </div>
        <Carousel news={this.props.news} />
      </section>
    );
  }
}

export default News;
