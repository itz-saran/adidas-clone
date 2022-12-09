import React, { Component } from "react";
import { Link } from "react-router-dom";

import ImageContainer from "../ImageContainer/ImageContainer";

import "./NewsCard.css";

export class NewsCard extends Component {
  render() {
    const { mediaLinks } = this.props.newsItem;
    return (
      <div className="news-card flex-column">
        <div className="news-img">
          {this.props.newsItem.video ? (
            <ImageContainer video srcBase={mediaLinks.srcBase} />
          ) : (
            <ImageContainer
              srcLg={mediaLinks.srcLg}
              srcMd={mediaLinks.srcMd}
              srcSm={mediaLinks.srcSm}
              srcBase={mediaLinks.srcBase}
            />
          )}
        </div>
        <div className="news-description flex-column f-bold">
          <div className="news-title">{this.props.newsItem.title}</div>
          <p className="news-line f-regular">{this.props.newsItem.content}</p>
          <div className="news-link flex-column">
            <Link to={this.props.newsItem.to}>
              {this.props.newsItem.linkTitle}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsCard;
