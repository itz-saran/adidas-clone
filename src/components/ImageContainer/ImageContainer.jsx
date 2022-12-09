import React, { Component } from "react";

import "./ImageContainer.css";

export class ImageContainer extends Component {
  render() {
    return (
      <div>
        {this.props.video ? (
          <video preload="auto" loop autoPlay src={this.props.srcBase ?? ""}>
            {/* <source srcSet={`${this.props.srcBase ?? ""}`} /> */}
          </video>
        ) : (
          <picture>
            <source
              media="(min-width: 960px)"
              srcSet={`${this.props.srcLg ?? ""}`}
            />
            <source
              media="(min-width: 600px)"
              srcSet={`${this.props.srcMd ?? ""}`}
            />
            <source srcSet={`${this.props.srcSm ?? ""}`} />
            <img src={`${this.props.srcBase ?? ""}`} alt="" />
          </picture>
        )}
      </div>
    );
  }
}

export default ImageContainer;
